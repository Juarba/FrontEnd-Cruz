import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, Card } from 'react-bootstrap';
import HeroBanner from '../heroBanner/HeroBanner';
import AboutSection from '../aboutUs/AboutUs';
import ActivitiesSection from '../activitiesSection/ActivitiesSection';
import ExperienceSection from '../experienceSection/ExperienceSection';
import AccommodationSection from '../acommodationSection/AcommodationSection';

const MainPage = () => {
  return (
    <main className="flex-grow-1">
      <HeroBanner />
      <AboutSection />
      <ActivitiesSection />
      <ExperienceSection />
      <AccommodationSection />
    </main>
  );
};

export default MainPage;