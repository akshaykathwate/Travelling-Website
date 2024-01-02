import { GiCoolSpices } from "react-icons/gi";
import { FaTimes } from "react-icons/fa"; // Import the remove icon
import { NavLink } from "react-router-dom";
import "../components/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Blog", link: "/blog" },
    { id: 4, text: "Tours", link: "/tours" },
  ];

  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 bg-white-900 text-slate-400 font-bold z-10">
        <div className="flex justify-around items-center h-14 px-4 md:px-8">
          <div className="text-xl font-bold flex justify-between items-center gap-5 md:text-3xl">
            <GiCoolSpices />
            Voyage
          </div>
          <ul className="hidden md:flex md:justify-evenly space-x-5">
            {navItems.map((item) => (
              <li key={item.id} className="hover:text-black hover:scale-125">
                <NavLink
                  to={item.link}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="md:hidden flex justify-start">
            <button className="" onClick={toggleMenu}>
              Menu
            </button>
          </div>

          <div
            className={`md:hidden fixed inset-y-0 right-0 overflow-hidden transition-transform transform  ${
              menu ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <button
              className="fixed inset-0 w-full h-full bg-black opacity-50"
              onClick={toggleMenu}
            ></button>
            <div className="flex flex-col justify-start items-start bg-navy-500 text-white h-full w-56 p-4">
              <div className="flex justify-end">
                <button className="text-white" onClick={toggleMenu}>
                  <FaTimes />
                </button>
              </div>
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  className="text-white hover:text-blue-500 py-2"
                >
                  {item.text}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
