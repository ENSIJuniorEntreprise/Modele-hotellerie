import HeroSection from "../components/layout/HeroSection";
import AboutSection from "../components/layout/AboutSection";
import FeaturesSection from "../components/layout/FeaturesSection";
import RoomsSection from "../components/layout/RoomsSection";
import EventsSection from "../components/layout/EventsSection";
import TestimonialsSection from "../components/layout/TestimonialsSection";

export default function Accueil() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <RoomsSection />
      <EventsSection />
      <TestimonialsSection />
    </div>
  );
}