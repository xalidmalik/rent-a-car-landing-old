import {
  CREATE_CUSTOMER_FAILED,
  CREATE_CUSTOMER_SUCCESS,
  CREATING_CUSTOMER
} from "../types";

const INITIAL_STATE_CREATE = {
  customerCreateIsLoading: false,
  customerCreateResponse: null,
  errorMessage: null
};

const customerCreateReducers = (state = INITIAL_STATE_CREATE, action) => {
  switch (action.type) {
    case CREATING_CUSTOMER:
      return { ...state, customerCreateIsLoading: true, errorMessage: null };
    case CREATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customerCreateIsLoading: false,
        customerCreateResponse: action.data.response
      };
    case CREATE_CUSTOMER_FAILED:
      return {
        ...state,
        customerCreateIsLoading: false,
        errorMessage: action.data.errorMessage
      };
    default:
      return state;
  }
};

export { customerCreateReducers };
