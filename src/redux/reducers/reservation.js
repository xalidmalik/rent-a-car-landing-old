import {
  CREATE_RESERVATION_FAILED,
  CREATE_RESERVATION_SUCCESS,
  CREATING_RESERVATION
} from "../types";

const INITIAL_STATE_CREATE_RESERVATION = {
  reservationCreateIsLoading: false,
  reservationCreate: null,
  reservationCreateErrorMessage: null
};

const createReservationReducers = (
  state = INITIAL_STATE_CREATE_RESERVATION,
  action
) => {
  switch (action.type) {
    case CREATING_RESERVATION:
      return {
        ...state,
        reservationCreateIsLoading: true,
        reservationCreateErrorMessage: null
      };
    case CREATE_RESERVATION_SUCCESS:
      return {
        ...state,
        reservationCreateIsLoading: false,
        reservationCreate: action.data.reservationCreate
      };
    case CREATE_RESERVATION_FAILED:
      return {
        ...state,
        reservationCreateIsLoading: false,
        reservationCreate: null,
        reservationCreateErrorMessage: action.data.reservationCreateErrorMessage
      };
    default:
      return state;
  }
};

export { createReservationReducers };
