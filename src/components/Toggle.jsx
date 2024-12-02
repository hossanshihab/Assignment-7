const Toggle = ({ toggleBetween, selectedPlayers, isClickSelectedButton }) => {
  return (
    <div className="flex justify-evenly items-center mt-10 w-11/12 mx-auto">
      <button
        onClick={toggleBetween}
        className={`btn ${!isClickSelectedButton ? "bg-lime-300" : ""}`}
      >
        Available
      </button>
      <button
        onClick={toggleBetween}
        className={`btn ${isClickSelectedButton ? "bg-lime-300" : ""}`}
      >
        Selected ({selectedPlayers.length})
      </button>
    </div>
  );
};

export default Toggle;
