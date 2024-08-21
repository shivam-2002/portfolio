import StyledProject from "./styled";
import videoFile from "assets/polyglot-updated.mov";
import videoFile1 from "assets/ecommerce.mov";
import chatDemo from "assets/chat-demo.mov";

import m1 from "assets/android/1.png";
import m2 from "assets/android/2.png";
import m3 from "assets/android/3.png";
import m4 from "assets/android/4.png";
import m5 from "assets/android/5.png";
import m6 from "assets/android/6.png";
import m7 from "assets/android/7.png";
import m8 from "assets/android/8.png";
import m9 from "assets/android/9.png";


const Project = () => {
  return (
    <StyledProject>
      <div className="box-1" id="project">
        <dl>
          <div className="trans">
            <dt>
              <a
                href="https://polyglot.shivamtech.xyz/"
                target="_blank"
                rel="noreferrer"
              >
                Online Compiler
              </a>
            </dt>
            <dd>
              <ul>
                <li>
                  Developed a website that allows users to write and execute
                  code in C, C++, Python, and Java language.
                </li>
                <li>
                  Implemented functionality to convert code between these
                  languages while switching.
                </li>
                <li>Auto suggestion is enabled.</li>
                <li>
                  Utilised React, CodeMirror, NodeJS, and Compilex for the tech
                  stack and Google Gemini for AI tools.
                </li>
                <li>Hosted on Render and Netlify.</li>
                <br></br>
                <div className="video-container trans11">
                  <video className="responsive-video" muted autoPlay loop>
                    <source src={videoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ul>
            </dd>
          </div>

          <div className="trans">
            <dt>
              <a
                href="https://www.amazon.com/dp/B0DDMYNDHG/ref=apps_sf_sta"
                target="_blank"
                rel="noreferrer"
              >
                Online Compiler (Android APP)
              </a>
            </dt>
            <dd>
              <ul>
                <li>
                Build an android app using Flutter, integrated with the same backend as the web-based
Online Compiler. The app provides similar features like writing code, getting output,
suggestions, and code conversion across different programming languages.
                </li>
                <li>
                Used Flutter, FastAPI, and Google Gemini.
                </li>
                <li>Hosted on amazon app store.</li>
                <br></br>
                <div className="img-ctn">
                  <img src={m1} />
                  <img src={m2} />
                  <img src={m3} />
                  <img src={m4} />
                  <img src={m5} />
                  <img src={m6} />
                  <img src={m7} />
                  <img src={m8} />
                  <img src={m9} />
                </div>
              </ul>
            </dd>
          </div>

          <div className="trans">
            <dt>
              <a
                href="https://chat.shivamtech.xyz/"
                target="_blank"
                rel="noreferrer"
              >
                Real-Time Chat Application
              </a>
            </dt>
            <dd>
              <ul>
                <li>
                  Developed a real-time chat application: Built using FastAPI
                  for the backend and React for the frontend, deployed on AWS
                  and Netlify.
                </li>
                <li>
                  Implemented WebSocket for real-time communication: Ensured
                  instant messaging capabilities, enhancing user experience with
                  seamless interactions.
                </li>
                <li>
                  User authentication via email: Integrated secure email-based
                  authentication to enable users to chat with each other.
                </li>
                <li>
                  Deployment and Scalability: Utilized AWS for backend
                  deployment and Netlify for frontend hosting, ensuring
                  scalability and high availability.
                </li>
                <li>
                  Secure Communication: Used self-signed SSL certificates to
                  secure data transmission between clients and the server.
                </li>
                <br></br>
                <div className="video-container1 trans11">
                  <video className="responsive-video" muted autoPlay loop>
                    <source src={chatDemo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ul>
            </dd>
          </div>
          <div className="trans">
            <dt>
              <a
                href="https://demoecommerce-ce0d9.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Ecommerce Website
              </a>
            </dt>
            <dd>
              <ul>
                <li>
                  Developed a responsive website that allows users search
                  products, filter it based on brand and price.
                </li>

                <li>
                  Utilised Angular Java Script framewordk, Tailwind and Angular
                  Meterial for the tech stack.
                </li>
                <li>Hosted on firebase.</li>
                <br></br>
                <div className="video-container trans11">
                  <video className="responsive-video" muted autoPlay loop>
                    <source src={videoFile1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </StyledProject>
  );
};

export default Project;
