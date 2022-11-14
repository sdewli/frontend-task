import React, { useState } from "react";
import logo from "./images/logo.png";
import flag from "./images/flag.png";
import twitter from './images/icons/twitter.svg'
import instagram from './images/icons/instagram.svg'
import discord from './images/icons/discord.svg'
import youtube from './images/icons/youtube.svg'
import github from './images/icons/github.svg'
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  const [dropdown, setDropDown] = useState(false);
  return (
    <footer>
      <div className="footer-content">
        <div className="language-container">
          <div className="icon-container">
            <img src={logo} alt="logo" />
            <span className="logo-text"> P2E Pro </span>
          </div>
          <p>P2E Pro NFT is a shared liquidity NFT market smart contract</p>
          <h4>Language</h4>
          <button
            className="language-btn"
            onClick={() => setDropDown(!dropdown)}
          >
            <img className="flag" src={flag} alt="en" />
            <p>English</p>
            <FontAwesomeIcon
              className="dropdown-icon"
              style={
                dropdown
                  ? {
                      transform: "rotate(180deg)",
                    }
                  : ""
              }
              icon={faAngleDown}
            />
          </button>
        </div>
        <div>
          <h3>Marketplace</h3>
          <ul>
            <li>Profile</li>
            <li>Marketplace</li>
            <li>Creators</li>
            <li>Activity</li>
            <li>Collection</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>Upload</li>
            <li>Connect wallet</li>
            <li>Our blog</li>
            <li>Item details</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h3>Join Newsletter</h3>
          <input className="newsletter-input" placeholder="Your Email" />
          <button className="subscribe-btn" type="email">
            Subscribe
          </button>
          <div className="social-links">
            <button className="social-btn"><img  src={twitter} alt='twitter' /></button>
            <button className="social-btn"><img  src={instagram} alt='instagram' /></button>
            <button className="social-btn"><img  src={youtube} alt='youtube' /></button>
            <button className="social-btn"><img  src={github} alt='github' /></button>
            <button className="social-btn"><img  src={discord} alt='discord' /></button>

          </div>
        </div>
      </div>
      <div className="down">
        <span>
          Copyright &#169; 2022. Created with love by <a>P2E Pro NFT</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
