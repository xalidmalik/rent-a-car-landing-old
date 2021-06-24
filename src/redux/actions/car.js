import {
  FETCHING_AVAILABLE_CAR_LIST,
  FETCH_AVAILABLE_CAR_LIST_FAILED,
  FETCH_AVAILABLE_CAR_LIST_SUCCESS
} from "../types";

import { AxiosClient } from "@routeax/thecaraxapiproxy/Src/Helper";
import { PublicCar } from "@routeax/thecaraxapiproxy";
import { departmentCode, accessToken } from "../../Helpers/Static";

AxiosClient.defaults.headers.common["accesstoken"] = accessToken;

const fetchAvailableCars = (beginDateTime, endDateTime) => dispatch => {
  dispatch({ type: FETCHING_AVAILABLE_CAR_LIST });

  PublicCar.getPublicAvailableCar(
    departmentCode,
    beginDateTime,
    endDateTime,
    success => {
      dispatch({
        type: FETCH_AVAILABLE_CAR_LIST_SUCCESS,
        data: { availableCar: success }
      });
    },
    error => {
      dispatch({
        type: FETCH_AVAILABLE_CAR_LIST_FAILED,
        data: { availableCarErrorMessage: error }
      });
    }
  );
};

export { fetchAvailableCars };
