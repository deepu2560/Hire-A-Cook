import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../Styles/Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta">
            <div className="contact-detail-div">
              <div>
                <div className="single-cta">
                  <GitHubIcon sx={{ color: "#ff5e14", fontSize: "50px" }} />
                  <div className="cta-text">
                    <h4>GitHub Repo</h4>
                    <span>
                      <a
                        href="https://github.com/Deepu2560/Hire-A-Cook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Me
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="single-cta">
                  <GitHubIcon sx={{ color: "#ff5e14", fontSize: "50px" }} />
                  <div className="cta-text">
                    <h4>GitHub Backend</h4>
                    <span>
                      <a
                        href="https://github.com/Deepu2560/Hire-A-Cook/tree/Backend"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Me
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="single-cta">
                  <GitHubIcon sx={{ color: "#ff5e14", fontSize: "50px" }} />
                  <div className="cta-text">
                    <h4>GitHub Frontend</h4>
                    <span>
                      <a
                        href="https://github.com/Deepu2560/Hire-A-Cook/tree/Frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Me
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <div className="row">
              <div className=" col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-text">
                    <p>
                      This is a hackathon project. <br /> Team members name :-
                      <kbd> Deepanshu Gulia</kbd>,<kbd> Anand S Holla</kbd>,
                      <kbd> Siddalinga Koudi</kbd>,<kbd> Gollu Megha Shyam</kbd>
                      <br />
                      Tech stack :-
                      <kbd> React</kbd>,<kbd> Redux</kbd>,
                      <kbd> Material UI</kbd>,<kbd> MongoDB</kbd>,
                      <kbd> Express</kbd>,<kbd> Socket.io</kbd>,
                      <kbd> Heroku</kbd>,<kbd> Vercel</kbd>,
                      <kbd> javascript</kbd>,<kbd> CSS</kbd>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; {new Date().getFullYear()}, All Right
                    Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
