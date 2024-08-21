import React from "react";
import StyledFooter from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        &copy; {new Date().getFullYear()}{" "}
          Shivam Kumar
        . All rights reserved.
      </div>
    </StyledFooter>
  );
};

export default Footer;
