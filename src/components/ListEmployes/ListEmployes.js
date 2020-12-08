import React from "react";
import "./listEmployes.css";
import Employe from "../Employe";

const ListEmployes = ({ employes = [], isLoading, isError, changeChecked }) => {
  const arrLetters = [];
  for (let code = 65; code < 91; code++) {
    arrLetters.push(String.fromCodePoint(code));
  }
  const filterEmployes = (letter, employes) => {
    let results = employes.filter((item) => item.lastName[0] === letter);
    const list = results.map((item) => (
      <li key={item.id}>
        <Employe employes={employes} employe={item} changeChecked = {changeChecked} />
      </li>
    ));
    return list;
  };

  if (!employes.length && !isLoading && !isError)
    return <p>Список робітників пустий</p>;
  else
    return (
      <div className="list__container">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Виникла помилка, спробуйте ще.</p>
        ) : (
          <>

            <div className="list__left">
              <div className="list__header">Employees</div>
              {arrLetters.map((letter, index) => {
                const listName = filterEmployes(letter, employes);
                return (
                  <div className={letter + " letter"} key={letter}>
                    {letter}
                    <ul >{listName}</ul>
                  </div>
                );
              })}
            </div>
            <div className="list__right">
              <div className="list__header">Employees birthday</div>
            </div>
          </>
          
        )}
      </div>
    );
};
export default ListEmployes;
