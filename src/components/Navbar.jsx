
const Navbar = ({credit}) => {
  return (
    <div className="w-11/12 mx-auto top-0 left-0 right-0 md:fixed md:bg-white/30 md:backdrop-blur-md md:shadow-md md:z-50 p-3">

      <div className="flex md:flex-row flex-col justify-between items-center"> 
        <div>
          <img src="assets/logo.png" alt="" />
        </div>
        <div className="flex md:flex-row flex-col items-center gap-10 text-gray-600">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Fixture</p>
          <p className="cursor-pointer">Teams</p>
          <p className="cursor-pointer">Schedules</p>
          <div><button className="btn border-red-500 px-10 py-3">Doller: ${credit}</button></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
