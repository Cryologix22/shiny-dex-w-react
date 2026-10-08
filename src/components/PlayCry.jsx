const PlayCry = ({ audioRef, hasCry = false }) => {
  const playCry = async () => {
    const audio = audioRef.current;
    if (!audio || !hasCry) return;

    try {
      audio.currentTime = 0;
      await audio.play();
    } catch (error) {
      console.warn("Pokémon cry could not be played:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={playCry}
      disabled={!hasCry}
      aria-label={hasCry ? "Play Pokémon cry" : "Pokémon cry unavailable"}
      className="cry__btn"
      style={{
        backgroundColor: "darkslategrey",
        color: "white",
        border: "2px solid gold",
        padding: "6px 14px",
        borderRadius: "50px",
        cursor: hasCry ? "pointer" : "not-allowed",
        opacity: hasCry ? 1 : 0.5,
      }}
    >
      {hasCry ? "Play Cry" : "Cry Unavailable"}
    </button>
  );
};

export default PlayCry;
