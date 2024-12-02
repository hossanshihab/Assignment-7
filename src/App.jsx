import Navbar from "./components/Navbar";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Banner from "./components/Banner";

import Allplayers from "./components/Allplayers";
import { useState } from "react";
import Footer from "./components/Footer";
import Selectedplayers from "./components/Selectedplayers";
import Toggle from "./components/Toggle";

function App() {
  
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleDelete = (id) => {
    handleDeletePrice(id)
    const newPlayer = selectedPlayers.filter((p) => p.playerId != id);
    setSelectedPlayers(newPlayer);
    console.log(id);
    toast.success("Player deleted successfully!");
  };
  // Delete price by id 
  const handleDeletePrice = (id) => {
      const playersPrice = selectedPlayers.find((prices)=> prices.playerId == id)
      setCredit(credit + playersPrice.biddingPrice)
  }

  // Choose player buttons functionality 
  const handleSelectedPlayers = (player) => {

    if (credit <= 0) {
      toast.error("Not enough money to buy a player.");
      return;
    }
    if (credit < player.biddingPrice){
      toast.error(`In sufficent balance to buy this player`)
      return;
    }
  
    if (selectedPlayers.length >= 6) {
      toast.error("You can only add up to 6 players.");
      return;
    }
  
    if (player.biddingPrice <= 0 ) {
      toast.error("Player price will be greater than 0.");
      return;
    }

    const loadingToastId = toast.loading("Loading...");
    const isExist = selectedPlayers.find(
      (previous) => previous.playerId === player.playerId
    );
    if (!isExist) {
      handleDecreasePlayerPrice(player.biddingPrice);
      setSelectedPlayers([...selectedPlayers, player]);
    } else {
      toast.error("Player have been already exist");
    }
    setTimeout(() => {
      toast.update(loadingToastId, {
        render: "Congratulation Player has been selected!",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
    }, 1000);
  };

  // toggle-buttons
  const [isClickSelectedButton, setisClickSelectedButton] = useState(false);
  const toggleBetween = () => {
    setisClickSelectedButton((prev) => !prev);
  };

  // Initial balance Zero of use state 
  const [credit, setCredit] = useState(0);
  const handleIncrease = () => {
    const loadingToastId = toast.loading("Loading...");
    setCredit(credit + 1000000);
    console.log("click");
    setTimeout(() => {
      toast.update(loadingToastId, {
        render: "Congratulation Doller added your account!",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
    }, 1000);
  };

  // Price decrese between main 
  // balance and player balance
  const handleDecreasePlayerPrice = (price) => {
      setCredit(credit - price)
  };


  return (
    <>
      <Navbar credit={credit}></Navbar>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Banner handleIncrease={handleIncrease}></Banner>

      <Toggle
         toggleBetween={toggleBetween}
         selectedPlayers={selectedPlayers}
         isClickSelectedButton={isClickSelectedButton}
      ></Toggle>
      
      {isClickSelectedButton ? (
        <Selectedplayers
          handleDelete={handleDelete}
          selectedPlayers={selectedPlayers}
          toggleBetween={toggleBetween}
        ></Selectedplayers>
      ) : (
        <Allplayers handleSelectedPlayers={handleSelectedPlayers}></Allplayers>
      )}

      <Footer></Footer>
    </>
  );
}

export default App;
