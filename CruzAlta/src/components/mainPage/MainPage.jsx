import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Button,
  Card,
} from "react-bootstrap";
import LayoutNav from "../layoutNav/LayoutNav";
import HeroBanner from "../heroBanner/HeroBanner";
import ExperienceSection from "../experienceSection/ExperienceSection";
import AboutSection from "../aboutUs/AboutUs";
import Footer from "../layoutFooter/LayoutFooter";
import DayBanner from "../dayBanner/DayBanner";
const MainPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <HeroBanner />
        <AboutSection />
        <DayBanner/>
        <ExperienceSection />
      </main>
    </div>
  );
};

export default MainPage;
