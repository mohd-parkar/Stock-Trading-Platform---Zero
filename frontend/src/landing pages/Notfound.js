import Footer from "./Footer";
import Navbar from "./Navbar";

function Notfound() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <h2 className="p-5 text-center">404 Page Not Found</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Notfound;
