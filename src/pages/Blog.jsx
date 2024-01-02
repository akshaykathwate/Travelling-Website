import { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import toursdata from "../pages/toursdata";

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = toursdata.slice(-6).reverse();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Traveler Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative overflow-hidden">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`bg-white p-6 rounded-lg shadow-lg`}
          >
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-full h-48 object-cover mb-4 rounded-md hover:scale-105 duration-200 hover:opacity-80"
            />
            <p className="text-gray-700 mb-4 flex flex-col ">
              <div className="flex justify-around items-center">
                <span className="flex justify-center items-center  space-x-2 gap-1">
                  {testimonial.rating} <FcRating />
                </span>
                <div className="font-bold italic text-xl ">
                  {testimonial.review}
                </div>
              </div>
              <div>{testimonial.desc}</div>
            </p>
            <div className="font-bold">
              <hr />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-800 font-semibold text-lg">
                {testimonial.name}
              </p>
              <p className="text-gray-600 ml-2"> ~{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
