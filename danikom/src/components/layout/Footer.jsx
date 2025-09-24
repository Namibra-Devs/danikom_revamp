import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#4b0082] text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white">Danikom</h3>
          <p className="mt-3 text-sm leading-relaxed">
            Producers of unrefined Shea butter and African Black soap, sourced
            directly from rural women cooperatives in northern Ghana. Exporting
            globally with sustainability at heart.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-accent">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
          <p className="mt-3 text-sm">Email: info@danikom.com</p>
          <p className="mt-3 text-sm">Contact: +233 (0) 24 662 6516</p>
          <p className="mt-3 text-sm">P. O. Box 3061, Tamale, Ghana NT – 0299 – 7389
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-accent">
              <Facebook />
            </a>
            <a href="#" className="hover:text-accent">
              <Instagram />
            </a>
            <a href="#" className="hover:text-accent">
              <Linkedin />
            </a>
            <a href="mailto:info@danikom.com" className="hover:text-accent">
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm">
        © {new Date().getFullYear()} Danikom. All rights reserved.
      </div>
    </footer>
  );
}
