import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAccessTime, MdCallEnd } from "react-icons/md";

const Address = () => {
  return (
    <section className="space-y-3">
      <div className="text-3xl font-bold pb-2 text-center md:text-left">
        Voyage
      </div>
      <div className="text-slate-900 text-md text-center md:text-left">
        We Create Journeys Worth Taking For The Traveler
      </div>
      <div className="flex justify-center md:justify-start items-center space-x-2">
        <MdCallEnd />
        <span>+919172387421</span>
      </div>
      <div className="flex justify-center md:justify-start space-x-2 items-center">
        <IoLocationOutline />
        <span>184 New Nandanvan, Nagpur</span>
      </div>
      <div className="flex justify-center md:justify-start space-x-2 items-center">
        <MdOutlineAccessTime />
        <span>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span>
      </div>
    </section>
  );
};

export default Address;
