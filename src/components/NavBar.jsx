import logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav
      className="flex justify-between items-center px-5 md:px-10 py-2 text-[#D9D9D9] bg-[#080808] sticky top-0 z-30 "
      style={{ borderBottom: "10px solid #FFFFFF" }}
    >
      <img src={logo} alt="Logo" className="h-[25px] md:h-[50px]" />
      <div className="flex items-center gap-4 md:gap-10 ">
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
      <a href="" target="blank">
        <button className=" hover:bg-[#fff] hover:text-[] text-[#D9D9D9] font-semibold  py-2 px-2 md:px-5 hover:border hover:border-white rounded-2xl text-xs md:text-sm bg-gradient-to-r from-[#FFA500] to-[#FF0000]">
          Download Resume
        </button>
      </a>
    </nav>
  );
}

export default NavBar;
