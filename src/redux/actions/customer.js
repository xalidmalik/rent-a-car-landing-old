import {
  CREATE_CUSTOMER_FAILED,
  CREATE_CUSTOMER_SUCCESS,
  CREATING_CUSTOMER
} from "../types";

import { PublicCustomer } from "@routeax/thecaraxapiproxy";
import { AxiosClient } from "@routeax/thecaraxapiproxy/Src/Helper";
import { departmentCode, accessToken } from "../../Helpers/Static";

AxiosClient.defaults.headers.common["accesstoken"] = accessToken;

const postCustomer = customerModel => dispatch => {
  dispatch({ type: CREATING_CUSTOMER });
  PublicCustomer.createPublicCustomer(
    departmentCode,
    customerModel,
    success => {
      dispatch({ type: CREATE_CUSTOMER_SUCCESS, data: { response: success } });
    },
    error => {
      dispatch({ type: CREATE_CUSTOMER_FAILED, data: { errorMessage: error } });
    }
  );
};

export { postCustomer };
