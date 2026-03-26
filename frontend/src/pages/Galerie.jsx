import { useEffect, useState, useRef } from "react";
import galerie from "../assets/galerie.png";

// ─── CAROUSEL DATA ───
const slides = [
  { id: 1, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80", label: "Piscine & Détente" },
  { id: 2, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80", label: "Suite Prestige" },
  { id: 3, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80", label: "Vue Panoramique" },
  { id: 4, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80", label: "Spa & Bien-être" },
  { id: 5, image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=80", label: "Restaurant" },
];

// ─── CAROUSEL ───
function GalerieCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const timeoutRef = useRef(null);

  const goTo = (index, dir = "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => { setCurrent(index); setAnimating(false); }, 420);
  };
  const prev = () => goTo((current - 1 + slides.length) % slides.length, "left");
  const next = () => goTo((current + 1) % slides.length, "right");

  useEffect(() => {
    timeoutRef.current = setTimeout(next, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity:0; transform:scale(1.04) translateX(var(--tx)); }
          to   { opacity:1; transform:scale(1) translateX(0); }
        }
        .carousel-slide { animation: fadeSlideIn 0.42s ease forwards; }
        .carousel-nav { transition:all 0.22s ease; border:1px solid rgba(209,162,67,0.35); background:rgba(255,255,255,0.08); backdrop-filter:blur(6px); }
        .carousel-nav:hover { background:rgba(209,162,67,0.18); border-color:#D1A243; }
        .dot-pill { transition:all 0.3s ease; background:rgba(209,162,67,0.3); }
        .dot-pill.active { background:#D1A243; }
      `}</style>
      <div className="relative overflow-hidden rounded-sm shadow-2xl" style={{ aspectRatio:"16/7", border:"1px solid rgba(209,162,67,0.25)" }}>
        <img key={current} src={slides[current].image} alt={slides[current].label} className="carousel-slide absolute inset-0 w-full h-full object-cover" style={{ "--tx": direction==="right"?"-2%":"2%" }} />
        <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(10,8,5,0.55) 0%,transparent 55%)" }} />
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <p style={{ fontFamily:"'Inter',sans-serif", fontWeight:300, letterSpacing:"0.3em", fontSize:"0.65rem", color:"#D1A243", textTransform:"uppercase" }}>{slides[current].label}</p>
        </div>
        <button onClick={prev} className="carousel-nav absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full text-white" style={{ width:"2.4rem",height:"2.4rem" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button onClick={next} className="carousel-nav absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full text-white" style={{ width:"2.4rem",height:"2.4rem" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 mt-5">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i, i>current?"right":"left")} className={`dot-pill h-[3px] rounded-full ${i===current?"active":""}`} style={{ width:i===current?"2rem":"0.45rem" }} />
        ))}
      </div>
    </div>
  );
}

// ─── VIDEO PLAYER ───
function HotelVideoPlayer() {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [quality, setQuality] = useState("1080p");
  const [showQuality, setShowQuality] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hideTimeout = useRef(null);
  const qualities = ["4K", "1080p", "720p", "480p"];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };
  const handleTimeUpdate = () => { if (videoRef.current) setCurrentTime(videoRef.current.currentTime); };
  const handleLoadedMetadata = () => { if (videoRef.current) setDuration(videoRef.current.duration); };
  const handleSeek = (e) => {
    if (!progressRef.current || !videoRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    videoRef.current.currentTime = ratio * duration;
  };
  const handleVolume = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v); setMuted(v === 0);
    if (videoRef.current) videoRef.current.volume = v;
  };
  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted; setMuted(next);
    videoRef.current.muted = next;
  };
  const skipBackward = () => { if (videoRef.current) videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10); };
  const skipForward  = () => { if (videoRef.current) videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 10); };
  const formatTime = (s) => {
    if (isNaN(s)) return "0:00";
    const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sec = Math.floor(s%60);
    if (h > 0) return `${h}:${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
    return `${m}:${String(sec).padStart(2,"0")}`;
  };
  const progress = duration ? (currentTime / duration) * 100 : 0;
  const showControls = () => {
    setHovered(true);
    clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setHovered(false), 3000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <style>{`
        .vp-wrap { position:relative; background:#000; border-radius:2px; overflow:hidden; box-shadow:0 24px 80px rgba(0,0,0,0.28); border:1px solid rgba(209,162,67,0.2); aspect-ratio:16/9; cursor:pointer; }
        .vp-controls { position:absolute; bottom:0; left:0; right:0; padding:1.5rem 1.25rem 1.1rem; background:linear-gradient(to top,rgba(5,5,10,0.88) 0%,transparent 100%); transition:opacity 0.35s ease,transform 0.35s ease; }
        .vp-controls.hidden { opacity:0; transform:translateY(6px); pointer-events:none; }
        .vp-progress { width:100%; height:3px; background:rgba(255,255,255,0.2); border-radius:999px; cursor:pointer; position:relative; margin-bottom:0.85rem; transition:height 0.2s; }
        .vp-progress:hover { height:5px; }
        .vp-fill { height:100%; border-radius:999px; background:linear-gradient(to right,#D1A243,#E8C97A); position:relative; pointer-events:none; }
        .vp-thumb { position:absolute; right:-5px; top:50%; transform:translateY(-50%); width:11px; height:11px; background:#E8C97A; border-radius:50%; box-shadow:0 0 6px rgba(209,162,67,0.6); }
        .vp-btn { display:flex; align-items:center; justify-content:center; width:2.4rem; height:2.4rem; border-radius:50%; border:1px solid rgba(209,162,67,0.3); background:rgba(255,255,255,0.07); backdrop-filter:blur(6px); color:#fff; transition:all 0.2s; cursor:pointer; flex-shrink:0; }
        .vp-btn:hover { background:rgba(209,162,67,0.22); border-color:#D1A243; }
        .vp-btn.play { width:2.8rem; height:2.8rem; background:rgba(209,162,67,0.15); border-color:rgba(209,162,67,0.5); }
        .vp-btn.play:hover { background:rgba(209,162,67,0.32); }
        .vp-vol { -webkit-appearance:none; width:80px; height:3px; border-radius:999px; outline:none; cursor:pointer; }
        .vp-vol::-webkit-slider-thumb { -webkit-appearance:none; width:12px; height:12px; border-radius:50%; background:#E8C97A; cursor:pointer; }
        .vp-time { font-family:'Inter',sans-serif; font-size:0.72rem; font-weight:300; letter-spacing:0.05em; color:rgba(255,255,255,0.75); }
        .vp-qmenu { position:absolute; bottom:calc(100% + 8px); right:0; background:rgba(10,8,5,0.93); border:1px solid rgba(209,162,67,0.25); border-radius:4px; overflow:hidden; backdrop-filter:blur(12px); min-width:80px; z-index:50; }
        .vp-qitem { display:block; width:100%; padding:0.45rem 1rem; font-family:'Inter',sans-serif; font-size:0.72rem; letter-spacing:0.05em; color:rgba(255,255,255,0.7); text-align:center; cursor:pointer; transition:all 0.15s; }
        .vp-qitem:hover, .vp-qitem.sel { color:#D1A243; background:rgba(209,162,67,0.08); }
        .vp-bigplay { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; }
        .vp-bigplay .ring { width:5rem; height:5rem; border-radius:50%; border:1.5px solid rgba(209,162,67,0.6); background:rgba(0,0,0,0.35); backdrop-filter:blur(8px); display:flex; align-items:center; justify-content:center; transition:all 0.25s; }
        .vp-bigplay:hover .ring { background:rgba(209,162,67,0.25); border-color:#D1A243; transform:scale(1.06); }
      `}</style>

      <div className="vp-wrap" onMouseMove={showControls} onMouseEnter={showControls} onMouseLeave={() => setHovered(false)}>
        {/* ↓ Remplace src par le chemin de ta vidéo, ex: import hotelVideo from "../assets/hotel.mp4" */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setPlaying(false)}
          onClick={togglePlay}
          src="/hotel-video.mp4"
          poster="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80"
        />

        {/* Big play overlay */}
        {!playing && (
          <div className="vp-bigplay" onClick={togglePlay}>
            <div className="ring">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#E8C97A"><polygon points="6,3 20,12 6,21"/></svg>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className={`vp-controls ${!hovered && playing ? "hidden" : ""}`}>
          {/* Progress bar */}
          <div ref={progressRef} className="vp-progress" onClick={handleSeek}>
            <div className="vp-fill" style={{ width:`${progress}%` }}>
              <div className="vp-thumb" />
            </div>
          </div>

          {/* Row */}
          <div className="flex items-center justify-between gap-3">
            {/* Left */}
            <div className="flex items-center gap-2">
              <button className="vp-btn" onClick={skipBackward} title="−10s">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.47"/>
                </svg>
              </button>
              <button className="vp-btn play" onClick={togglePlay}>
                {playing
                  ? <svg width="13" height="13" viewBox="0 0 24 24" fill="#E8C97A"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                  : <svg width="13" height="13" viewBox="0 0 24 24" fill="#E8C97A"><polygon points="5,3 19,12 5,21"/></svg>
                }
              </button>
              <button className="vp-btn" onClick={skipForward} title="+10s">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-.49-3.47"/>
                </svg>
              </button>
              <span className="vp-time ml-1">{formatTime(currentTime)}</span>
              <span className="vp-time opacity-40">／</span>
              <span className="vp-time">{formatTime(duration)}</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              {/* Mute + slider */}
              <button className="vp-btn" onClick={toggleMute}>
                {muted || volume === 0
                  ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                  : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                }
              </button>
              <input
                type="range" min="0" max="1" step="0.01"
                value={muted ? 0 : volume}
                onChange={handleVolume}
                className="vp-vol hidden sm:block"
                style={{ background:`linear-gradient(to right,#D1A243 ${(muted?0:volume)*100}%,rgba(255,255,255,0.2) ${(muted?0:volume)*100}%)` }}
              />

              {/* Quality */}
              <div className="relative">
                <button className="vp-btn" onClick={() => setShowQuality(p => !p)}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </button>
                {showQuality && (
                  <div className="vp-qmenu">
                    {qualities.map(q => (
                      <button key={q} className={`vp-qitem ${q===quality?"sel":""}`} onClick={() => { setQuality(q); setShowQuality(false); }}>{q}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE PRINCIPALE ───
export default function Contact() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-['Cormorant_Garamond']">

      {/* ─── HERO ─── */}
      <section className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={galerie} alt="Galerie" className={`w-full h-full object-cover object-[center_60%] transition-transform duration-[1800ms] ease-out ${loaded?"scale-100":"scale-110"}`} />
          <div className="absolute inset-0" style={{ background:'linear-gradient(to bottom,rgba(15,23,42,0.20),rgba(15,23,42,0.50),rgba(15,23,42,0.85))' }} />
        </div>
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 style={{ fontSize:'100px' }} className={`font-['Playfair_Display'] font-bold text-white leading-none tracking-tight mb-10 transition-all duration-1000 delay-300 ${loaded?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`}>Galerie</h1>
          <p style={{ fontSize:'20px' }} className={`font-['Inter'] text-[#E8E2D9]/90 max-w-[900px] mx-auto leading-relaxed transition-all duration-1000 delay-500 ${loaded?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
            "Explorez notre hôtel en images et en vidéo pour vivre une expérience visuelle complète avant votre arrivée."
          </p>
        </div>
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-opacity duration-1000 delay-1000 ${loaded?"opacity-60":"opacity-0"}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8C97A] animate-bounce"/>
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8C97A]/60 animate-bounce [animation-delay:0.2s]"/>
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8C97A]/30 animate-bounce [animation-delay:0.4s]"/>
        </div>
      </section>

      {/* ─── NOS ESPACES + CAROUSEL ─── */}
      <section className="py-16 px-[5%]">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-[50px] font-light text-[#1a253c]">Nos Espaces</h2>
          <p className="font-['Inter'] text-[17px] text-[#D1A243] uppercase tracking-wider">Explorer les images</p>
          <div className="w-[250px] h-px bg-[#1A2744] mx-auto mt-2"/>
          <p className="font-['Inter'] text-[17px] text-[#1a253c] mx-auto mt-2">"Du lobby au rooftop, explorez chaque recoin de notre établissement"</p>
        </div>
        <GalerieCarousel />
      </section>

      {/* ─── NOTRE UNIVERS + VIDEO ─── */}
      <section className="py-16 px-[5%]">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-[50px] font-light text-[#1a253c]">Notre univers</h2>
          <p className="font-['Inter'] text-[17px] text-[#D1A243] uppercase tracking-wider">Un tour de l'hôtel</p>
          <div className="w-[250px] h-px bg-[#1A2744] mx-auto mt-2"/>
          <p className="font-['Inter'] text-[17px] text-[#1a253c] mx-auto mt-2">"Plongez dans l'univers raffiné de notre hôtel à travers cette visite immersive."</p>
        </div>
        <HotelVideoPlayer />
      </section>

    </div>
  );
}