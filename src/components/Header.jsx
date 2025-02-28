import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  const user = { email: "user@example.com" }; // Temporary placeholder, replace with actual user data

  return (
    <header className="bg-white shadow sticky top-0 w-full py-3 px-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/images/logo-dark.svg" alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* User Dropdown */}
        {pathname !== "/" && user?.email && (
          <div className="relative">
            <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
              {user.email.charAt(0).toUpperCase()}
            </button>
            {/* Dropdown (Future Implementation) */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
