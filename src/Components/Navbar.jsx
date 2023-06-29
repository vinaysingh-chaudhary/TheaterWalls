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

  const openPhoneMenu = () => {
    setPhoneMenu(true);
    setShowSearch(false);
  };

  const closePhoneMenu = () => {
    setPhoneMenu(false);
  };

  const openSearch = () => {
    setShowSearch(true);
    setPhoneMenu(false);
  };

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 3000);
    }
  };

  const navigationHandler = (type) =>  {
    if (type === "movie") {
          navigate(`/explore/movie`)
    } else {
      navigate(`/explore/tv`)
    }
    setPhoneMenu(false);
  }


  // console.log(query);

  return (
    <div className="flex justify-between items-center bg-blue-950 relative">
      <div className="w-[70%]">
        <span className="text-3xl" onClick={() => navigate("/")}>TheaterWalls</span>
      </div>

      {/* desktop */}
      <ul className=" w-[30%] justify-evenly items-center hidden sm:flex ">
        <li onClick={() => navigationHandler("movie")}>Movies</li>
        <li onClick={() => navigationHandler("tv")}>Shows</li>
        <li>
          <BsSearch className="text-white" onClick={openSearch} />
        </li>
      </ul>

      {/* phone */}
      <div className="flex sm:hidden w-[15%] justify-evenly">
        <BsSearch onClick={openSearch} />

        {phoneMenu ? (
          <GrClose onClick={closePhoneMenu} />
        ) : (
          <TiThMenu onClick={openPhoneMenu} />
        )}
      </div>

      {/* phone */}
      {phoneMenu && (
        <div
          className={`w-[100%] h-[50px] bg-red-700 absolute top-[35px] z-10 transition-all flex sm:hidden `}
        >
          <ul className="flex flex-col text-center justify-around items-center w-[100%]">
            <li onClick={() => navigationHandler("movie")}>Movies</li>
            <li onClick={() => navigationHandler("tv")}>Shows</li>
          </ul>
        </div>
      )}

      {/* both */}
      {showSearch && (
        <div
          className={`w-[100%] h-[40px] bg-red-700 absolute top-[35px] z-10 transition-all flex `}
        >
          <input
            type="text"
            placeholder="search.."
            className="w-[100%]"
            onChange={(event) => setQuery(event.target.value)}
            onKeyUp={searchQueryHandler}
          />
          <button onClick={() => setShowSearch(false)}>close</button>
        </div>
        
      )}
    </div>
  );
};

export default Navbar;
