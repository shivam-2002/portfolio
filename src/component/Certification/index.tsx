import React from "react";
import StyledCertification from "./styled";
import nptel from "assets/NPTEL_Programming In Java.jpg";
import courseraOS from "assets/os.png";
import courseraML1 from "assets/ml1.png";
import courseraML2 from "assets/ml2.png";
import courseraML3 from "assets/ml3.png";
import python1 from "assets/python.png";
import ptyhon2 from "assets/python2.png";
import algorithm1 from "assets/mathematical_thinking.png";
import algorithm2 from "assets/algorithm.png";
import webDev from "assets/js,html,css.png";
import covid from "assets/covid-19.png";
import ds from "assets/DS.png";
import rpa from "assets/RPA.png";
import ml from "assets/ML.png";
import js from "assets/JS.png";
import iot from "assets/IoT.png";
import math from "assets/math.png";
import kubernets from "assets/kubernets.png";

const Certification = () => {
  return (
    <StyledCertification>
      <div className="box-1" id="project">
        {/* <dl>
          <div className="trans">
            <dt>NPTEL (IIT Kharagpur)</dt>
            <dd>
              <div className="img-container">
                <img src={nptel} className="img" />
              </div>
            </dd>

            <div className="img-container">
              <iframe src={courseraOS} className="img"></iframe>
            </div>
          </div>
        </dl> */}

        <dl>
          <div className="trans">
            <dt>NPTEL (IIT Kharagpur)</dt>
            <dd>
              <ul>
                <li>Programming in Java</li>
                <div className="img-container">
                  <img src={nptel} className="img" />
                </div>
              </ul>
            </dd>
          </div>
          <div className="trans">
            <dt>Coursera</dt>
            <dd>
              <ul>
                <li>Operating System</li>
                <div className="img-container">
                  <img src={courseraOS} className="img" />
                </div>

                <li>Machine Learning</li>
                <div className="img-container">
                  <img src={courseraML1} className="img" />
                </div>
                <div className="img-container">
                  <img src={courseraML2} className="img" />
                </div>
                <div className="img-container">
                  <img src={courseraML3} className="img" />
                </div>

                <li>HTML, CSS, JS</li>
                <div className="img-container">
                  <img src={webDev} className="img" />
                </div>

                <li>Python</li>
                <div className="img-container">
                  <img src={python1} className="img" />
                </div>
                <div className="img-container">
                  <img src={ptyhon2} className="img" />
                </div>

                <li>Algorithm</li>
                <div className="img-container">
                  <img src={algorithm1} className="img" />
                </div>
                <div className="img-container">
                  <img src={algorithm2} className="img" />
                </div>

                <li>Covid-19</li>
                <div className="img-container">
                  <img src={covid} className="img" />
                </div>
              </ul>
            </dd>
          </div>

          <div className="trans">
            <dt>SimpliLearn</dt>
            <dd>
              <ul>
                <li>Data Science</li>
                <div className="img-container">
                  <img src={ds} className="img" />
                </div>

                <li>Robotic Process Automation</li>
                <div className="img-container">
                  <img src={rpa} className="img" />
                </div>

                <li>Machine Learning</li>
                <div className="img-container">
                  <img src={ml} className="img" />
                </div>

                <li>Java Script</li>
                <div className="img-container">
                  <img src={js} className="img" />
                </div>

                <li>Internet of Things</li>
                <div className="img-container">
                  <img src={iot} className="img" />
                </div>

                <li>Math Refresher</li>
                <div className="img-container">
                  <img src={math} className="img" />
                </div>

                <li>Kubernets</li>
                <div className="img-container">
                  <img src={kubernets} className="img" />
                </div>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </StyledCertification>
  );
};

export default Certification;
