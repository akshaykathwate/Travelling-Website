import { useState } from "react";
import { Link } from "react-router-dom";
import toursdata from "../pages/toursdata";

const FindDest = () => {
  const [selectTour, setSelecttour] = useState("");

  const handletour = (e) => {
    const selectedOption = e.target.value;
    setSelecttour(selectedOption);
  };

  return (
    <div className="p-4 bg-slate-300 md:p-6">
      <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
        <div className="text-center md:text-left text-slate-600 mb-2 md:mb-0">
          <span className="block text-slate-800 font-bold">Find Your</span>
          <span className="text-slate-800 font-bold">Destinations</span>
        </div>

        <span className="text-5xl m-2 text-slate-300 hidden md:block">|</span>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="text-md space-x-3 rounded-md bg-black p-2 mb-3 md:mb-0 flex items-center text-center text-white">
            <label
              htmlFor="touroptions"
              className="font-semibold text-slate-200"
            >
              Destination
            </label>
            <select
              name="touroptions"
              id="touroptions"
              onChange={handletour}
              className="bg-slate-700 text-white p-2 rounded-md"
              value={selectTour}
            >
              {toursdata.map((touroptions) => (
                <option key={touroptions.id} value={touroptions.name}>
                  {touroptions.name}
                </option>
              ))}
            </select>
          </div>

          <Link to="/tours">
            <button className="p-2 bg-red-500 text-slate-100 rounded px-5 py-2 uppercase">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindDest;
