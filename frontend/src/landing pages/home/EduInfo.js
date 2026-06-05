import React from "react";

function Education() {
  return (
    <>
      <div className="row p-5">
        <div className="col-6">
          <img src="\media\images\education.svg" style={{ width: "90%" }}></img>
        </div>
        <div className="col-6  p-5">
          <h1 className="fs-4">Free and open market education </h1>
          <p className="mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading
          </p>
          <a href="">
            Varsity <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries{" "}
          </p>
          <a href="">
            TradingQ&A <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Education;
