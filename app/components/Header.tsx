"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "My work", link: "#myWork" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className=" relative bg-white/50 dark:bg-black/40 backdrop-blur-2xl md:px-10 px-4">
      
      <div className="flex justify-between max-w-7xl mx-auto items-center py-4 ">
        
       
        {/* Desktop nav */}
        <div className="hidden lg:flex gap-4 ">
          {navItems.map((nav) => (
            <a
              key={nav.name}
              href={nav.link}
              className="    px-3 py-1 rounded-sm dark:text-white  transition"
            >
              {nav.name}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">

          {/* Theme toggle */}
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10  brush"
          >
            {resolvedTheme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile menu */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`flex flex-col lg:hidden items-center transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 border-t" : "max-h-0 opacity-0"
        }`}
      >
        {navItems.map((nav) => (
          <a
            key={nav.name}
            href={nav.link}
            onClick={() => setIsOpen(false)}
            className="py-4"
          >
            {nav.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
