import StyledProject from "./styled";
import videoFile from "assets/final_code_editor.mov";
import videoFile1 from "assets/ecommerce.mov";
import chatDemo from "assets/chat-demo.mov";

const Project = () => {
  return (
    <StyledProject>
      <div className="box-1" id="project">
        <dl>
          <div className="trans">
            <dt>
              <a
                href="https://message-shivam.netlify.app/"
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
                href="https://665202725e77840008eb1c80--code-editor-shivam.netlify.app/"
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
