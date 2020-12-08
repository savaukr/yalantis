import React from "react";

const Employe = ({ employes, employe, changeChecked }) => {
  return (
    <p onChange={changeChecked(employes, employe.id)}>
      <label htmlFor={employe.id}>
        {employe.firstName + "  " + employe.lastName}
        <input
          type="checkbox"
          id={employe.id}
          name={employe.lastName}
          defaultChecked={employe.checked}
        />
      </label>
    </p>
  );
};
export default Employe;
