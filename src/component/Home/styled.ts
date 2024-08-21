import styled from "styled-components";

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  //   background: #e4a689;
  background: #f5d7b4;
  overflow-y: auto;

  .main-cont {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .container {
    display: flex;
    flex-direction: row;
    // flex-wrap: wrap;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }

  .header {
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 15px;
    position: sticky;
    top: 0px;
    background: #f0d0b0;
    z-index: 10;
  }

  .left {
    min-width: 300px;
    width: 30%;
    background: #e4a689;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .profile-pic-cont {
    width: 100%;
    margin: 10px;
    display: flex;
    justify-content: center;
  }

  .profile-pic {
    width: 90%;
    object-fit: contain;
    border-radius: 5%;
    box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
  }

  .name {
    font-size: 30px;
    font-weight: 600;
  }

  .title-box {
    width: 90%;
    font-size: 14px;
    font-weight: 500;
  }

  .right {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    heihgt: 100%;
    overflow-y: auto;
    padding-bottom: 20px;
    // padding-top: 20px;
    position: relative;
  }

  .right-body {
    // padding-top: 20px;
  }

  .clicked {
    font-weight: 600;
  }

  .nav {
    font-size: 16px;
    cursor: pointer;
  }

  .nav:hover {
    transform: scale(1.1);
    color: grey;
  }
  .icon {
    width: 25px;
    height: 25px;
  }

  .contact-ctn {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  }

  .contact-ctn > div {
  display: flex;
  align-items: center;
  gap: 5px;

  word-wrap: break-word; /* Breaks long words to fit inside the container */
  overflow-wrap: break-word; /* Provides better support for all browsers */
  word-break: break-word;
  }
`;

export default StyledHome;
