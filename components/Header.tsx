"use client";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

import Logo from "./Logo";
import { NavbarLinks } from "@/constants";
import { useRouter, useSearchParams } from "next/navigation";
import PasskeyModal from "./PasskeyModal";

import { Link } from "react-scroll";
import { Button } from "./ui/button";
const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const adminParams = searchParams.get("admin");
    setIsAdmin(adminParams === "true");
  });
  return (
    <header className="admin-header flex justify-between items-center px-4 py-3 bg-gray-800 text-white">
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-4 items-center">
        {NavbarLinks.map((item, index) => (
          <Link
            to={item.link}
            key={item.title}
            className={`hover:text-green-400 cursor-pointer${
              index === 0 ? "text-green-500 cursor-pointer" : ""
            }`}
            smooth={true}
            duration={500}
          >
            {item.title}
          </Link>
        ))}
        <Button
          onClick={() => router.push("/?admin=true")}
          className="text-slate-200 py-2 px-6 rounded-full hover:bg-green-700 bg-green-500"
        >
          Admin
        </Button>
      </div>
      {isAdmin && <PasskeyModal />}
      {/* Mobile Menu Icon */}
      <button
        className="lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <IoClose size={36} /> : <IoMenu size={36} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-700  text-white shadow-md lg:hidden">
          <nav className="flex flex-col items-center gap-4 py-4">
            {NavbarLinks.map((item, index) => (
              <Link
                to={item.link}
                key={item.title}
                className={`hover:text-green-400 cursor-pointer${
                  index === 0 ? "text-green-500 cursor-pointer" : ""
                }`}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {item.title}
              </Link>
            ))}
            <Link
              to="/?admin=true"
              className="text-slate-200 py-2 px-6 rounded-full hover:bg-green-700 bg-green-500"
            >
              Admin
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
