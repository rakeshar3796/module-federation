import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node,
};

export function Button(props) {
  const { children } = props;
  return <button>{children}</button>;
}
