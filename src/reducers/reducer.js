import {
  READ_EMPLOYES_REQUEST,
  READ_EMPLOYES_FAILURE,
  READ_EMPLOYES_SUCCESS,
  CHANGE_EMPLOYE_REQUEST,
  CHANGE_EMPLOYE_FAILURE,
  CHANGE_EMPLOYE_SUCCESS,
} from "../types/actionsTypes.js";

const initialState = {
  employes: [],
  isLoading: false,
  isError: false,
};

const infoEmployes = (state = initialState, action) => {
  switch (action.type) {
    case READ_EMPLOYES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case READ_EMPLOYES_SUCCESS:
      return {
        ...state,
        employes: action.payload,
        isLoading: false,
        isError: false,
      };
    case READ_EMPLOYES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case CHANGE_EMPLOYE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case CHANGE_EMPLOYE_SUCCESS:
      return {
        ...state,
        employes: action.payload,
        isLoading: true,
        isError: false,
      };
    case CHANGE_EMPLOYE_FAILURE:
      return {
        ...state,
        isLoading: true,
        isError: true,
      };

    default:
      return state;
  }
};
export default infoEmployes;
