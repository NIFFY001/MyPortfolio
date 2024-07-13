import React from "react";
import NavBar from "../components/NavBar";
import intro from "/src/assets/intro.png";
import contact from "/src/assets/contact.png";
import contactme from "/src/assets/contactme.png";
import ContactForm from "../components/ContactForm";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-black h-[2000px] ">
        <div className=" md:pt-20 p-5 md:p-20 bg-[#060606] flex flex-col md:flex-row items-center w-full  gap-10">
          <div className="flex flex-col">
            <div className=" text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FFA500] to-[#FF0000] bg-clip-text text-transparent">
                Hello !
              </span>
            </div>
            <h1 className="text-white text-3xl mb-3">
              I'm{" "}
              <span className="bg-gradient-to-r from-[#FFA500] to-[#FF0000] bg-clip-text text-transparent">
                Victor
              </span>{" "}
              Akinsanmi
            </h1>

            <p className="text-white text-2xl mb-2">
              Web Designs For Your Brand
            </p>
            <p className="mb-5 text-white md:w-[90%] text-xl">
              Transforming your online presence with innovative and visually
              captivating websites. Let us bring your brand's vision to life
              through exceptional web design.
            </p>
          </div>
          <div className="">
            <img src={intro}></img>
          </div>
        </div>
      </div>
    </>
  );
}
