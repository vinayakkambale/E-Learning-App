import React, { Fragment } from "react";
import HeroSection from "../components/Hero-Section/HeroSection";
import Company from "../components/Company-Section/Company";
import AboutUs from "../components/About-us/AboutUs";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/free-course-section/FreeCourse";
import TestimonialPage from "../components/Client-Feedback/TestimonialPage";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import MainFAQ from "../components/FAQS/MainFAQ"
import Header from "../components/Header/Header";
import Courses from "../components/Courses-section/Courses";





const Home = () => {
  return (
    <Fragment>
    
     <Header />
      <HeroSection />
      <Company />
      <AboutUs />  
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <TestimonialPage />
      <Newsletter />
      <MainFAQ />
     
      <Footer />
      
      
    </Fragment>
    
  );
};

export default Home;