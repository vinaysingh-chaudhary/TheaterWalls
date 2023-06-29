import React from "react";

function CastCard({ character, profilePic }) {
  const firstCut = character.indexOf("/");
  const lastCut = character.indexOf("(voice)");
  console.log(lastCut);

  return (
    <div className="w-[80%] h-[80%] flex flex-col ">
      <img src={profilePic ? profilePic : profilePic} alt="no image" />
      <p>{character.substring(0, firstCut)}</p>
      <p>{character.substring(firstCut + 1, lastCut).replace("(voice", " ")}</p>
    </div>
  );
}

export default CastCard;
