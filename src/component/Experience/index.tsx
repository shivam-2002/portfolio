import React from "react";
import StyledExperience from "./styled";

const Experience = () => {
  return (
    <StyledExperience>
      <div className="box-1" id="experience">
        <dl>
          <div className="trans">
            <dt className="company-name">Vatic AI</dt>
            <i className="role">
              Junior Full Stack Developer | December 2023 - Present
            </i>
            <dd>
              <ul className="trans">
                <li>
                  Developed and Maintained web applications using React JS,
                  Python FastAPI, MySQL, Git and GitHub.
                </li>
                <li>
                  Collaborated with cross-functional teams to ensure smooth
                  project delivery.
                </li>
                <li>Contributed to code optimization and bug fixing.</li>
              </ul>
            </dd>
          </div>

          <div className="trans">
            <dt className="company-name">JungleWorks</dt>
            <i className="role">
              Associate Software Development Engineer | October 2023 - December
              2023
            </i>
            <dd>
              <ul>
                <li>
                  Enhanced the Mappr team’s website functionality using angular
                  and NodeJS.
                </li>
                <li>
                  Worked closely with designers and product managers to
                  translate requirements into code.
                </li>
              </ul>
            </dd>
          </div>

          <div className="trans">
            <dt className="company-name">Hummingbird Web Solutions</dt>
            <i className="role">
              Associate Software Development Engineer | August 2023 - October
              2023
            </i>
            <dd>
              <ul>
                <li>
                  Worked as a Magento developer, contributed in building and
                  maintaining e-commerce websites.
                </li>
              </ul>
            </dd>
          </div>

          <div className="trans">
            <dt className="company-name">Amazon</dt>
            <i className="role">
              Software Development Engineer Intern | January 2023 - June 2023
            </i>
            <dd>
              <ul>
                <li>
                  Collaborated with the Kindle team on projects related to
                  Kindle Page Number for personal documents and publish end
                  reading location of eBooks.
                </li>
                <li>
                  Utilised Java, Kotlin, Groovy, Unit Test (JUnit5), Integration
                  Test, AWS and Git.
                </li>
                <li>
                  Gained valuable experience in a fast-paced, high-tech
                  environment.
                </li>
              </ul>
            </dd>
          </div>

          <div className="trans">
            <dt className="company-name">ViewZen Labs Pvt. Ltd.</dt>
            <i className="role">
              Software Development Engineer Intern | September 2022 - Jan 2023
            </i>
            <dd>
              <ul>
                <li>
                  Contributed to the development of the Data Form Builder
                  project using Angular, NodeJS, Git and GitHub
                </li>
                <li>
                  Demonstrated strong problem-solving skills and ability to work
                  independently.
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </StyledExperience>
  );
};

export default Experience;
