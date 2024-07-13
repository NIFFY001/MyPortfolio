import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa"; // You can use any menu icon you like
import { Link } from "react-router-dom";

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="flex justify-between items-center px-5 md:px-10 md:py-2 py-6  text-[#D9D9D9] bg-[#080808] sticky top-0 z-30"
      style={{ borderBottom: "1px solid #FFFFFF" }}
    >
      <Link to="/">
        <img src={logo} alt="Logo" className="h-[40px] md:h-[50px]" />
      </Link>

      <div className="hidden md:flex items-center gap-4 md:gap-10">
        <Link to href="">
          <button className="hover:border-b hover:pb-1 text-xs md:text-sm">
            About
          </button>
        </Link>
        <Link to="">
          <button className="hover:border-b hover:pb-1 text-xs md:text-sm">
            Projects
          </button>
        </Link>
        <Link to="/cont">
          <button className="hover:border-b hover:pb-1 text-xs md:text-sm">
            Contact
          </button>
        </Link>
      </div>
      <Link
        to="https://drive.google.com/file/d/1qREtwVGYbwqbxOYG6wmkz58M3-VzTNzi/view?usp=drivesdk"
        target="blank"
        className="hidden md:block"
      >
        <button className=" font-semibold py-2 px-2 md:px-5 hover:border hover:border-white rounded-2xl text-xs md:text-sm bg-gradient-to-r from-[#FFA500] to-[#FF0000]">
          Download Resume
        </button>
      </Link>
      <button className="md:hidden" onClick={toggleMobileMenu}>
        <FaBars size={25} color="#D9D9D9" />
      </button>
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#080808] text-[#D9D9D9] flex flex-col items-center gap-4 py-5">
          <Link to="" className="hover:border-b hover:pb-1 text-sm">
            About
          </Link>
          <Link to="" className="hover:border-b hover:pb-1 text-sm">
            Projects
          </Link>
          <Link to="/cont" className="hover:border-b hover:pb-1 text-sm">
            Contact
          </Link>
          <Link
            to="https://drive.google.com/file/d/1qREtwVGYbwqbxOYG6wmkz58M3-VzTNzi/view?usp=drivesdk"
            target="blank"
          >
            <button className="hover:bg-[#fff] text-[#D9D9D9] font-semibold py-2 px-5 hover:border hover:border-white rounded-2xl text-sm bg-gradient-to-r from-[#FFA500] to-[#FF0000]">
              Download Resume
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
