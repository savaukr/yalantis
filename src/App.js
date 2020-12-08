import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

import ListEmployesContainer from "./containers/ListEmployesContainer";
import { readJson } from "./actions/actions.js";

const App = (props) => {
  const dispatch = useDispatch();
  let dataLocalStorage = JSON.parse(localStorage.getItem('employes'));
  console.log(dataLocalStorage);
  useEffect(() =>  dispatch(readJson(dataLocalStorage)))
  return (
    <div className="App">
      <ListEmployesContainer />
    </div>
  );
};

export default App;
