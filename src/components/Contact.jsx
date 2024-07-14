import React from "react";
import NavBar from "./NavBar";
import contact from "/src/assets/contact.png";
import contactme from "/src/assets/contactme.png";
import socials from "/src/assets/socials.png";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <NavBar />
      <div className="bg-black min-h-[100vh] pt-10">
        <div className="md:px-20 px-5">
          <img src={contactme}></img>
        </div>
        <div className="flex flex-col md:flex-row items-center md:px-20 px-5">
          <div className="w-full md:w-[50%] mb-10 md:mb-0 flex gap-10 items-center">
            <div>
              <img src={contact} alt="Contact" />
            </div>
            <div className="text-white ">
              <h1 className="text-white mb-5 text-3xl">Contact Details</h1>
              <div className="mb-5">
                <a href="tel:09152043037">📞 : 09152043037</a>
              </div>
              <div className="mb-10">
                <a href="mailto:victorakinsanmi2018@gmail.com">
                  📧 : victorakinsanmi2018@gmail.com
                </a>
              </div>
              <p className="text-xl mb-10">Follow Me On</p>
              <img src={socials}></img>
            </div>
          </div>

          <div className="w-full md:w-[50%]">
            <div className="relative w-full md:w-auto h-[430px]">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-white"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-white"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-white"></div>
              <div className="absolute inset-0 m-auto w-full md:w-[400px] h-full border-[0.75px] border-[#ffa84bcb] text-center bg-[#161513] rounded-2xl px-5 py-10">
                <div>
                  <h1 className="text-white">Contact Form</h1>
                  <div className="text-white">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
