import React from "react";
import PropTypes from "prop-types";

const Header = ({ companyName = "Summit LLC" }) => {
  return (
    <div style={{ color: "white", backgroundColor: "#52B6E8" }}>
      <h1>{companyName}</h1>
    </div>
  );
};

Header.propTypes = {
  companyName: PropTypes.string
};

export default Header;
