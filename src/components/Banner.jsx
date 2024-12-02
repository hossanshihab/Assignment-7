
import "../index.css";

const Banner = ({handleIncrease}) => {
  return (
    <div className="w-11/12 mx-auto md:mt-28 
    ">
      <div className="banner">
        <div className="flex flex-col justify-center items-center gap-7 p-2">
          <img className="w-[200px]" src="assets/banner-main.png" alt="" />
          <h1 className="font-bold md:text-4xl text-center">Assemble Your Ultimate Dream 11 Cricket team</h1>
          <p className="text-white font-bold">Beyond Bounderies Beyond Limits</p>
          <div className="border-2 p-2 rounded-2xl"><button onClick={()=>handleIncrease()} className="btn bg-yellow-300 font-bold">Claim Free Credit</button></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
