const Selectedplayers = ({ toggleBetween, selectedPlayers, handleDelete }) => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl font-bold">
        Selected Players: {selectedPlayers.length}/6
      </h1>

      {selectedPlayers.map((player, index) => (
        <div key={index.id} className="w-11/12 mx-auto mt-10 ">
          <div className="card bg-base-100 p-5 shadow-xl">
            <div className="flex items-center">
              <div>
                <img
                  className=" w-[100px]  rounded-3xl"
                  src={player.image}
                  alt="Shoes"
                />
              </div>
              <div className="card-body">
                <h2 className="card-title">{player.name}</h2>
                <p>{player.role}</p>
              </div>
              <br />
              <br />
              <button
                onClick={() => handleDelete(player.playerId)}
                className="btn text-red-500"
              >
                Delete
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      ))}

      <button onClick={() => toggleBetween()} className="btn w-52 ml-16 mt-6 bg-lime-400">
        ADD MORE PLAYER
      </button>
    </div>
  );
};

export default Selectedplayers;
