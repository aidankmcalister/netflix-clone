import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";
import LoginPage from "./pages/LoginPage";
import MobileSearch from "./components/mobile/MobileSearch";
import ProfileSelect from "./components/ProfileSelect";
import MobileNavbar from "./components/mobile/MobileNavbar";
import Navbar from "./components/Navbar";
import SettingsPage from "./pages/SettingsPage";
import MyListPage from "./pages/MyListPage";

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
        <div className="hidden md:block">
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profileselect" element={<ProfileSelect />} />
        <Route path="/mobilesearch" element={<MobileSearch />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/content/:id" element={<ContentPage />} />
        <Route path="/mylist" element={<MyListPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <div className="h-20"></div>
      {!isNavbarHidden && (
        <div className="block md:hidden fixed bottom-0 w-full">
          <MobileNavbar currentPage={currentPage} />
        </div>
      )}
    </div>
  );
}

export default App;
