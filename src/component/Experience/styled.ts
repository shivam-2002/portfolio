import styled from "styled-components";

const StyledExperience = styled.div`
  .box-1 {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 5px;
    margin: 0 5%;
    scroll-margin-top: 100px;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
  }

  .text,
  li {
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;
  }

  dl {
    display: block;
    margin-block-start: 0.3em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
  }

  dd {
    display: block;
    margin-inline-start: 20px;
    unicode-bidi: isolate;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 0.5em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 10px;
    unicode-bidi: isolate;
  }

  .company-name {
    font-size: 15px;
    font-weight: 500;
  }

  .role {
    font-family: Italic;
    font-weight: 500;
    font-size: 15px;
  }

  html {
    scroll-behavior: smooth;
  }

  .video-container {
    position: relative;
    width: 100%; /* Adjust the width as needed */
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
    overflow: hidden;
    background-color: black;
    border-radius: 15px;
    margin-top: 20px;
  }

  .responsive-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Cover the container while maintaining aspect ratio */
  }

  .trans {
    transition: transform 0.3s ease;
  }

  .trans:hover {
    transform: scale(1.01);
  }

  .trans11 {
    transition: transform 0.3s ease;
  }

  .trans11:hover {
    transform: scale(1.1);
  }

  a {
    text-decoration: none;
    color: #000;
    transition: transform 0.3s ease;
  }

  a:hover {
    transform: scale(1.1);
    color: grey;
  }

  a.clicked {
    font-weight: 600;
  }
`;

export default StyledExperience;
