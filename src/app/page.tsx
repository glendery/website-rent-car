import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarCatalog from "@/components/CarCatalog";
import BookingSteps from "@/components/BookingSteps";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BookingSteps />
      <CarCatalog />
      <Services />
      
      {/* Trust Badge Section */}
      <section className="py-10 md:py-20 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <div className="grid grid-cols-3 gap-4 md:flex md:flex-row md:items-center md:justify-center md:gap-24">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-8xl font-black text-charcoal italic leading-none">2.5k+</span>
              <span className="text-[8px] md:text-base font-bold text-charcoal/60 uppercase tracking-widest mt-1 md:mt-2">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center border-x border-charcoal/10 md:border-none px-2">
              <span className="text-2xl md:text-8xl font-black text-charcoal italic leading-none">100%</span>
              <span className="text-[8px] md:text-base font-base text-charcoal/60 uppercase tracking-widest mt-1 md:mt-2">Unit Terawat</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-8xl font-black text-charcoal italic leading-none">4.9/5</span>
              <span className="text-[8px] md:text-base font-bold text-charcoal/60 uppercase tracking-widest mt-1 md:mt-2">Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
