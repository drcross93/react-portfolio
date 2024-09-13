import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <span>Devontay Cross {currentYear}&copy;</span>
    </footer>
  );
};

export default Footer;
