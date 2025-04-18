import { div } from "framer-motion/client";
import React from "react";

const SignInModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is not open

  return (
    // <div className="relative w-full h-full">
    //   <div className="bg-green-500 h-[500px] w-[500px] absolute"></div>
    // </div>
    <div className="bg-[#000000d9] p-5 rounded-xl flex justify-between items-center z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="me-5 w-7/12">
        <h1 className="text-2xl text-center text-white">Dogs and Pets</h1>
        <p className="text-center mt-5 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea
          inventore sequi beatae. Vel animi est, porro nulla nemo laudantium
          explicabo unde. Enim, numquam iste? Blanditiis accusamus non mollitia
          praesentium!
        </p>
      </div>
      <div className="bg-white pb-5 pt-0 px-5 rounded-md shadow-2xl w-5/12">
        <div className="modal-content">
          <div className="flex justify-end">
            <button
              className="text-2xl bg-transparent text-black hover:bg-transparent rounded-md leading-0"
              onClick={onClose}
            >
              x
            </button>
          </div>
          <h2 className="text-center text-xl font-bold">Login / Sign Up</h2>
          <p className="text-center text-[#667085] text-sm mt-2">
            Enter Mobile Number
          </p>
          <form className="mt-2">
            <input type="number" placeholder="Enter Mobile Number" required />
            <button
              type="submit"
              className="w-full py-2 bg-[#ff6d1f] text-white rounded-md mt-3"
            >
              Submit
            </button>
            <p className="text-center text-[#98a2b3] text-xs mt-14">
              I accept that I have read & understood Gokwik's
            </p>
            <p className="text-center text-[#98a2b3] text-xs mt-1 underline">
              Privacy Policy and T&Cs.
            </p>
            <a
              href="#"
              className="text-[#98a2b3] text-xs mt-5 underline flex justify-center"
            >
              Trouble logging in?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
