import {
  READ_EMPLOYES_REQUEST,
  READ_EMPLOYES_FAILURE,
  READ_EMPLOYES_SUCCESS
} from  "../types/actionsTypes.js";

import axios from "axios";

export const readJsonActionRequest = () => ({ type: READ_EMPLOYES_REQUEST });
export const readJsonActionFailure = () => ({ type: READ_EMPLOYES_FAILURE });
export const readJsonActionSuccess = (data) => ({
  type: READ_EMPLOYES_SUCCESS,
  payload: data,
});

export const readJson = () =>  (dispatch) => {
  dispatch(readJsonActionRequest());
  axios
    .get(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
    .then((response) => dispatch(readJsonActionSuccess(response.data))  )
    .catch((error) => dispatch(readJsonActionFailure()));
};

