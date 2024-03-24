import React from "react";

// Components
import Nav from "../../components/nav/Nav";
import Contact from "../../components/contact/Contact.js";
import Footer from "../../components/footer/Footer.js";

// Sections
import Header from "../../seo/header/Header.js";
import AboutUs from "../../seo/about-us/AboutUs.js";
import OurTeam from "../../seo/our-team/OurTeam.js";
import HowItWorks from "../../seo/how-it-works/HowItWorks.js";
import Stats from "../../seo/stats/Stats.js";
import Partners from "../../seo/partners/Partners.js";
import Testimonials from "../../seo/testimonials/Testimonials.js";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <Header />
      <AboutUs />
      <OurTeam />
      <HowItWorks />
      {/* <Stats /> */}
      {/* <Partners /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
