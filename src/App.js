import Navbar from "./component/Navbar.js";
import "./App.css";
import Forecast from "./Pages/forecast.js";
import { useState,useEffect } from "react";
import { Routes, Route, useNavigate,useLocation } from "react-router-dom";
import Footer from "./component/footer.js";
import Home from "./Pages/Home.js";
import Detail from "./Pages/detail.js";
import Header from "./component/Header.js";
import Shower from "./Pages/shower.js";
import Contact from "./Pages/contact.js";
import Done from "./Pages/Done.js";

function App() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("LUCKNOW");
  const [but, setBut] = useState("LUCKNOW");
  const buttonhandler = () => {
    const newbut = but.toUpperCase();
    setSearch(newbut);
    navigate("/Shower");
  };
  return (
    <div className="App">
      <div className="headerbox">
        <Header />
      </div>
      <div className="container">
        <div className="nav" id={expandNavbar ? "open" : "close"}>
          <Navbar />
        </div>
        <div className="body">
          <div className="searchbox">
            {" "}
            <input
              type="text"
              placeholder="Lucknow"
              className="searchbar"
              onChange={(e) => {
                setBut(e.target.value);
              }}
            />
            <button className="searchbutton" onClick={buttonhandler}>
              {" "}
              Search
            </button>
          </div>
          <div className="main">
            <Routes>
              <Route path="/" element={<Home city={search} />} />
              <Route path="/Forecast" element={<Forecast city={search} />} />
              <Route path="/Shower" element={<Shower />} />
              <Route path="/Detail" element={<Detail city={search} />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Done" element={<Done />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}

export default App;
