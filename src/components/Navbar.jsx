import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiCoolSpices } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

import "../components/Navbar.css";

const Navbar = () => {
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Blog", link: "/blog" },
    { id: 4, text: "Tours", link: "/tours" },
  ];

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 bg-white-900 text-slate-400 font-bold z-10 shadow-md">
        <div className="flex justify-between md:justify-around h-14 px-4 md:px-8 items-center">
          <div className="text-2xl font-bold flex items-center gap-5 md:text-3xl text-purple-">
            <GiCoolSpices />
            Voyage
          </div>
          <ul className="hidden md:flex md:justify-evenly space-x-5">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="hover:text-black hover:scale-125 transition-all"
              >
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
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="bg-orange-500 text-white px-3 py-2 rounded"
            >
              <MdMenuOpen />
            </button>
          </div>
        </div>
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-70 transition-transform transform ${
            menu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end ">
            <button onClick={toggleMenu} className="text-white text-4xl p-4">
              <IoMdCloseCircleOutline />
            </button>
          </div>

          <div className="flex justify-between  inset-y-0 w-full  text-slate-200 text-2xl px-5 ">
            <ul
              className="flex flex-col gap-5 w-1/2 "
            >
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="hover:text-purple-800 transition-all "
                >
                  <NavLink
                    to={item.link}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active "
                        : ""
                    }
                    onClick={toggleMenu}
                  >
                    {item.text}
                    <hr />
                  </NavLink>
                </li>
              ))}
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
