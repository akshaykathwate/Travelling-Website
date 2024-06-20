import { NavLink } from "react-router-dom";
import toursdata from "../pages/toursdata";
import TourItem from "./TourItem";

const Populartours = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 bg-slate-50 pb-2 w-full pt-8">
      <div className="text-4xl font-semibold text-center">
        Most Popular Tours
      </div>
      <div className="text-xl text-center text-slate-400">
        We Create Journeys Worth Taking For The Traveler.
      </div>
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 pt-7 mb-6">
          <TourItem  />
      </div>
      <div className="button">
        <NavLink to="/tours">View More Tours</NavLink>
      </div>
    </div>
  );
};

export default Populartours;
