
const PlayCry = ({ audioRef }) => {

  const playCry = () => {
    audioRef.current.play();
  };

  return (
    <button onClick={playCry} className="cry__btn" style={{ backgroundColor: "darkslategrey", color: "white", border: "2px solid gold", padding: "6px 14px", borderRadius: "50px", cursor: "pointer" }}>
      Play Cry
    </button>
  );
};

export default PlayCry;
