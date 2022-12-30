function App() {
  return (
    <div className="container ">
      <article className="header">
        <h2 className="title uppercase text-center font-bold mb-8 text-xl">
          ping<span className="text-Blue-ext">.</span>
        </h2>
        <h2 className="sub-title text-xl text-center text-Gray-ext font-light mb-3">
          We are launching <span className="font-bold text-black">soon!</span>
        </h2>
        <p className="description text-center text-sm mb-7">Subscribe and get notified</p>
      </article>
      <div className="input-email-form mb-16">
        <form action="" className="flex flex-col px-10">
          <input type="text" name="email" className="email border border-Blue-ext w-full rounded-full h-10" />
          <button className="btn-submit-email border border-Blue-ext bg-Blue-ext w-full mt-3 h-10 rounded-full text-white" type="submit">
            <a href="http://">Notify Me</a>
          </button>
        </form>
      </div>
      <img src=".\images\illustration-dashboard.png" alt="img-dashboard" className="px-5 mb-20" />
      <footer className="">
        <div className="social-media flex justify-center space-x-3 mb-7">
          <button className="border border-Gray-ext w-[40px] h-[40px] flex justify-center rounded-full">
            <a href="http://facebook.com">
              <img src=".\images\facebook.svg" alt="facebook" className="w-[25px] mt-1" />
            </a>
          </button>
          <button className="border border-Gray-ext w-[40px] h-[40px]  rounded-full flex justify-center">
            <a href="http://twitter.com">
              <img src=".\images\twitter.svg" alt="twitter" className="w-[25px] mt-2" />
            </a>
          </button>
          <button className="border border-Gray-ext w-[40px] h-[40px] flex justify-center rounded-full">
            <a href="http://instagram.com">
              <img src=".\images\instagram-icon.svg" alt="instagram" className="w-[25px] mt-2" />
            </a>
          </button>
        </div>
        <div className="copyright flex justify-center mb-5">
          <img src=".\images\copyright_icon.svg" alt="copyright" className="w-[10px]" />
          <p className="text-sm font-thin text-Gray-ext">Copyright Ping. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
