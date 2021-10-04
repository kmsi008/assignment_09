import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
  faLinkedin,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faPhoneVolume,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md- footer">
              <div className="left-container text-start">
                <h1>Feni Soccer Club</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <a target="*" rel="noreferrer" href={"https://www.instagram.com/ilhankhondaker/?hl=en/"} >
                      <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                  </div>
                  <div className="icon">
                    <a target="*" rel="noreferrer" href={"https://twitter.com/IlhanKhondaker/"} >
                      <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>
                  </div>
                  <div className="icon">
                    <a target="*" rel="noreferrer" href={"https://www.youtube.com/channel/UCYzmpgr_xPjbyU7P_xWz2zw"} >
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </div>
                  <div className="icon">
                    <a target="*" rel="noreferrer" href={"https://www.facebook.com/ilhan.khondaker/"} >
                      <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                  </div>
                  <div className="icon">
                    <a target="*" rel="noreferrer" href={"https://www.facebook.com/Ilhan-Khondaker-102758198228272/"} >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </div>
                  <div className="icon">
                    <a target="*" rel="noreferrer" href={"https://www.linkedin.com/in/ilhan-khondaker-9a46b01b5//"} >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>

                <p className="mt-5">
                  <small>Showkat Imran © . All rights reserved.</small>
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
