import React from "react";
import NavBar from "../components/NavBar";
import intro from "/src/assets/intro.png";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-black h-screen">
        <div className=" md:pt-20 p-5 md:p-20 bg-black flex flex-col md:flex-row items-center w-full  gap-10">
          <div className="flex flex-col">
            <div className=" text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FFA500] to-[#FF0000] bg-clip-text text-transparent">
                Hello !
              </span>
            </div>
            <h1 className="text-white text-3xl mb-3">I'm Victor Akinsanmi</h1>

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
