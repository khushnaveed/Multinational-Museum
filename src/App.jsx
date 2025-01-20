
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroContent from "./pages/HeroContent"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exhibitions from "./pages/Exhibitions";
import News from "./pages/News";
import Booking from "./pages/Booking";
import BookingConfirmation from './pages/BookingConfirmation';
import "./App.css"
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import Artwork from "./pages/Artwork";
import Documentaries from "./pages/Documentaries";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen" >
          <Navbar />
          <Routes>
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/news" element={<News />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/" element={<HeroContent />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/artwork/*" element={<Artwork />} />
            <Route path="/documentaries" element={<Documentaries />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
