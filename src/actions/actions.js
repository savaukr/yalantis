import {
  READ_EMPLOYES_REQUEST,
  READ_EMPLOYES_FAILURE,
  READ_EMPLOYES_SUCCESS,
  CHANGE_EMPLOYE_REQUEST,
  CHANGE_EMPLOYE_FAILURE,
  CHANGE_EMPLOYE_SUCCESS,
} from "../types/actionsTypes.js";

import axios from "axios";

//read Employes
export const readJsonActionRequest = () => ({ type: READ_EMPLOYES_REQUEST });
export const readJsonActionFailure = () => ({ type: READ_EMPLOYES_FAILURE });
export const readJsonActionSuccess = (data) => ({
  type: READ_EMPLOYES_SUCCESS,
  payload: data,
});

export const readJson = (dataLocalStorage=[]) => (dispatch) => {
  dispatch(readJsonActionRequest());
  //console.log(JSON.parse(localStorage.getItem("employes")));
/*
  if (dataLocalStorage.length !== 0) {
      dispatch(
        readJsonActionSuccess(JSON.parse(localStorage.getItem("employes")))
      );
    }
  else*/
    axios
      .get(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
      .then((response) =>
        dispatch(
          readJsonActionSuccess(
            response.data
              .sort((a, b) => {
                if (a.lastName > b.lastName) return 1;
                if (a.lastName < b.lastName) return -1;
                else return 0;
              })
              .map((item) => {
                item.checked = false;
                return item;
              })
          )
        )
      )
      .catch((error) => dispatch(readJsonActionFailure()));
};

//change Employe
export const changeEmployeActionRequest = () => ({
  type: CHANGE_EMPLOYE_REQUEST,
});
export const changeEmployeActionFailure = () => ({
  type: CHANGE_EMPLOYE_FAILURE,
});
export const changeEmployeActionSuccess = (employes) => ({
  type: CHANGE_EMPLOYE_SUCCESS,
  payload: employes,
});

export const changeCheckedDispatchAction = (employes, id) => (dispatch) => {
  try {
    dispatch(changeEmployeActionRequest());
    let [...copyEmployes] = employes;
    //console.log('is array=' + Array.isArray(copyEmployes));
    let index = copyEmployes.findIndex((item) => item.id === id);
    copyEmployes[index].checked = !copyEmployes[index].checked;
    dispatch(changeEmployeActionSuccess(copyEmployes));
  } catch {
    dispatch(changeEmployeActionFailure());
  }
};
