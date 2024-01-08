import React, { useCallback, useState } from "react";
import Image from "next/image";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen">
      <div className="flex flex-1 flex-col justify-center items-center pt-10 lg:pt-6">
        <div className="pb-10">
          <Image src="/assets/logo.png" width={30} height={30} alt="logo" />
        </div>
        <h2 className=" text-4x1 font-text">Contact Us</h2>
        <form
          action=""
          className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w[500px]"
        >
          <input
            id="companyName"
            name="companyName"
            required
            maxLength={128}
            placeholder="Company Name"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2 "
            type="text"
          />
          <input
            type="text"
            id="email"
            name="email"
            required
            maxLength={128}
            placeholder="Your E-mail"
            className="bg-black text-wite outline-none border-2 border-white rounded-3xl px-8 py-2 "
          />
          <textarea
            name="message"
            id="message"
            required
            maxLength={100000}
            placeholder="Additional information"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
          ></textarea>
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-white text-black rounded-3xl px-8 py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
