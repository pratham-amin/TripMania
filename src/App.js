import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Locations } from "./pages/Locations";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Book } from "./pages/Book";
import { Dubai } from "./pages/locations/Dubai/Dubai";
import { Himachal } from "./pages/locations/Himachal/Himachal";
import { Goa } from "./pages/locations/Goa/Goa";
import { Maldives } from "./pages/locations/Maldives/Maldives";
import { Thailand } from "./pages/locations/Thailand/Thailand";
import { Rajasthan } from "./pages/locations/Rajasthan/Rajasthan";
import { Error } from "./pages/Error";
import { Delhi } from "./pages/locations/Delhi/Delhi";
import { Chennai } from "./pages/locations/Chennai/Chennai";
import { Gujarat } from "./pages/locations/Gujarat/Gujarat";
import { Jammu } from "./pages/locations/Jammu/Jammu";
import { Karnataka } from "./pages/locations/Karnataka/Karnataka";
import { Uttarakhand } from "./pages/locations/Uttarkhand/Uttarakhand";
import { Europe } from "./pages/locations/Europe/Europe";
import { SriLanka } from "./pages/locations/Srilanka/Srilanka";
import { Russia } from "./pages/locations/Russaia/Russia";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/dubai" element={<Dubai />} />
          <Route path="/locations/chennai" element={<Chennai />} />
          <Route path="/locations/himachal" element={<Himachal />} />
          <Route path="/locations/gujarat" element={<Gujarat />} />
          <Route path="/locations/goa" element={<Goa />} />
          <Route path="/locations/maldives" element={<Maldives />} />
          <Route path="/locations/thailand" element={<Thailand />} />
          <Route path="/locations/rajasthan" element={<Rajasthan />} />
          <Route path="/locations/delhi" element={<Delhi />} />
          <Route path="/locations/jammu" element={<Jammu />} />
          <Route path="/locations/karnataka" element={<Karnataka />} />
          <Route path="/locations/uttarakhand" element={<Uttarakhand />} />
          <Route path="/locations/europe" element={<Europe />} />
          <Route path="/locations/srilanka" element={<SriLanka/>} />
          <Route path="/locations/russia" element={<Russia/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
