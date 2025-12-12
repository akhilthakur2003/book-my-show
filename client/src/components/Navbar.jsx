import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MenuIcon, X, SearchIcon, TicketPlus } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate =useNavigate();
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Movies", path: "/movies" },
    { label: "Theatres", path: "/theatres" },
    { label: "Favourite", path: "/favourite" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 z-50 w-full shadow-md flex items-center justify-between px-6 md:px-16 lg:px-36 py-4">

        {/* Logo */}
        <Link to="/" className="max-md:flex-1">
          <img src={assets.logo} alt="BookMyShow Logo" className="w-36 h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative pb-1 transition-all ${
                location.pathname === item.path
                  ? "text-red-500 font-semibold"
                  : "hover:text-red-500"
              }`}
            >
              {item.label}

              {/* Active underline */}
              {location.pathname === item.path && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Search + Login */}
        <div className="flex items-center space-x-5">
          <SearchIcon className="hidden md:block w-6 h-6 cursor-pointer hover:text-red-500 transition" />
          <SignedOut>
            <SignInButton/>
          {/* <button className="hidden md:block bg-red-500 text-white px-5 py-1 rounded-md hover:bg-red-600 transition">
            Login
          </button> */}
          </SignedOut>
          <SignedIn>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="My Bookings" 
                labelIcon={<TicketPlus width={15}/>}
                onClick={ ()=> navigate('/my-bookings')}
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <MenuIcon
          className="md:hidden w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* Overlay Background (mobile) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Slide-In Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 shadow-xl bg-black z-50 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <img src={assets.logo} className="w-28" alt="logo" />
          <X
            className="w-8 h-8 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col mt-5 space-y-6 px-6 text-lg font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`${
                location.pathname === item.path
                  ? "text-red-500 font-semibold"
                  : "text-gray-700 hover:text-red-500"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <button className="bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;


