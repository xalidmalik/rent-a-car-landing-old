import {
  FETCHING_AVAILABLE_CAR_LIST,
  FETCH_AVAILABLE_CAR_LIST_FAILED,
  FETCH_AVAILABLE_CAR_LIST_SUCCESS
} from "../types";

const INITIAL_STATE_AVAILABLECAR_LIST = {
  availableCarIsLoading: false,
  availableCar: null,
  availableCarErrorMessage: null
};

const fetchAvailableCarsReducers = (
  state = INITIAL_STATE_AVAILABLECAR_LIST,
  action
) => {
  switch (action.type) {
    case FETCHING_AVAILABLE_CAR_LIST:
      return {
        ...state,
        availableCarIsLoading: true,
        availableCarErrorMessage: null
      };
    case FETCH_AVAILABLE_CAR_LIST_SUCCESS:
      return {
        ...state,
        availableCarIsLoading: false,
        availableCar: action.data.availableCar
      };
    case FETCH_AVAILABLE_CAR_LIST_FAILED:
      return {
        ...state,
        availableCarIsLoading: false,
        availableCar: null,
        availableCarErrorMessage: action.data.errorMessage
      };
    default:
      return state;
  }
};

export { fetchAvailableCarsReducers };
