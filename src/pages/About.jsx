import { FaFacebookF, FaInstagram } from "react-icons/fa";
import pune from "../assets/Keral.jpg";
import Touritem from "../components/TourItem";

const About = () => {
  return (
    <div>
      <div className="w-screen h-full">
        <img src={pune} alt="" className=" h-[450px] w-screen" />
      </div>
      <div className="flex justify-around items-center h-16 bg-slate-300 ">
        <div className=" font-bold text-xl md:text-2xl text-slate-800">
          Voyage / About Us
        </div>
        <div className=" flex justify-inline gap-4 items-center">
          <div className="text-sm uppercase flex  justify-center items-center gap-2 font-bold text-slate-800">
            <span className="hidden md:block">Facebook</span>
            <FaFacebookF />
          </div>
          <div className="text-sm uppercase flex  justify-center items-center gap-2 font-bold text-slate-800">
            <span className="hidden md:block text-sm uppercase   justify-center items-center gap-2 font-bold text-slate-800">
              Instagram
            </span>
          </div>
          <FaInstagram />
        </div>
      </div>
      <div className="bg-slate-100 w-screen  md:flex justify-evenly items-center p-2">
        <div className="md:w-5/12 bg-slate-200 shadow-purple-900 flex flex-col flex-wrap justify-center items-left p-3 md:p-6 m-6    md:mt-5">
          <div className="md:text-2xl text-xl font-bold p-3 text-center ">
            About Us
          </div>

          <div className="text-md flex flex-wrap  p-3">
            <div>
              Welcome to our travel haven! At Voyage, we are passionate about
              creating unforgettable journeys.
              <br /> <br /> Our team of avid explorers curates unique
              experiences to enchant every adventurer.
              <p className="font-bold">
                {" "}
                From the ancient alleys of Varanasi to the serene landscapes of
                Kashmir,{" "}
              </p>{" "}
              we take you on a captivating voyage. With a blend of expertise and
              enthusiasm, we invite you to join us in discovering the world
              wonders.
              <br />
              <br />
              Explore, dream, and embark on a seamless adventure with us. Lets
              make travel memories that last a lifetime!
            </div>
          </div>
        </div>
        <div className=" flex-col justify-center  md:justify-evenly items-center bg-slate-400 m-6 p-6 gap-6 md:rounded-lg rounded-lg lea">
          <div>Google map</div>
          <div className="leading-6 font-bold">
            <h2>New Nandanvan,Nagpur</h2>
            <h3>
              Phone : <span className="text-blue-600">9172380000</span>
            </h3>
            <h3>
              Email: <span className="text-red-600">Voyage@1421gmail.com</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-black flex-justify-center flex-col items-center">
        <div className="text-3xl font-bold text-center  p-5 text-slate-400 flex flex-col gap-2 items-center">
          ~ Recommanded ~
          <hr className=" font-bold w-80 text-5xl h-2" />
        </div>
        <div>
          <Touritem />
        </div>
      </div>
    </div>
  );
};

export default About;
