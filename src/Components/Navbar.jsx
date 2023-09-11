import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [phoneMenu, setPhoneMenu] = useState(false);
  const navigate = useNavigate();

  const openPhoneMenu = () => {
    setPhoneMenu(true);
  };

  const closePhoneMenu = () => {
    setPhoneMenu(false);
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate(`/explore/movie`);
    } else {
      navigate(`/explore/tv`);
    }
    setPhoneMenu(false);
  };

  return (
    <div className="h-[7vh] w-full flex justify-between items-center bg-black relative" >
      <div className="w-full text-white sm:flex sm:justify-start sm:items-center sm:pl-8 ">
        <p className="text-3xl text-center cursor-pointer" onClick={() => navigate("/")}>
        Theatre<span className="text-pink-500">Walls</span>
        </p>
      </div>

      {/* desktop */}
      <ul className=" w-[30%] justify-evenly items-center hidden sm:flex sm:justify-center sm:gap-12 sm:pr-4">
        <li
          className="text-white hover:underline hover:text-pink-500 cursor-pointer"
          onClick={() => navigationHandler("movie")}
        >
          Movies
        </li>
        <li
          className="text-white hover:underline hover:text-pink-500 cursor-pointer"
          onClick={() => navigationHandler("tv")}
        >
          Shows
        </li>
      </ul>

      {/* phone */}
      <div className="flex sm:hidden w-[7%] justify-evenly mr-1 absolute right-0">
        {phoneMenu ? (
          <MdClose
            className="text-white text-4xl z-[2000]"
            onClick={closePhoneMenu}
          />
        ) : (
          <TiThMenu className="text-white text-2xl" onClick={openPhoneMenu} />
        )}
      </div>

      {/* phone */}
      {phoneMenu && (
        <div
          className={`w-full h-full bg-[#0000006c] backdrop-blur-md absolute top-[0%] z-[1000] transition-all flex justify-center items-center sm:hidden`}
        >
          <div className="w-[70%] h-[30%] bg-[#171717d5] flex flex-col justify-center items-center rounded-lg">
            <ul className="flex flex-col text-center justify-center items-center w-[100%] h-[100%] gap-7">
              <li
                className="text-xl text-white hover:scale-[1.1] bg-black w-[40%] rounded-md h-[15%] flex justify-center items-center shadow-pink-500 shadow-[rgba(7,_65,_210,_0.1)_0px_2px_15px] uppercase "
                onClick={() => navigationHandler("movie")}
              >
                Movies
              </li>
              <li
                className="text-xl text-white hover:scale-[1.1] bg-black w-[40%] rounded-md h-[15%] flex justify-center items-center shadow-pink-500 shadow-[rgba(7,_65,_210,_0.1)_0px_2px_15px] uppercase "
                onClick={() => navigationHandler("tv")}
              >
                Shows
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
