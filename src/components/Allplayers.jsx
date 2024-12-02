import { useEffect, useState } from "react";

const Allplayers = ({ handleSelectedPlayers }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("allplayers.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {players.map((player) => (
          <div key={player.playerId} className="card bg-gradient-to-r  shadow-lg transform transition-transform hover:scale-105 duration-300 m-5 border-2 border-gray-200 rounded-xl overflow-hidden">
            <figure className="px-5">
              <img
                className="w-full text-black font-bold h-48 rounded-3xl object-cover transition-transform duration-300 hover:scale-110 p-5"
                src={player.image}
                alt={player.name}
              />
            </figure>
            <div className="card-body text-white p-5">
              <h2 className="card-title text-2xl text-black font-bold flex items-center">
                <i className="fa-solid fa-user mr-2"></i>
                {player.name}
              </h2>
              <div className="flex text-lg items-center">
                <p className="mr-4 text-black font-bold"><i className="fa-solid fa-flag"></i> {player.country}</p>
                <p className="text-black font-bold">{player.role}</p>
              </div>
              <hr className="my-2 border-gray-300" />
              <p className="font-bold text-black">Rating</p>
              <div className="flex items-center gap-3">
                <p className="bg-gray-800 rounded-full px-2">{player.battingType}</p>
                <p className="bg-gray-800 rounded-full px-2">{player.bowlingType}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="font-bold text-lg text-black font-bold">Price: ${player.biddingPrice}</p>
                <button onClick={() => handleSelectedPlayers(player)} className="btn bg-lime-400 hover:bg-lime-600 text-black font-bold py-2 px-4 rounded-lg transition duration-300">Choose Player</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allplayers;