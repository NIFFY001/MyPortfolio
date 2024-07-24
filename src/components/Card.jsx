import git from "../assets/github.svg";
import arrow from "../assets/arrow.svg";

function Card({ img, title, des, gitLink, webLink, tools }) {
  return (
    <div
      className="flex flex-col md:flex-row items-center mb-5 md:mb-10 py-3 md:py-10 md:px-10 md:gap-10 h-[360px] md:h-[320px]"
      style={{
        background:
          "linear-gradient(180deg, #181717 22.70%, rgba(0, 36, 44, 0.00) 100%)",
        borderRadius: "40px",
        border: "3px solid black",
        transition: "background 0.5s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(180deg, rgba(0, 36, 44, 0.00) 0%,  39.06%)";
        (e.currentTarget.style.border = "1px solid black"),
          (e.currentTarget.querySelector("img").style.transform = "scale(1.1)");
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(180deg,  22.70%, rgba(0, 36, 44, 0.00) 100%)";
        e.currentTarget.querySelector("img").style.transform = "scale(1)";
        e.currentTarget.style.border = "3px solid #999393";
      }}
    >
      <div className="bg-black rounded-2xl w-[60%] md:w-[40%] lg:w-[30%] mb-5 md:mb-0">
        <img
          src={img}
          alt=""
          style={{ transition: "transform 0.5s" }}
          className="object-cover"
        />
      </div>
      <div className="w-[90%] md:w-[70%]">
        <h1 className="text-[#D9D9D9] text-[20px] md:text-[40px] font-normal ">
          {title}
        </h1>
        <p
          className="text-[#D9D9D9] mb-2 text-[12px] md:text-[16px]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {des}
        </p>
        <p
          className="text-[#D9D9D9] text-[12px] md:text-[18px] font-normal pb-2 md:mb-[0.3rem] lg:mb-5"
          style={{ fontFamily: "Fira Code, monospace" }}
        >
          {tools}
        </p>
        <div className="flex items-center gap-5">
          <a href={gitLink} target="blank">
            <button
              className="flex items-center gap-1 bg-transparent hover:bg-[#fff]  text-[#D9D9D9] font-semibold  py-1 px-2 md:px-5 border border-white hover:border-transparent rounded-3xl text-xs md:text-sm"
              style={{ fontFamily: "Fira Code, monospace" }}
            >
              View Github{" "}
              <img
                src={git}
                color="white"
                alt="Git Icon"
                className="md:h-[20px] h-[15px] "
              />{" "}
            </button>
          </a>
          <a href={webLink} target="blank">
            <button
              className="flex items-center gap-1 text-xs md:text-sm hover:border-b hover:pb-1"
              style={{ fontFamily: "Fira Code, monospace" }}
            >
              View website{" "}
              <img
                src={arrow}
                alt="Website Icon"
                className="md:h-[20px] h-[15px]"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
