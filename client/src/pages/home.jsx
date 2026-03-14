import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import HowItWorks from "../components/HowItWorks/howItWorks";
import HeroSection from "../components/HeroSection/hero";
import Services from "../components/Services/services";
import WhyChooseUs from "../components/WhyChooseUs/whychoose";
import Testimonials from "../components/Testimonials/testimonials";
import Pricing from "../components/Pricing/pricing";
import FAQ from "../components/FAQ/faq";
import BookingForm from "../components/BookingForm/bookingFrom";
import Achievements from "../components/Achievements/achievements";
import ContactUs from "../components/contact_us/contact";
import ServiceBanner from "../components/ServiceBanner/servicebanner";
import SubService from "../components/sub-service/sub_service";
import VideoSection from "../components/Youtube/youtubesection";
// src/pages/home.jsx

function Home() {
  return (
    <div>
  <Header/>
      {/* Other sections */}
      <HeroSection/>
      <Achievements/>
      <Services/>
      <SubService/>
      <ServiceBanner/>
      <HowItWorks/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactUs/>
      <VideoSection/>
      <Pricing/>
      <FAQ/>
      <BookingForm/>
     <Footer/>
    </div>
  );
}

export default Home;