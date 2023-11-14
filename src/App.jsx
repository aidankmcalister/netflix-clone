import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";
import LoginPage from "./pages/LoginPage";
import MobileSearch from "./components/mobile/MobileSearch";
import ProfileSelect from "./components/ProfileSelect";
import MobileNavbar from "./components/mobile/MobileNavbar";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const hiddenNavbarPaths = ["/login", "/profileselect"];
  const isNavbarHidden = hiddenNavbarPaths.includes(location.pathname);

  return (
    <div className="">
      {!isNavbarHidden && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/mobilesearch" element={<MobileSearch />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profileselect" element={<ProfileSelect />} />
      </Routes>
      {!isNavbarHidden && <MobileNavbar />}
    </div>
  );
}

export default App;
