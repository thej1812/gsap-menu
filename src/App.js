import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Menu from "./components/Menu/Menu";
import Event from "./components/Eventpage/EventPage"; // Assuming you have a Menu component for the home page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Home Page */}
        <Route path="/" element={<Menu />} />
        
        {/* Route for the Profile Page */}
        <Route path="/profile" element={<Profile />} />
        
        {/* Route for the new Home Component */}
        <Route path="/home" element={<Home />} />

        <Route path="/Event" element={<Event/>} />
      </Routes>
    </Router>
  );
};

export default App;