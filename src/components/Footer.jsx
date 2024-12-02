const Footer = () => {
  return (
    <div className="">
      <div className="border-2 w-7/12 mx-auto mt-10 p-3 rounded-3xl">
        <div className="banner flex flex-col items-center justify-center gap-5 p-10 h-10">
          <h2>Subscribe to our News latter</h2>
          <p>get the latest updates and news right in your inbox</p>
          <input
            className="px-20 py-3 bg-slate-300 text-white rounded-2xl"
            type="text"
            placeholder="enter your mail"
          />
          <button className="btn btn-success ml-3 text-white">Subscribe</button>
        </div>
      </div>
      <div className="bg-black w-full min-h-56 mt-10 mb-10">
      <div className="flex flex-col justify-center items-center">
            <img src="assets/logo-footer.png" alt="" />
          </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-col-2 w-11/12 mx-auto items-center p-20 gap-10 space-y-10">
          <div className="text-white space-y-5">
            <h1>About US</h1>
            <p>
              We are a passionate team <br />
              Dedicated to Providing the best <br />
              Services To our Customars
            </p>
          </div>
          <div className="text-white space-y-5">
            <p>Quick links</p>
            <p>Home</p>
            <p>Service</p>
            <p>Services</p>
            <p>About</p>
            <p>Contacts</p>
          </div>
          <div className="text-white space-y-5">
            <p>Subscribe</p>
            <p>
              Subscribe to our Newslatter for the <br />
              latest updates
              <br />
              <br />
              <input
                className="md:px-20 px-10 rounded-3xl py-3 "
                type="text"
                placeholder="enter your mail"
              />
              <br />
              <br />
              <button className="btn btn-success ml-3 text-white">
                Subscribe
              </button>
            </p>
          </div>
        </div>
        <div className="p-10">
          <hr />
          <br />
          <p className="text-white text-center">
            @2024 your company Allright reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
