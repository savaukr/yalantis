import React from "react";

const Employe = ({ employe }) => {
  return (
    <li>
      <span>{employe.firstName}</span>
      <span>{employe.lastName}</span>
    </li>
  );
};
export default Employe;
