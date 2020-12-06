import React from "react";
import Employe from "../Employe";

const ListEmployes = ({ employes = [], isLoading, isError }) => {
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
          <ul className="employes-ul">
            {employes.map((employe, index) => (
              <Employe key={employe.id} employe={employe} />
            ))}
          </ul>
        )}
      </div>
    );
};
export default ListEmployes;
