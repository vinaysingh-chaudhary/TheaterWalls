import React from "react";

function CastCard({ character, profilePic, name }) {
  
  return (
    <div className="w-[80%] h-[80%] flex flex-col ">
      <img src={profilePic ? profilePic : profilePic} alt="no image" />
        <p>{name.replace("(voice)", "")}</p>
        <p>{character.replace("(voice)", "")}</p>
    </div>
  );
}

export default CastCard;
