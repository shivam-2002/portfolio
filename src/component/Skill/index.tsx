import React from "react";
import StyledSkill from "./styled";

const Skill = () => {
  return (
    <StyledSkill>
      <div className="box-1">
        <dl>
          <div className="trans">
            <dt>Programming Languages</dt>
            <dd>
              <ul>
                <li>C</li>
                <li>C++</li>
                <li>Pythong</li>
                <li>Java</li>
                <li>Kotlin</li>
                <li>Groovy </li>
                <li>Java Script</li>
                <li>Type Script</li>
              </ul>
            </dd>
          </div>
        </dl>

        <dl>
          <div className="trans">
            <dt>Web Developemnt</dt>
            <dd>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java Script</li>
                <li>Type Script</li>
                <li>Angular</li>
                <li>React </li>
                <li>Node JS</li>
                <li>Python Fast API</li>
                <li>SQL</li>
                <li>MySQL</li>
              </ul>
            </dd>
          </div>
        </dl>

        <dl>
          <div className="trans">
            <dt>DBMS</dt>
            <dd>
              <ul>
                <li>SQL</li>
                <li>MySQL</li>
              </ul>
            </dd>
          </div>
        </dl>

        <dl>
          <div className="trans">
            <dt>Tools & Applications</dt>
            <dd>
              <ul>
                <li>VS Code</li>
                <li>IntelliJ</li>
                <li>Dev C++</li>
                <li>Git</li>
                <li>Github</li>
                <li>Postman </li>
                <li>Google Colab</li>
                <li>Jupiter</li>
                <li>Google Console</li>
              </ul>
            </dd>
          </div>
        </dl>

        <dl>
          <div className="trans">
            <dt>Operating System</dt>
            <dd>
              <ul>
                <li>Window</li>
                <li>Linux (Ubuntu)</li>
                <li>Mac OS</li>
              </ul>
            </dd>
          </div>
        </dl>

        <dl>
          <div className="trans">
            <dt>Others</dt>
            <dd>
              <ul>
                <li>Object Oriented Programming</li>
                <li>ML</li>
                <li>AWS</li>
                <li>Analytical Skill</li>
                <li>Operating System</li>
                <li>Computer Network </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </StyledSkill>
  );
};

export default Skill;
