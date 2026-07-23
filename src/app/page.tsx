import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import Services from "@/components/Services";
import AboutMethod from "@/components/AboutMethod";
import Motivational from "@/components/Motivational";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#090909] text-white">
      <Header />
      <Hero />
      <Positioning />
      <Services />
      <AboutMethod />
      <Motivational />
      <Testimonials />
      <CtaSection />
      <LocationSection />
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
