import React, { useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import "./App.css";

import ListEmployesContainer from "./containers/ListEmployesContainer";
import { readJson } from './actions/actions.js';

const  App= (props) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch( readJson() ));
  return (
    <div className="App">
      <ListEmployesContainer />
    </div>
  );
}

export default App;
