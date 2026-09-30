import React, { useRef } from "react";

const PlayCry = ({ audioRef }) => {

  const playCry = () => {
    audioRef.current.play();
  };

  return (
    <button onClick={playCry} className="cry__btn">
      Play Cry
    </button>
  );
};

export default PlayCry;
