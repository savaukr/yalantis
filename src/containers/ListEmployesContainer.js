import React from "react";
import { connect } from "react-redux";
import ListEmployes from "../components/ListEmployes";
import { changeCheckedDispatchAction } from '../actions/actions.js';


const ListEmployesContainer = (props) => {
  return <ListEmployes {...props} />;
};

const mapStateToProps = (state) => {
  return {
    employes: state.infoEmployes.employes,
    isLoading: state.infoEmployes.isLoading,
    isError: state.infoEmployes.isError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      changeChecked: (employes, id) => () => {
        dispatch(changeCheckedDispatchAction(employes, id))
      }      
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(
  ListEmployesContainer
);
