import { useState } from "react";
import reactLogo from "./assets/react.svg";
import IllustrationWorking from "./images/illustration-working.svg";
import BgShorten from "./images/bg-shorten-desktop.svg";
import img1 from "./images/icon-brand-recognition.svg";
import img2 from "./images/icon-detailed-records.svg";
import img3 from "./images/icon-fully-customizable.svg";
import "./App.css";

function App() {
  return (
    <>
      <nav>
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
        <div>
          <div>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button>Get Started</button>
          </div>
          <img src={IllustrationWorking} />
        </div>
        <div className="SearchBar">
          <div>
            <input type="text" placeholder="Shorten a link here..." />
            <button type="submit" id="btn">
              Shorten It!
            </button>
          </div>
        </div>
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
          <button>Get Started</button>
        </div>
      </div>
      <div className="LabLec">
        <div>
          <h1>Shortly</h1>
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
