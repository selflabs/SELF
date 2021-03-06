import React from "react";
import "./styles/Footer.css";
import logoImage from "../../images/Footer/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="subscribe p-5 p-lg-0 pt-lg-5">
        <div className="container">
          <div className="row">
            <div className="col ms-4">
              <h1>
                Subscribe To Stay In <br /> The Loop!
              </h1>
            </div>
            <div className="col text-center">
              <button className="btn subscribeBtn mt-3">Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer p-3 pt-lg-5 p-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 text-center">
              <img src={logoImage} alt="logoImage" className="img-fluid" />
              <p className="paragraph">
                SELF Platform helps people on their journey toward improved
                health and wellness.
              </p>
              <div className="socialMedia">
                <div className="iconDiv">
                  <Link
                    to="#"
                    onClick={() =>
                      window.open("https://www.facebook.com/selfplatform")
                    }
                    className="socialMeadiLinks"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </div>
                <div className="iconDiv">
                  <Link
                    to="#"
                    onClick={() =>
                      window.open("https://twitter.com/selfplatform")
                    }
                    className="socialMeadiLinks"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                </div>
                <div className="iconDiv">
                  <Link
                    to="#"
                    onClick={() =>
                      window.open("https://instagram.com/selfplatforminc")
                    }
                    className="socialMeadiLinks"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="row listGrid">
                <div className="col-sm-4">
                  <ul className="navbar-nav">
                    <li className="heading">Explore</li>
                    <Link
                      to="#"
                      onClick={() =>
                        window.open(
                          "https://market.selfplatform.io/products/mirror-image%E2%84%A2"
                        )
                      }
                      className="links"
                    >
                      <li>Create Your M.I.</li>
                    </Link>

                    {/* <li>The SELF Experience </li> */}

                    {/* <li>Our Team</li> */}
                  </ul>
                </div>

                {<div className="col-sm-4">
                  <ul className="navbar-nav">
                    <li className="heading">Helpful Links</li>
                    {/*<li>Help Center</li>*/}

                    <Link
                      to="#"
                      onClick={() =>
                        window.open(
                          "https://medium.com/@theinventor/mirror-image-the-introduction-into-the-metaverse-642271ee9830?sk=57c8cab3647e74313fadd4b186d1da83"
                        )
                      }
                      className="links"
                    >
                      <li>What's New</li>
                    </Link>

                    <Link to="/TermAndCondition" className="links">
                      <li>Terms & Conditions</li>
                    </Link>

                    <Link to="/privacypolicy" className="links">
                      <li>Privacy Policy</li>
                    </Link>
                  </ul>
                </div>}

                <div className="col-sm-4">
                  <ul className="navbar-nav">
                    <li className="heading">Earn Money</li>
                    <Link
                      to="#"
                      onClick={() =>
                        window.open("https://affiliates.selfplatform.io/")
                      }
                      className="links"
                    >
                      <li>Join Our Affiliate Program</li>
                    </Link>

                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
