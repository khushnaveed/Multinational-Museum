import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroContent from "./components/HeroContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exhibitions from "./components/Exhibitions";
import News from "./components/News";
import Booking from "./components/Booking";
import BookingConfirmation from './components/BookingConfirmation';

import Events from "./components/Events";
import ContactUs from "./components/ContactUs";
import Artwork from "./components/Artwork";
import Documentaries from "./components/Documentaries";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>

            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/news" element={<News />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/" element={<HeroContent />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/artwork" element={<Artwork />} />
            <Route path="/documentaries" element={<Documentaries />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      <HeroContent />
    </>

  );
}

export default App;
