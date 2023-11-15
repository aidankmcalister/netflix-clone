import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";
import LoginPage from "./pages/LoginPage";
import MobileSearch from "./components/mobile/MobileSearch";
import ProfileSelectPage from "./pages/ProfileSelectPage";
import MobileNavbar from "./components/mobile/MobileNavbar";
import Navbar from "./components/Navbar";
import SettingsPage from "./pages/SettingsPage";
import MyListPage from "./pages/MyListPage";
import MobileSearchPage from "./pages/MobileSearchPage";

function App() {
  const location = useLocation();
  const hiddenNavbarPaths = ["/login", "/profileselect"];
  const isNavbarHidden = hiddenNavbarPaths.includes(location.pathname);

  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const pageName = location.pathname.split("/")[1];
    setCurrentPage(pageName || "home");
  }, [location.pathname]);

  return (
    <div className={`font-poppins relative overflow-x-hidden min-h-screen`}>
      {!isNavbarHidden && (
        <div>
          <div className="hidden md:block">
            <Navbar currentPage={currentPage} />
          </div>
          <div className="hidden md:block h-16"></div>
        </div>
      )}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profileselect" element={<ProfileSelectPage />} />
        <Route path="/mobilesearch" element={<MobileSearchPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/content/:id" element={<ContentPage />} />
        <Route path="/mylist" element={<MyListPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>

      {!isNavbarHidden && (
        <div>
          <div className="block md:hidden fixed bottom-0 w-full">
            <MobileNavbar currentPage={currentPage} />
          </div>
          <div className="block md:hidden h-16"></div>
        </div>
      )}
    </div>
  );
}

export default App;
