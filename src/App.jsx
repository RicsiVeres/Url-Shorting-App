import { useState, Ref, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import IllustrationWorking from "./images/illustration-working.svg";
import BgShorten from "./images/bg-shorten-desktop.svg";
import img1 from "./images/icon-brand-recognition.svg";
import img2 from "./images/icon-detailed-records.svg";
import img3 from "./images/icon-fully-customizable.svg";
import logo from "./images/logo.svg";
import "./App.css";

function App() {
  const form = document.getElementById("form");

  const [data, setData] = useState();

  const url = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url.current.value}`
      );
      const data = await response.json();
      setData(data);
      console.log(url.current.value);
      console.log(data);
      console.log(data.ok);
    } catch (error) {
      console.error("Hiba történt:", error);
    }
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    if (!data.ok) {
      form.style.border = "2px solid hsl(0, 87%, 67%)";
      form.style.color = "hsl(0, 87%, 67%)";
    }
  };
  const [text, setText] = useState("");

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
  };

  

  return (
    <>
      <nav role="navigation" id="mobile-view">
        <h1 id="logo">Shortly</h1>

        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <li>Features</li>
            </a>
            <a href="#">
              <li>Pricing</li>
            </a>
            <a href="#">
              <li>Resources</li>
            </a>
            <hr />
            <div>
              <a href="#" id="Login">
                Login
              </a>
              <a href="#" id="SignUp">
                Sign Up
              </a>
            </div>
          </ul>
        </div>
      </nav>

      <nav id="pc-view">
        <div>
          <h1>Shortly</h1>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        <div>
          <a href="#">Login</a>
          <a href="x" id="SignUp">
            Sign Up
          </a>
        </div>
      </nav>

      <div className="container">
        <div id="csere">
          <img src={IllustrationWorking} />
          <div>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="SearchBar" id="Search">
          <div>
            <form onSubmit={handleSubmit}>
              <input
                id="form"
                type="text"
                placeholder="Shorten a link here..."
                ref={url}
              />
              <button type="submit" id="btn">
                Shorten It!
              </button>
            </form>
          </div>
        </div>
        {data && data.ok ? (
          <div id="resultbox">
            <div className="result">
              <h6>{data.result.short_link}</h6>
              <p>{data.result.full_short_link}</p>
              <a onClick={() => handleCopy(data.result.full_short_link)}>
                Copy
              </a>
            </div>
            <div className="result">
              <h6>{data.result.short_link2}</h6>
              <p>{data.result.full_short_link2}</p>
              <a onClick={() => handleCopy(data.result.full_short_link2)}>
                Copy
              </a>
            </div>
            <div className="result">
              <h6>{data.result.short_link3}</h6>
              <p>{data.result.full_short_link3}</p>
              <a onClick={() => handleCopy(data.result.full_short_link3)}>
                Copy
              </a>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bg">
        <div className="AdvancedStatistics">
          <div className="stats">
            <div id="center">
              <h2>Advanced Statistics</h2>
              <p id="ptag">
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <div className="cards">
              <div className="card" id="c1">
                <div>
                  <img src={img1} alt="" />
                </div>
                <h3>Brand Recognition</h3>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
              <div className="card" id="c2">
                <div>
                  <img src={img2} alt="" />
                </div>
                <h3>Detailed Records</h3>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
              <div className="card" id="c3">
                <div>
                  <img src={img3} alt="" />
                </div>
                <h3>Fully Customizable</h3>
                <p>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="alsoresz">
        <div>
          <h1>Boost your links today</h1>
          <button href="#Search">Get Started</button>
        </div>
      </div>
      <div className="LabLec">
        <div>
          <img src={logo} />
        </div>
        <div>
          <b>Features</b>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </div>
        <div>
          <b>Resources</b>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </div>
        <div>
          <b>Company</b>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </div>
        <div>
          <i>f</i>
          <i>t</i>
          <i>p</i>
          <i>i</i>
        </div>
      </div>
    </>
  );
}

export default App;
