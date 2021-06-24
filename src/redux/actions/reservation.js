import {
  CREATE_RESERVATION_FAILED,
  CREATE_RESERVATION_SUCCESS,
  CREATING_RESERVATION
} from "../types";

import { PublicReservation } from "@routeax/thecaraxapiproxy";
import { AxiosClient } from "@routeax/thecaraxapiproxy/Src/Helper";
import { departmentCode, accessToken } from "../../Helpers/Static";

AxiosClient.defaults.headers.common["accesstoken"] = accessToken;

const postReservation = reservationModel => dispatch => {
  dispatch({ type: CREATING_RESERVATION });

  PublicReservation.createPublicReservation(
    departmentCode,
    reservationModel,
    success => {
      dispatch({
        type: CREATE_RESERVATION_SUCCESS,
        data: { reservationCreate: success }
      });
    },
    error => {
      dispatch({
        type: CREATE_RESERVATION_FAILED,
        data: { reservationCreateErrorMessage: error }
      });
    }
  );
};

export { postReservation };
