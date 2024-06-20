import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Address from "../components/Address";
import Gallary from "../components/Gallary";

const Footer = () => {
  return (
    <div className="w-screen">
      <div className="flex flex-col md:flex-row md:justify-around justify-center p-5 items-center  md:h-28 bg-black text-slate-200 h-32 pt-4">
        <span className="md:text-xl text-sm text-center md:text-left md:w-1/2 mb-2 md:mb-0">
          It’s Time For a New Adventure! Don’t Wait Any Longer. Contact us!
        </span>
        <div className="flex justify-center items-center space-x-3">
          <div className="bg-red-700 md:px-5 md:py-3 px-3 py-2 text-center rounded-lg text-slate-100 font-serif md:text-xl text-sm">
            <NavLink to="/tours">
              <button className=" md:text-xl text-sm"> Book Destination</button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center md:h-[350px] w-screen bg-slate-400 ">
        <div className="mb-4 md:mb-0">
          <Address />
        </div>
        <div className="mb-4 md:mb-0">
          <Gallary />
        </div>
        <div className="flex flex-col flex-wrap justify-center items-center space-y-4">
          <div className="text-2xl font-bold  md:mb-4">Follow us</div>
          <div className="flex justify-center items-center space-x-4 text-3xl">
            <div className="hover:text-slate-700 hover:scale-125 duration-200">
              <FaFacebook />
            </div>
            <div className="hover:text-slate-700 hover:scale-125 duration-200">
              <AiFillInstagram />
            </div>
            <div className="hover:text-slate-700 hover:scale-125 duration-200">
              <FaTwitter />
            </div>
            <div className="hover:text-slate-700 hover:scale-125 duration-200">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
