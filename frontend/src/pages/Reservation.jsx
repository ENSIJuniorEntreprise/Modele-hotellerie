// ---------------------- Variables ----------------------
let selectedArrival = null;
let selectedDeparture = null;
let activeDateField = null;

const arrivalDisplay = document.getElementById('arrival-date');
const departureDisplay = document.getElementById('departure-date');
const arrivalInput = document.getElementById('arrival-input');
const departureInput = document.getElementById('departure-input');
const calendarContainer = document.getElementById('calendar-container');
const calendarDays = calendarContainer.querySelector('.calendar-days');
const monthYearLabel = calendarContainer.querySelector('#month-year');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// ---------------------- Toast ----------------------
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);

    // Animation d'apparition et disparition
    setTimeout(() => {
        toast.style.opacity = 0;
        toast.style.transform = "translateX(100%)";
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// ---------------------- Calendar ----------------------
function showCalendar(field) {
    if (field === 'departure' && !selectedArrival) {
        showToast("Veuillez sélectionner d'abord la date d'arrivée", 'warning');
        return;
    }
    activeDateField = field;
    calendarContainer.style.display = 'block';
    const rect = field === 'arrival' 
        ? arrivalDisplay.getBoundingClientRect() 
        : departureDisplay.getBoundingClientRect();
    calendarContainer.style.top = rect.bottom + window.scrollY + 'px';
    calendarContainer.style.left = rect.left + 'px';
    renderCalendar(currentMonth, currentYear);
}

function renderCalendar(month, year) {
    // Correction du décalage des jours : lundi = 0
    const firstDayRaw = new Date(year, month, 1).getDay(); // 0 = dimanche
    const firstDay = (firstDayRaw + 6) % 7; // 0 = lundi

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    monthYearLabel.textContent = `${year}-${(month + 1).toString().padStart(2,'0')}`;
    calendarDays.innerHTML = '';

    for (let i = 0; i < firstDay; i++) calendarDays.appendChild(document.createElement('div'));

    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const btn = document.createElement('button');
        btn.textContent = day;
        const dateObj = new Date(year, month, day);

        if (activeDateField === 'arrival') {
            if (dateObj < today) btn.disabled = true;
            if (selectedDeparture && dateObj >= selectedDeparture) btn.disabled = true;
        }
        if (activeDateField === 'departure') {
            if (dateObj <= selectedArrival) btn.disabled = true;
        }

        if ((activeDateField === 'arrival' && selectedArrival && dateObj.toDateString() === selectedArrival.toDateString()) ||
            (activeDateField === 'departure' && selectedDeparture && dateObj.toDateString() === selectedDeparture.toDateString())) {
            btn.classList.add('selected');
        }

        btn.addEventListener('click', () => {
            if (activeDateField === 'arrival') {
                selectedArrival = dateObj;
                arrivalDisplay.textContent = formatDate(dateObj);
                arrivalInput.value = formatDate(dateObj);
                if (selectedDeparture && selectedDeparture <= selectedArrival) {
                    selectedDeparture = null;
                    departureDisplay.textContent = 'Sélectionner';
                    departureInput.value = '';
                }
            } else {
                selectedDeparture = dateObj;
                departureDisplay.textContent = formatDate(dateObj);
                departureInput.value = formatDate(dateObj);
            }
            calendarContainer.style.display = 'none';
        });

        calendarDays.appendChild(btn);
    }
}

// Navigation mois
document.getElementById('prev-month').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendar(currentMonth, currentYear);
});
document.getElementById('next-month').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    renderCalendar(currentMonth, currentYear);
});

function formatDate(date) {
    const d = date.getDate().toString().padStart(2,'0');
    const m = (date.getMonth()+1).toString().padStart(2,'0');
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
}

arrivalDisplay.addEventListener('click', () => showCalendar('arrival'));
departureDisplay.addEventListener('click', () => showCalendar('departure'));

// Fermer le calendrier si clic à l’extérieur
document.addEventListener('click', (e) => {
    if (!calendarContainer.contains(e.target) && e.target !== arrivalDisplay && e.target !== departureDisplay) {
        calendarContainer.style.display = 'none';
    }
});

// ---------------------- Traveler Selector ----------------------
const travelerDisplay = document.getElementById('traveler-display');
const travelerBox = document.getElementById('traveler-box');
const adultMinus = document.getElementById('adult-minus');
const adultPlus = document.getElementById('adult-plus');
const adultCount = document.getElementById('adult-count');
const childMinus = document.getElementById('child-minus');
const childPlus = document.getElementById('child-plus');
const childCount = document.getElementById('child-count');
// Initialisation par défaut à 0
adultCount.textContent = '0';
childCount.textContent = '0';
updateTravelerDisplay();

travelerDisplay.addEventListener('click', () => travelerBox.classList.toggle('active'));

adultPlus.addEventListener('click', () => { adultCount.textContent = parseInt(adultCount.textContent)+1; updateTravelerDisplay(); });
adultMinus.addEventListener('click', () => { if(parseInt(adultCount.textContent)>0){ adultCount.textContent=parseInt(adultCount.textContent)-1; updateTravelerDisplay(); } });
childPlus.addEventListener('click', () => { childCount.textContent=parseInt(childCount.textContent)+1; updateTravelerDisplay(); });
childMinus.addEventListener('click', () => { if(parseInt(childCount.textContent)>0){ childCount.textContent=parseInt(childCount.textContent)-1; updateTravelerDisplay(); } });

function updateTravelerDisplay(){
    travelerDisplay.textContent = `${adultCount.textContent} Adultes, ${childCount.textContent} Enfants -12 ans`;
}
// Fermer le sélecteur de voyageurs si clic à l'extérieur
document.addEventListener('click', (e) => {
    if (!travelerBox.contains(e.target) && e.target !== travelerDisplay) {
        travelerBox.classList.remove('active');
    }
});

// ---------------------- Booking Confirmation ----------------------
document.getElementById('booking-confirm').addEventListener('click', () => {
    const adults = parseInt(adultCount.textContent);
    const children = parseInt(childCount.textContent);

    if (!selectedArrival && adults < 1) {
        showToast('Veuillez remplir toutes les cases avant de continuer', 'error');
        return;
    }
        if (adults < 1 && selectedArrival && selectedDeparture) {
        showToast('Veuillez remplir le nombre des personnes qui vont réservées avant de continuer', 'error');
        return;
    }
        if (!selectedArrival && !selectedDeparture && adults > 0) {
        showToast('Veuillez remplir les dates avant de continuer', 'error');
        return;
    }
        if (selectedArrival && !selectedDeparture && adults > 0) {
        showToast('Veuillez remplir la date de départ avant de continuer', 'error');
        return;
    }
    if (selectedArrival && !selectedDeparture && adults < 1) {
        showToast('Veuillez remplir la date de départ et le nombre des personnes qui vont réservées avant de continuer', 'error');
        return;
    }
    document.getElementById('nom').disabled = false;
    document.getElementById('prenom').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('phone').disabled = false;
    document.getElementById('room').disabled = false;

    showToast('Sélection validée, vous pouvez remplir vos informations personnelles', 'success');
});

// ---------------------- Final Confirmation ----------------------
// ---------------------- Validation avancée ----------------------
document.getElementById('final-confirm').addEventListener('click', () => {
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const room = document.getElementById('room').value;

    // Regex pour nom et prénom : lettres et espaces seulement
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    // Regex pour email strict
    const emailRegex = /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z]+\.[A-Za-z]+$/;

    // Regex pour téléphone : + suivi de 1 à 3 chiffres puis espace et au moins 8 chiffres
    const phoneRegex = /^\+\d{1,3}\s\d{8,}$/;

    // Vérification nom
    if(!nom || !nameRegex.test(nom)){
        showToast('Nom invalide. Utilisez uniquement des lettres et espaces.', 'error');
        return;
    }

    // Vérification prénom
    if(!prenom || !nameRegex.test(prenom)){
        showToast('Prénom invalide. Utilisez uniquement des lettres et espaces.', 'error');
        return;
    }

    // Vérification email
    if(!email || !emailRegex.test(email)){
        showToast('Adresse e-mail invalide. Exemple valide : exemple@domaine.com', 'error');
        return;
    }

    // Vérification téléphone
    if(!phone || !phoneRegex.test(phone)){
        showToast('Numéro de téléphone invalide. Format attendu : +xxx xxxxxxxx', 'error');
        return;
    }

    // Vérification type de chambre
    if(room === "Type de chambre"){
        showToast('Veuillez sélectionner un type de chambre valide.', 'error');
        return;
    }

    // Tout est valide → remplir le récapitulatif
    document.querySelector('.summary-grid tr:nth-child(4) .s-value').textContent = `${nom} ${prenom}`;
    document.querySelector('.summary-room').textContent = room;
    // Mettre à jour les dates d'arrivée et de départ dans le récapitulatif
    document.getElementById('recap-arrival').textContent = formatDate(selectedArrival);
    document.getElementById('recap-departure').textContent = formatDate(selectedDeparture);
    document.getElementById('recap-nights').textContent = calculateNights(selectedArrival, selectedDeparture);
    document.querySelector('.summary-grid tr:nth-child(3) .s-value').textContent = parseInt(adultCount.textContent) + parseInt(childCount.textContent);
    const nights = calculateNights(selectedArrival, selectedDeparture);
    const adults = parseInt(adultCount.textContent);
    const children = parseInt(childCount.textContent);
    document.getElementById('recap-price').textContent = `${calculatePrice(adults, children, nights)} DT`;

    showToast('Réservation confirmée avec succès !', 'success');
    
});

// ---------------------- Helpers ----------------------
function calculateNights(arrival, departure){
    const diffTime = Math.abs(departure - arrival);
    return Math.ceil(diffTime / (1000*60*60*24));
}

function calculatePrice(adults, children, nights){
    const priceAdult = 300;
    const priceChild = 150;
    return nights * (adults * priceAdult + children * priceChild);
}