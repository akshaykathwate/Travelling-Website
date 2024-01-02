import { memo } from "react";
import Carousel from "../components/Carousel";
import FindDest from "../components/FindDest";
import Populartours from "../components/Populartours";

const Destination = memo(FindDest);
const Home = () => {
  return (
    <>
      <Carousel />
      <Destination />
      <Populartours />
    </>
  );
};

export default Home;
