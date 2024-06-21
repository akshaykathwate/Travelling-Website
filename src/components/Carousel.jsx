import { useState, useEffect } from "react";
import toursdata from "../pages/toursdata";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = toursdata.slice(1);
  const currentItem = data[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="relative h-[500px] overflow-hidden flex-1">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: index === currentIndex ? 1 : 0 }}
        >
          <img
            src={item.img}
            alt={`carousel-${item.id}`}
            className="w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-1000">
            <div className="text-center space-y-5">
              <h1 className="text-2xl md:text-4xl italic font-serif font-semibold">
                Relax & Enjoy
              </h1>
              <h1 className="text-3xl font-bold">{item.name}</h1>
              <p className="text-lg">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
