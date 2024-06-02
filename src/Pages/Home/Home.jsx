import React from "react";


export const Home = () => {
  return (
    <>
      <div>
        <img src="https://www.lulus.com/images/content/content_2130_131241_05242430offsaletoprunnersite2.jpg?w=1366" alt="" />
      </div>
      <div>   
        <Hero />
      </div>
      <div>
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-TopBannerMZ-Z3-header.jpg" className="brightness-125 saturate-150" alt="ye wale banner" />
        <img src="https://i.pinimg.com/originals/cc/b3/4f/ccb34f51bba6597deec3bf36ed654315.gif" alt="ladki ka banner" />
      </div>
      <div className=" min-h-fit bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-Westernwear-Fig-Styli-5070.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Fig Styli!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Check Out!</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-fit bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-TopBrand-ax-mns-min40.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Top Brand!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-">Check Out!</button>
          </div>
        </div>
      </div>

    </>
  );
};


const Hero = () => {
  return (
    <>
    <div className="mein">
      <div className="hero min-h-fit py-4 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Ｗｅｌｃｏｍｅ ｔｏ Ｔｒｅｎｄｌｕｘｅ</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut
              assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started Now </button>
          </div>
        </div>
      </div>
    </div></>
  )
}
