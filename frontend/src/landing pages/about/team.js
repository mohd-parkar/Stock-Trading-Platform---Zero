function Team(){
    return(
        <div>
    <div className="container">
      <div className="row p-5  ">
        <h2 className="text-center fs-4 mt-5">
          People
        </h2>
      </div>
      <div className="row  p-5 tex-muted" style={{fontSize:"0.95rem", lineHeight:"2"}}>
        <div className="col p-5">
            <img src="\media\images\nithinKamath.jpg"style={{borderRadius: "50%", width: "65%" , marginLeft: "3rem"}}></img>
            <h3 className="fs-5 text-center me-5 mt-3">Nithin Kamath</h3>
            <h4 className="fs-6 text-muted text-center me-5">CEO</h4>

        </div>
        <div className="col p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <a href="" style={{textDecoration: "none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Team;