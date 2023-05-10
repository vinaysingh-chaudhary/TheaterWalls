import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(false);
  const [showSearch, setShowSearch] = useState("");
  const [phoneMenu, setPhoneMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const [menuSlideDown, setMenuSlideDown] = useState(50);
  const [searchSlideDown, setSearchSlideDown] = useState(50);

  const openPhoneMenu = () => {
    setPhoneMenu(true);
    setShowSearch(false);
    setMenuSlideDown(-50);
  };

  const closePhoneMenu = () => {
    setPhoneMenu(false);
    setMenuSlideDown(50);
  };

  const openSearch = () => {
    setShowSearch(true);
    setSearchSlideDown(-50);
    setPhoneMenu(false);
    setMenuSlideDown(50);
  };

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 3000);
    }
  };

  // console.log(query);

  return (
    <div className="flex justify-between items-center bg-blue-950 relative">
      <div className="w-[70%]">
        <span className="text-3xl">TheaterWalls</span>
      </div>

      <ul className=" w-[30%] justify-evenly items-center hidden sm:flex ">
        <li>Movies</li>
        <li>Shows</li>
        <li>
          <BsSearch className="text-white" onClick={openSearch} />
        </li>
      </ul>

      <div className="flex sm:hidden w-[15%] justify-evenly">
        <BsSearch onClick={openSearch} />

        {phoneMenu ? (
          <GrClose onClick={closePhoneMenu} />
        ) : (
          <TiThMenu onClick={openPhoneMenu} />
        )}
      </div>

      <div
        className={`w-[100%] h-[50px] bg-red-700 absolute bottom-[${menuSlideDown}px] z-10 transition-all flex sm:hidden `}
      >
        <ul className="flex flex-col text-center justify-around items-center w-[100%]">
          <li>Movies</li>
          <li>Shows</li>
        </ul>
      </div>

      {showSearch && (
        <div
          className={`w-[100%] h-[50px] bg-red-700 absolute bottom-[${searchSlideDown}px] z-10 transition-all flex `}
        >
          <input
            type="text"
            placeholder="search.."
            className="w-[100%]"
            onChange={(event) => setQuery(event.target.value)}
            onKeyUp={searchQueryHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
