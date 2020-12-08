import React from "react";
import "./ListEmployesBirthday.css";

function ListEmployesBirthday({ employes = [] }) {
  const objMonthes = {
    January: [],
    Fabruary: [],
    March: [],
    April: [],
    May: [],
    June: [],
    July: [],
    August: [],
    September: [],
    October: [],
    November: [],
    December: [],
  };
  const arrMonthes = Object.keys(objMonthes);
  const checkedEmployes = [];
  for (let i = 0; i < employes.length; i++) {
    if (employes[i].checked) checkedEmployes.push(employes[i]);
  }

  const getEmployesInMonth = (chekedEmployes, month) => {
    let list = [];
    if (checkedEmployes.length > 0) {
      for (let i = 0; i < chekedEmployes.length; i++) {
        if (new Date(Date.parse(checkedEmployes[i].dob)).getMonth() === month)
          list.push(checkedEmployes[i]);
      }
    }
    return list;
  };

  //console.log( checkedEmployes);

  const listMonthes = arrMonthes.map((month, ind) => {
   // console.log(getEmployesInMonth(checkedEmployes, ind));
    let names;
    if (getEmployesInMonth(checkedEmployes, ind).length > 0) {
      names = getEmployesInMonth(checkedEmployes, ind).map((item) => (
        <li key={item.id + item.name} className="employes">
          {item.firstName+ '  '+ item.lastName}
        </li>
      ));
    } else names =  ["no  employees selected"];
    return (
      <div key={month} className="month_wrapper">
        <div className="month_name">{month}</div>
        <div>{names}</div>
      </div>
    );
  });

  return <>{listMonthes}</>;
}
export default ListEmployesBirthday;
