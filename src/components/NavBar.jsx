import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa"; // You can use any menu icon you like

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
      <img src={logo} alt="Logo" className="h-[40px] md:h-[50px]" />
      <div className="hidden md:flex items-center gap-4 md:gap-10">
        <a href="">
          <button className="hover:border-b hover:pb-1 text-xs md:text-sm">
            About
          </button>
        </a>
        <a href="">
          <button className="hover:border-b hover:pb-1 text-xs md:text-sm">
            Projects
          </button>
        </a>
        <a href="">
          <button className="hover:border-b hover:pb-1 text-xs md:text-sm">
            Contact
          </button>
        </a>
      </div>
      <a href="" target="blank" className="hidden md:block">
        <button className=" text-[#D9D9D9] font-semibold py-2 px-2 md:px-5 hover:border hover:border-white rounded-2xl text-xs md:text-sm bg-gradient-to-r from-[#FFA500] to-[#FF0000]">
          Download Resume
        </button>
      </a>
      <button className="md:hidden" onClick={toggleMobileMenu}>
        <FaBars size={25} color="#D9D9D9" />
      </button>
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#080808] text-[#D9D9D9] flex flex-col items-center gap-4 py-5">
          <a href="" className="hover:border-b hover:pb-1 text-sm">
            About
          </a>
          <a href="" className="hover:border-b hover:pb-1 text-sm">
            Projects
          </a>
          <a href="" className="hover:border-b hover:pb-1 text-sm">
            Contact
          </a>
          <a href="" target="blank">
            <button className="hover:bg-[#fff] hover:text-[#000] text-[#D9D9D9] font-semibold py-2 px-5 hover:border hover:border-white rounded-2xl text-sm bg-gradient-to-r from-[#FFA500] to-[#FF0000]">
              Download Resume
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
