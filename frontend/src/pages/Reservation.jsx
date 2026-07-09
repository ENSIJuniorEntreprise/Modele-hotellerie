import { useState, useEffect, useRef, useCallback } from "react";
import "./Reservation.css";

// ─── helpers ───────────────────────────────────────────────
function formatDate(date) {
  const d = date.getDate().toString().padStart(2, "0");
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

function calculateNights(arrival, departure) {
  return Math.ceil(Math.abs(departure - arrival) / (1000 * 60 * 60 * 24));
}

function calculatePrice(adults, children, nights, room) {
  const roomPrices = {
    "Chambre Classique": 180,
    "Chambre Deluxe": 250,
    "Chambre Junior": 320,
    "Chambre Familiale": 400,
    "Suite Prestige": 550,
    "Suite Executive": 750,
  };
  const pricePerNight = roomPrices[room] || 300;
  return nights * (adults * pricePerNight + children * pricePerNight * 0.5);
}

// ─── Toast ─────────────────────────────────────────────────
function ToastContainer({ toasts }) {
  return (
    <div id="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          {t.message}
        </div>
      ))}
    </div>
  );
}

// ─── Calendar ──────────────────────────────────────────────
function Calendar({ field, selectedArrival, selectedDeparture, onSelect, onClose, position }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [month, setMonth] = useState(
    field === "departure" && selectedArrival
      ? selectedArrival.getMonth()
      : today.getMonth()
  );
  const [year, setYear] = useState(
    field === "departure" && selectedArrival
      ? selectedArrival.getFullYear()
      : today.getFullYear()
  );
  const calRef = useRef(null);

  const firstDayRaw = new Date(year, month, 1).getDay();
  const firstDay = (firstDayRaw + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  useEffect(() => {
    function handleClick(e) {
      if (calRef.current && !calRef.current.contains(e.target)) {
        onClose();
      }
    }
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClick);
    }, 100);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onClose]);

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const monthLabel = `${year}-${(month + 1).toString().padStart(2, "0")}`;

  const style = {
    position: "fixed",
    top: position.top,
    zIndex: 9999,
    ...(position.alignRight
      ? { right: position.right, left: "auto" }
      : { left: position.left }),
  };

  return (
    <div id="calendar-container" ref={calRef} style={style}>
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={prevMonth}>&lt;</button>
          <span id="month-year">{monthLabel}</span>
          <button onClick={nextMonth}>&gt;</button>
        </div>
        <div className="calendar-weekdays">
          {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => <span key={d}>{d}</span>)}
        </div>
        <div className="calendar-days">
          {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
            const dateObj = new Date(year, month, day);
            dateObj.setHours(0, 0, 0, 0);
            let disabled = false;
            if (field === "arrival") {
              if (dateObj < today) disabled = true;
              if (selectedDeparture && dateObj >= selectedDeparture) disabled = true;
            }
            if (field === "departure") {
              if (selectedArrival && dateObj <= selectedArrival) disabled = true;
            }
            const isSelected =
              (field === "arrival" && selectedArrival && dateObj.toDateString() === selectedArrival.toDateString()) ||
              (field === "departure" && selectedDeparture && dateObj.toDateString() === selectedDeparture.toDateString());

            return (
              <button
                key={day}
                disabled={disabled}
                className={isSelected ? "selected" : ""}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(dateObj);
                  onClose();
                }}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────
export default function Reservation() {
  const [selectedArrival, setSelectedArrival] = useState(null);
  const [selectedDeparture, setSelectedDeparture] = useState(null);
  const [calendarField, setCalendarField] = useState(null);
  const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0, alignRight: false, right: 0 });

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [travelerBoxOpen, setTravelerBoxOpen] = useState(false);

  const [formEnabled, setFormEnabled] = useState(false);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [room, setRoom] = useState("Type de chambre");

  const [summary, setSummary] = useState(null);
  const [toasts, setToasts] = useState([]);
  const toastId = useRef(0);

  const arrivalRef = useRef(null);
  const departureRef = useRef(null);
  const travelerBoxRef = useRef(null);
  const travelerDisplayRef = useRef(null);

  const fromChambres = new URLSearchParams(window.location.search).get("chambre");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const chambre = params.get("chambre");
    if (chambre) setRoom(chambre);
  }, []);

  const showToast = useCallback((message, type = "success") => {
    const id = ++toastId.current;
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  useEffect(() => {
    function handle(e) {
      if (
        travelerBoxRef.current && !travelerBoxRef.current.contains(e.target) &&
        travelerDisplayRef.current && !travelerDisplayRef.current.contains(e.target)
      ) {
        setTravelerBoxOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  // ─── Reset personal form ─────────────────────────────────
  function resetPersonalForm() {
    setFormEnabled(false);
    setNom("");
    setPrenom("");
    setEmail("");
    setPhone("");
    if (!fromChambres) setRoom("Type de chambre");
    setSummary(null);
  }

  // ─── Position calendrier sous l'élément cliqué ───────────
  function getCalendarPosition(ref) {
    const rect = ref.current.getBoundingClientRect();
    const calendarWidth = 300;
    const screenWidth = window.innerWidth;
    const gap = 8;

    let left = rect.left;
    let alignRight = false;
    let right = 0;

    if (left + calendarWidth > screenWidth - 10) {
      alignRight = true;
      right = screenWidth - rect.right;
    }

    return {
      top: rect.bottom + gap,
      left: Math.max(10, left),
      alignRight,
      right: Math.max(10, right),
    };
  }

  function openCalendar(field, ref) {
    if (field === "departure" && !selectedArrival) {
      showToast("Veuillez sélectionner d'abord la date d'arrivée", "warning");
      return;
    }
    const pos = getCalendarPosition(ref);
    setCalendarPosition(pos);
    setCalendarField(field);
  }

  function handleDateSelect(date) {
    if (calendarField === "arrival") {
      setSelectedArrival(date);
      if (selectedDeparture && selectedDeparture <= date) setSelectedDeparture(null);
    } else {
      setSelectedDeparture(date);
    }
  }

  function handleBookingConfirm() {
        if (children > 0 && adults === 0 && !selectedArrival && !selectedDeparture) {
      resetPersonalForm();
      showToast("Veuillez remplir les dates avant de continuer", "error");
      return;
    }
    // Priorité 1 : enfants sans adulte
    if (children > 0 && adults === 0 && selectedArrival && selectedDeparture) {
      resetPersonalForm();
      showToast("Vous devez avoir au moins un adulte pour effectuer une réservation", "warning");
      return;
    }
    // Priorité 2 : tout vide
    if (!selectedArrival && !selectedDeparture && adults === 0) {
      resetPersonalForm();
      showToast("Veuillez remplir toutes les cases avant de continuer", "error");
      return;
    }
    // Priorité 3 : pas d'adulte
    if (adults === 0 && selectedArrival && selectedDeparture) {
      resetPersonalForm();
      showToast("Veuillez remplir le nombre de personnes avant de continuer", "error");
      return;
    }
    // Priorité 4 : pas de dates du tout
    if (!selectedArrival && !selectedDeparture) {
      resetPersonalForm();
      showToast("Veuillez remplir les dates avant de continuer", "error");
      return;
    }
    // Priorité 5 : arrivée sans départ
    if (selectedArrival && !selectedDeparture) {
      resetPersonalForm();
      showToast("Veuillez remplir la date de départ avant de continuer", "error");
      return;
    }
    // Priorité 6 : départ sans arrivée
    if (!selectedArrival && selectedDeparture) {
      resetPersonalForm();
      showToast("Veuillez remplir la date d'arrivée avant de continuer", "error");
      return;
    }

    setFormEnabled(true);
    showToast("Sélection validée, vous pouvez remplir vos informations personnelles", "success");
  }

  // ─── Final confirm ────────────────────────────────────────
  function handleFinalConfirm() {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const emailRegex = /^[^\s@]+@[A-Za-z]([A-Za-z0-9-]*[A-Za-z0-9])?\.[A-Za-z]+$/;
    const phoneRegex = /^\+\d{1,3}\s\d{8,}$/;

    if (!nom || !nameRegex.test(nom)) {
      showToast("Nom invalide. Utilisez uniquement des lettres et espaces.", "error"); return;
    }
    if (!prenom || !nameRegex.test(prenom)) {
      showToast("Prénom invalide. Utilisez uniquement des lettres et espaces.", "error"); return;
    }
    if (!email || !emailRegex.test(email)) {
      showToast("Adresse e-mail invalide. Exemple : exemple@domaine.com", "error"); return;
    }
    if (!phone || !phoneRegex.test(phone)) {
      showToast("Numéro invalide. Format attendu : +xxx xxxxxxxx", "error"); return;
    }
    if (room === "Type de chambre") {
      showToast("Veuillez sélectionner un type de chambre valide.", "error"); return;
    }

    const nights = calculateNights(selectedArrival, selectedDeparture);
    const price = calculatePrice(adults, children, nights, room);
    setSummary({ nom, prenom, room, nights, price, persons: adults + children });
    showToast("Réservation confirmée avec succès !", "success");
  }

  return (
    <>
      <ToastContainer toasts={toasts} />

      {/* ── Hero ── */}
      <section id="section-hero">
        <div className="hero-background">
          <img
            src="image-reservation/ChatGPT Image 2 mars 2026, 13_51_57.png"
            alt="Hero Background"
            className="hero-img"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h2 className="hero-subtitle">RÉSERVATION</h2>
          <h1 className="hero-title">RÉSERVEZ VOTRE SÉJOUR D'EXCEPTION</h1>
          <p className="hero-desc">Une expérience luxueuse vous attend dès maintenant</p>
        </div>
      </section>

      {/* ── Booking bar ── */}
      <section id="section-booking-bar">
        <div className="booking-bar-container">

          {/* Arrival */}
          <div
            className="booking-item"
            ref={arrivalRef}
            onClick={() => openCalendar("arrival", arrivalRef)}
          >
            <div className="booking-icon">
              <img src="image-reservation/calendrier.png" alt="Calendar" />
            </div>
            <div className="booking-details">
              <span className="booking-label">ARRIVEE</span>
              <span className="booking-value">
                {selectedArrival ? formatDate(selectedArrival) : "Sélectionner"}
              </span>
            </div>
          </div>

          <div className="divider"></div>

          {/* Departure */}
          <div
            className="booking-item"
            ref={departureRef}
            onClick={() => openCalendar("departure", departureRef)}
          >
            <div className="booking-icon">
              <img src="image-reservation/calendrier.png" alt="Calendar" />
            </div>
            <div className="booking-details">
              <span className="booking-label">DEPART</span>
              <span className="booking-value">
                {selectedDeparture ? formatDate(selectedDeparture) : "Sélectionner"}
              </span>
            </div>
          </div>

          <div className="divider"></div>

          {/* Travelers */}
          <div className="booking-item traveler-selector">
            <div className="booking-icon">
              <img src="image-reservation/utilisateur.png" alt="User" />
            </div>
            <div
              className="booking-details"
              ref={travelerDisplayRef}
              onClick={() => setTravelerBoxOpen(o => !o)}
            >
              <span className="booking-label">VOYAGEUR</span>
              <span className="booking-value">
                {adults} Adultes, {children} Enfants -12 ans
              </span>
            </div>

            {travelerBoxOpen && (
              <div className="traveler-box active" ref={travelerBoxRef}>
                <div className="traveler-row">
                  <span>Adultes</span>
                  <div className="traveler-controls">
                    <button onClick={(e) => { e.stopPropagation(); setAdults(a => Math.max(0, a - 1)); }}>▼</button>
                    <span>{adults}</span>
                    <button onClick={(e) => { e.stopPropagation(); setAdults(a => a + 1); }}>▲</button>
                  </div>
                </div>
                <div className="traveler-row">
                  <span>Enfants -12 ans</span>
                  <div className="traveler-controls">
                    <button onClick={(e) => { e.stopPropagation(); setChildren(c => Math.max(0, c - 1)); }}>▼</button>
                    <span>{children}</span>
                    <button onClick={(e) => { e.stopPropagation(); setChildren(c => c + 1); }}>▲</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="booking-btn" onClick={handleBookingConfirm}>
            CONFIRMER
          </button>
        </div>
      </section>

      {/* ── Calendar popup ── */}
      {calendarField && (
        <Calendar
          field={calendarField}
          selectedArrival={selectedArrival}
          selectedDeparture={selectedDeparture}
          onSelect={handleDateSelect}
          onClose={() => setCalendarField(null)}
          position={calendarPosition}
        />
      )}

      {/* ── Reservation form ── */}
      <section id="section-reservation-form">
        <div className="form-container">

          <div className="form-column">
            <div className="input-group-row">
              <div className="input-wrapper">
                <label className="input-label">Nom et prénom :</label>
                <div className="row-inputs">
                  <input
                    type="text" className="form-input" placeholder="Nom"
                    disabled={!formEnabled} value={nom}
                    onChange={e => setNom(e.target.value)}
                  />
                  <input
                    type="text" className="form-input" placeholder="Prénom"
                    disabled={!formEnabled} value={prenom}
                    onChange={e => setPrenom(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="input-wrapper">
              <label className="input-label">Adresse e-mail :</label>
              <input
                type="email" className="form-input full-width" placeholder="hotel@gmail.com"
                disabled={!formEnabled} value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label className="input-label">Numéro de téléphone :</label>
              <input
                type="tel" className="form-input full-width" placeholder="+xxx xxxxxxxx"
                disabled={!formEnabled} value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label className="input-label">Type de chambre :</label>
              <div className="select-wrapper">
                <select
                  className="form-input full-width"
                  disabled={!formEnabled || !!fromChambres}
                  value={room}
                  onChange={e => setRoom(e.target.value)}
                >
                  <option disabled value="Type de chambre">Type de chambre</option>
                  <option>Chambre Classique</option>
                  <option>Chambre Deluxe</option>
                  <option>Chambre Junior</option>
                  <option>Chambre Familiale</option>
                  <option>Suite Prestige</option>
                  <option>Suite Executive</option>
                </select>
                <img src="image-reservation/fleche-vers-le-bas.png" className="select-arrow" alt="arrow" />
              </div>
            </div>
          </div>

          <div className="summary-column">
            <div className="summary-card">
              <h3 className="summary-title">Récapitulatif de votre réservation</h3>
              <span className="summary-room">{summary ? summary.room : "-"}</span>

              <table className="summary-grid">
                <tbody>
                  <tr>
                    <td className="s-label">Date d'arrivée</td>
                    <td className="s-value">{summary && selectedArrival ? formatDate(selectedArrival) : ""}</td>
                  </tr>
                  <tr>
                    <td className="s-label">Date de départ</td>
                    <td className="s-value">{summary && selectedDeparture ? formatDate(selectedDeparture) : ""}</td>
                  </tr>
                  <tr>
                    <td className="s-label">Personnes</td>
                    <td className="s-value">{summary ? summary.persons : ""}</td>
                  </tr>
                  <tr>
                    <td className="s-label">Contact</td>
                    <td className="s-value">{summary ? `${summary.nom} ${summary.prenom}` : ""}</td>
                  </tr>
                  <tr>
                    <td className="s-label">Nuits</td>
                    <td className="s-value">{summary ? summary.nights : ""}</td>
                  </tr>
                  <tr>
                    <td className="s-label">Prix total</td>
                    <td className="s-value">{summary ? `${summary.price} DT` : ""}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="confirm-action">
          <button className="btn-confirm-final" onClick={handleFinalConfirm}>
            CONFIRMER VOTRE RESERVATION
          </button>
        </div>
      </section>
    </>
  );
}
