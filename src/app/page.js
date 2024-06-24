"use client"

import Navbar from "@/components/block/Navbar";
import Footer from "@/components/block/Footer";
import SectionHero from "./SectionHero";
import SectionAbout from "./SectionAbout";
import SectionFaq from "./SectionFaq";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionHero />
      <SectionAbout />
      <SectionFaq />
      <Footer />
    </>
  );
}
