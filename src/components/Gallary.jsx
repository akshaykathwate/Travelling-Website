import rome from "../assets/Rome.jpg";
import russia from "../assets/Russia.jpg";
import seoul from "../assets/Seoul4.jpg";
import usa from "../assets/USA.jpg";
import keral from "../assets/Keral.jpg";
import india from "../assets/India.jpg";

const Gallery = () => {
  const gallery = [
    {
      id: 1,
      img: rome,
    },
    {
      id: 2,
      img: russia,
    },
    {
      id: 3,
      img: seoul,
    },
    {
      id: 4,
      img: usa,
    },
    {
      id: 5,
      img: keral,
    },
    {
      id: 6,
      img: india,
    },
  ];

  return (
    <div className="  p-4 text-black-300 rounded-md">
        <h1 className="text-center font-bold text-2xl p-3 italic">Gallary</h1>
      <div className=" mx-auto grid grid-cols-2  md:grid-cols-3 gap-4 ">
        {gallery.map((image) => (
          <div key={image.id} className="flex items-center justify-center hover:scale-125 transition-opacity duration-150 ">
            <img
              src={image.img}
              alt=""
              className="w-24 rounded-md hover:opacity-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
