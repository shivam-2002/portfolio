import React, { useEffect, useRef, useState } from "react";
import StyledHome from "./styled";
import profilePic from "assets/profile_pic.png";
import Tree from "component/Tree";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "component/About";
import Experience from "component/Experience";
import Project from "component/Project";
import Skill from "component/Skill";
import Certification from "component/Certification";

const Home = () => {
  const [activeId, setActiveId] = useState<string>("about");
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/" + activeId);
  }, [activeId, navigate]);
  return (
    <StyledHome>
      <div className="main-cont">
        <div className="container">
          <div className="left">
            <div className="profile-pic-cont">
              <img src={profilePic} alt="Profile Pic" className="profile-pic" />
            </div>
            <div className="name">Shivam Kumar</div>
            <div className="title-box">
              <div>
                SDE@VaticAI | Ex - Assocatiate Software Developemnt
                Engineer@JungleWorks | Former - Associate Software Development
                Engineer@Hummingbird Web Solutions | SDE Intern@Amazon | SDE
                Intern@ViewZen Labs Pvt. Ltd.
              </div>
            </div>
            <div>
              <Tree />
            </div>
          </div>
          <div className="right">
            <div className="header">
              <div
                onClick={() => setActiveId("about")}
                className={activeId === "about" ? "clicked" : " nav"}
              >
                About
              </div>
              <div
                onClick={() => setActiveId("experience")}
                className={activeId === "experience" ? "clicked" : " nav"}
              >
                Experience
              </div>
              <div
                onClick={() => setActiveId("project")}
                className={activeId === "project" ? "clicked" : " nav"}
              >
                Projects
              </div>
              <div
                onClick={() => setActiveId("skill")}
                className={activeId === "skill" ? "clicked" : " nav"}
              >
                Skills
              </div>
              <div
                onClick={() => setActiveId("certification")}
                className={activeId === "certification" ? "clicked" : " nav"}
              >
                Certification
              </div>
            </div>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/project" element={<Project />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/certification" element={<Certification />} />
            </Routes>
          </div>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
