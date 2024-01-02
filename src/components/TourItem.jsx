import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toursdata from "../pages/toursdata";
import { add, remove } from "../redux/CartSlice";

const TourItem = ({ post }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth <= 600;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % toursdata.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const isInCart = cart.find((item) => item.id === post.id);

  const handleAddToCart = () => {
    dispatch(add(post));
    toast.success("Item Added To Cart");
  };

  const handleRemoveFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  };

  const renderTourOptions = (tour, index) => {
    const isActive = index === (isMobile ? 1 : 2);
    return (
      <div key={tour.id}>
        <div
          className={`relative max-w-xs rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform pb-4 bg-${
            isActive ? "slate-700" : "slate-800"
          } mb-4`}
          style={{ flex: "1 1 300px" }}
        >
          <div className="relative group">
            <img
              src={tour.img}
              alt={tour.name}
              className="w-full h-48 object-cover transition duration-500 ease-in-out transform hover:scale-105"
            />
            <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 bg-gray-800 text-slate-50 p-4 transition-opacity duration-300">
              <div className="font-bold text-xl mb-2">{tour.name}</div>
              <p className="text-gray-200 text-base">{tour.desc}</p>
              <div className="pt-4">
                <span className=" text-white font-bold">
                  <span>{tour.rating} </span>
                  <span className="ml-2">{tour.review}✨</span>
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 float-end">
                  {tour.price}
                </span>
              </div>
            </div>
          </div>
          <div className="text-center mt-2 text-white">{tour.imgName}</div>
          <div className="flex justify-center items-center mt-2">
            <button
              className={`text-white font-bold bg-${
                isActive ? "slate-600" : "slate-700"
              } px-4 rounded-full item-center py-2 hover:bg-${
                isActive ? "bg-slate-500" : "bg-slate-600"
              }  
              flex justify-center items-center space-x-2`}
              onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
            >
              <span>{isInCart ? "Remove from Cart" : "Add to Cart"}</span>
              <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap items-center justify-evenly gap-4 w-full">
      {toursdata
        .slice(currentIndex, currentIndex + (isMobile ? 1 : 3))
        .map((tour, index) => renderTourOptions(tour, index))}
    </div>
  );
};

export default TourItem;
