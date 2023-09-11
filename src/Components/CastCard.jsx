import React from "react";
import Unknownpfp from "../../public/Unknownpfp.png";

function CastCard({ character, profilePic, name }) {
  return (
    <div className="min-w-[100px] max-w-[100px] h-[200px] flex flex-col items-center justify-between overflow-hidden ">
      
      <div className="h-[60%]">
      <img
        src={
          profilePic !== "https://image.tmdb.org/t/p/originalnull"
            ? profilePic
            : Unknownpfp
        }
        className="w-full aspect-square object-cover object-center text-white rounded-full"
        alt=""
      />
      </div>

      <p className="text-white text-lg text-center h-[40%] mb-3">
        {name?.replace("(voice)", "")}
      </p>
    </div>
  );
}

export default CastCard;
