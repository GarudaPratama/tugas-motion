import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import HeroSection from "./views/hero";
import ServicesSection from "./views/services";
import ClientsSection from "./views/clients";
import GallerySection from "./views/gallery";
import ContactSection from "./views/contact";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-orange-500 selection:text-white">
        <Navbar />

        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <ClientsSection />
          <GallerySection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
