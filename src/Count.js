import React from "react";
import PropTypes from "prop-types";

const Count = (props) => {
  return (
    <>
      <h2>
        My Name is {props.name}, I am {props.age} years old.
      </h2>
    </>
  );
};
Count.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};
Count.defaultProps = {
  name: "Onkar Kadam",
  age: 31
};
export default Count;
