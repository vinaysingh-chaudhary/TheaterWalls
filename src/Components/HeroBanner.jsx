import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const [heroBnrBg, setHeroBnrBg] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div>
      <div>
        <h1>TheaterWalls</h1>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search here..."
          className="border-[1.5px] border-black"
          onKeyUp={searchQueryHandler}
          onChange={(event) => setSearchQuery(event.target.value)}
        />

        <button>Search</button>
      </div>
    </div>
  );
};

export default HeroBanner;
