import {
  READ_EMPLOYES_REQUEST,
  READ_EMPLOYES_FAILURE,
  READ_EMPLOYES_SUCCESS
} from "../types/actionsTypes.js";

const initialState = {
  employes: [],
  isLoading: false,
  isError: false
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

    default:
      return state;
  }
};
export default infoEmployes;
