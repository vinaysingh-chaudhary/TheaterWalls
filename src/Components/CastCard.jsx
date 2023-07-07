import React from "react";
import Unknownpfp from "../../public/Unknownpfp.png";

function CastCard({ character, profilePic, name }) {
  return (
    <div className="min-w-[40%] h-[100%] flex flex-col items-center ">
      <img
        src={
          profilePic !== "https://image.tmdb.org/t/p/originalnull"
            ? profilePic
            : Unknownpfp
        }
        className="w-[100%] h-[70%] aspect-square object-cover text-white rounded-lg"
        alt=""
      />
      <p className="text-white text-xl text-center">
        {name.replace("(voice)", "")}
      </p>
      <p className="text-[#ffffff6f] text-center">
        {character.replace("(voice)", "")}
      </p>
    </div>
  );
}

export default CastCard;
