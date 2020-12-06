import React from "react";
import { connect } from "react-redux";
import ListEmployes from "../components/ListEmployes";

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

export default connect(mapStateToProps /*, mapDispatchToProps*/)(
  ListEmployesContainer
);
