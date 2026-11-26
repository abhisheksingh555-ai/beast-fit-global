import CoachSection from "@/components/coach-section/coach-section";
import Footer from "@/components/footer/footer";
import HeroSection from "@/components/hero-section/hero-section";
import Navbar from "@/components/navbar/navbar";
import SevenService from "@/components/service/service";
import ShowCases from "@/components/show-case/show-case";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-[#2C1D13] focus:px-4 focus:py-2 focus:text-white focus:outline-2 focus:outline-offset-2 focus:outline-[#2C1D13]"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <SevenService />
        <ShowCases />
        <CoachSection />
      </main>

      <Footer />
    </>
  );
}