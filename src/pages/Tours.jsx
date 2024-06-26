import { useState } from "react";
import { Link } from "react-router-dom";
import pune from '../assets/pune.jpg'
import tourdata from './toursdata';
import { TourTypeButton } from "../utils/TourTypeButton";

const Tours = () => {
  const [selectedType, setSelectedType] = useState("all");

  const filteredTours =
    selectedType === "all"
      ? tourdata
      : tourdata.filter((tour) => tour.type === selectedType);

  return (
    <>
      <section>
        <div className="relative">
          <img
            src={pune}
            alt="Shaniwarwada image Pune"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">
              Discover Beautiful Tours
            </h1>
            <p className="text-lg">
              Explore different types of tours and find the perfect one for you.
            </p>
          </div>
        </div>
      </section>

      <section className=" mx-auto bg-slate-100  flex flex-col justify-center items-center w-screen">
        <div className="flex justify-center space-x-4 mt-8 bg-black text-slate-100 px-6 text-center py-3 rounded-full">
          <TourTypeButton
            label="All"
            type="all"
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <TourTypeButton
            label="spiritual"
            type="spiritual"
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <TourTypeButton
            label="scenic"
            type="scenic"
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        </div>
        <div className="tour-grid ">
          {filteredTours.map((tour) => (
            <Link
              to={{
                pathname: `/tour/${tour.id}`,
                state: { tourData: tour },
              }}
              key={tour.id}
              className="tour-card max-w-xs rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl "
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={tour.img}
                  alt={tour.name}
                  className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="font-bold text-xl mb-2">{tour.name}</div>
                  <p className="text-base">{tour.desc}</p>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{tour.name}</div>
              </div>
              <div className="px-6 pt-4 p-2">
                <span className="text-black font-bold">
                  <span>{tour.rating} </span>
                  <span className="ml-2">{tour.review}</span>
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 float-end">
                  {tour.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tours;
