import React from "react";
import StyledAbout from "./styled";
import videoFile from "assets/video2.webp";
import growthImg from "assets/growth.webp";
import abc from "assets/abc.webp";
import boy from "assets/boy.gif";
import boy1 from "assets/boy1.gif";
import coding from "assets/coding.gif";

const About = () => {
  return (
    <StyledAbout>
      <div className="box-1" id="about">
        {/* <div className="title">About</div> */}
        <div className="img1-container">
          <img src={coding} alt="" className="img1" />
        </div>
        {/* <div className="img-container">
          <img src={growthImg} className="img" />
          <img src={boy} className="img" />
          <img src={boy1} className="img2" />
        </div> */}
        <div className="text trans">
          Highly motivated and results-driven Software Developer with a strong
          foundation in building and maintaining web applications. Proficient in
          ReactJS, Python FastAPI, Angular, NodeJS, SQL, and a variety of other
          cutting-edge technologies. Demonstrated ability to effectively
          collaborate in team environments and deliver high-quality solutions.
          Passionate about leveraging technology to solve complex problems and
          continuously eager to learn and grow in the dynamic field of software
          development.
          <br />I hold a Bachelor of Technology (B.Tech) in Computer Science and
          Engineering from Lovely Professional University, completed in 2023. My
          academic background provided me with a solid understanding of software
          engineering principles and hands-on experience through various
          projects and coursework, complementing my industry experience.
        </div>
        <div className="img1-container">
          <img src={abc} alt="" className="img1" />
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
