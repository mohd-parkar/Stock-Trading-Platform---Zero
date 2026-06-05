import React from "react";

function Footer() {
  return (
    <>
      <footer className="border-top bg-light">
        <div className="container">
          <div className="row mt-3 p-3">
            <div className="col-3 text-muted" style={{fontSize: "14px"}}>
              <img src="media/images/logo.svg" style={{ width: "50%" }}></img>
              <p className="mt-3">© 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>
            </div>
            <div className="col-3">
              <p>Account</p>
              <a href="">Open demat account</a>
              <br />
              <a href="">Minor demat account</a>
              <br />
              <a href="">NRI demat account</a>
              <br />
              <a href="">HUF demat account</a>
              <br />
              <a href="">Commodity</a>
              <br />
              <a href="">Dematerialisation</a>
              <br />
              <a href="">Fund transfer</a>
              <br />
              <a href="">MTF</a>
              <br />
            </div>
            <div className="col-3">
              <p>Support</p>
              <a href="">Contact us</a>
              <br />
              <a href="">Support portal</a>
              <br />
              <a href="">How to file a complaint?</a>
              <br />
              <a href="">Status of your complaints</a>
              <br />
              <a href="">Bulletin</a>
              <br />
              <a href="">Circular</a>
              <br />
              <a href="">Z-Connect blog</a>
              <br />
              <a href="">Downloads</a>
              <br />
            </div>
            <div className="col-3">
              <p>Company</p>
              <a href="">About</a>
              <br />
              <a href="">Philosophy</a>
              <br />
              <a href="">Press & media</a>
              <br />
              <a href="">Careers</a>
              <br />
              <a href="">Zerodha Cares (CSR)</a>
              <br />
              <a href="">Zerodha.tech</a>
              <br />
              <a href="">Open source</a>
              <br />
              <a href="">Referral program</a>
              <br />
            </div>
          </div>
          <div className="row mt-5 p-2 text-muted" style={{fontSize: "12px"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>


            <p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
