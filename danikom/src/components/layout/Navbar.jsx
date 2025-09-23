// components/layout/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center gap-2">
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `font-medium relative transition-all duration-300 px-4 py-2 ${
              isActive ? "text-green-500" : "text-white hover:text-green-300"
            } 
  after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-green-300 after:left-1/2 after:-bottom-1 after:transition-all after:duration-300
  hover:after:w-4/5 hover:after:left-[10%]
  ${isActive ? "after:w-4/5 after:left-[10%] after:bg-green-500" : ""}`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}
