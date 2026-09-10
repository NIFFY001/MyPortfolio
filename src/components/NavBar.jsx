import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white bg-[#080808] text-[#D9D9D9]">
      <div className="flex items-center justify-between px-5 py-4 md:px-10 md:py-2">
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu}>
          <img
            src={logo}
            alt="Victor Akinsanmi Logo"
            className="h-[40px] md:h-[50px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex md:gap-10">
          <Link
            to="/abt"
            className="text-sm transition-all hover:border-b hover:border-white hover:pb-1"
          >
            About
          </Link>

          <Link
            to="/pro"
            className="text-sm transition-all hover:border-b hover:border-white hover:pb-1"
          >
            Projects
          </Link>

          <Link
            to="/cont"
            className="text-sm transition-all hover:border-b hover:border-white hover:pb-1"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Resume */}
        <a
          href="https://drive.google.com/file/d/1qREtwVGYbwqbxOYG6wmkz58M3-VzTNzi/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-[#b9afff]/40 bg-gradient-to-r from-[#7b61ff] to-[#b9afff] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(123,97,255,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(185,175,255,0.4)] md:block"
        >
          Download Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes size={25} color="#D9D9D9" />
          ) : (
            <FaBars size={25} color="#D9D9D9" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col items-center gap-5 border-t border-white/10 bg-[#080808] px-5 py-6 md:hidden">
          <Link
            to="/abt"
            onClick={closeMobileMenu}
            className="text-sm transition-all hover:border-b hover:border-white hover:pb-1"
          >
            About
          </Link>

          <Link
            to="/pro"
            onClick={closeMobileMenu}
            className="text-sm transition-all hover:border-b hover:border-white hover:pb-1"
          >
            Projects
          </Link>

          <Link
            to="/cont"
            onClick={closeMobileMenu}
            className="text-sm transition-all hover:border-b hover:border-white hover:pb-1"
          >
            Contact
          </Link>

          <a
            href="https://drive.google.com/file/d/1qREtwVGYbwqbxOYG6wmkz58M3-VzTNzi/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="rounded-full border border-[#b9afff]/40 bg-gradient-to-r from-[#7b61ff] to-[#b9afff] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(123,97,255,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(185,175,255,0.4)]"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
