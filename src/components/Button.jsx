import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Button({ onClick, className, children }) {
  return (
    <button onClick={onClick} className={classNames("button", className)}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
