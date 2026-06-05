import React from "react";

function Award() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-6 p-5">
            <img src="\media\images\largestBroker.svg"></img>
          </div>
          <div className="col-6 p-5 ">
            <h2 className="mb-3">Largest stock broker in India</h2>
            <p className="mb-5">
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in :{" "}
            </p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>
                    <p>Future and Options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Goverment Security</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-5">
                <img src="\media\images\pressLogos.png" style={{width: "95%"}} className="mt-3"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Award;
