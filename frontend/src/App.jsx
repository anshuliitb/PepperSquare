import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EventsFilter from "./components/EventsFilter";
import EventsGallery from "./components/EventsGallery";
import Footer from "./components/Footer";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div>
      <Navbar />
      <HeroSection />
      <EventsFilter setSelectedCategory={setSelectedCategory} />
      <EventsGallery selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
};

export default App;
