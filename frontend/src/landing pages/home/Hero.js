import React from "react";

function Hero() {
  return (
    <>
      <div className="container mt-3 p-4 text-center">
        <div className="row mb-3">
          <img src="/media/images/homeHero.png" className="mb-5" alt="Hero Image"></img>
          <h2 className="mt-4 mb-2">Invest in everything</h2>
          <p className="mb-4">Online platform to invest stocks, derivatives, mutual funds, and more</p>
          <button className="btn btn-primary mt-1" style={{width: "20%" , margin: "0 auto "}}>Signup Now</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
