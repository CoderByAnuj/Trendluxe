import React from "react";

export const Home = () => {
  return (
    <>
      <div className="mein">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Welcome To TrendLuxe</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-fit bg-base-200">
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
