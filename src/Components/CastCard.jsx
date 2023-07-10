import React from "react";
import Unknownpfp from "../../public/Unknownpfp.png";

function CastCard({ character, profilePic, name }) {
  return (
    <div className="min-w-[30%] h-[100%] flex flex-col items-center sm:min-w-[20%] md:min-w-[15%] lg:min-w-[12%] xl:min-w-[10%] 2xl:max-w-[8%]">
      <img
        src={
          profilePic !== "https://image.tmdb.org/t/p/originalnull"
            ? profilePic
            : Unknownpfp
        }
        className="w-[100%] aspect-square object-cover object-center text-white rounded-full"
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
