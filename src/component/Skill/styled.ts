import styled from "styled-components";

const StyledSkill = styled.div`
.box-1 {
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    // grid-template-row: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 70vh;
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
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }

  dt {
    font-weight: 500;
    font-size: 15px;
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

`;

export default StyledSkill;
