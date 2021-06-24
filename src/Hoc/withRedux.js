import React from "react";
import { connect } from "react-redux";
import { fetchAvailableCars } from "../redux/actions/car";
import { postCustomer } from "../redux/actions/customer";
import { postReservation } from "../redux/actions/reservation";

const withRedux = Wrapped => {
  class withReduxNew extends React.Component {
    render() {
      return <Wrapped {...this.props} ref={ref => (this.componentRef = ref)} />;
    }
  }

  const mapStateToProps = state => {
    const {
      availableCarIsLoading,
      availableCar,
      availableCarErrorMessage
    } = state.availableCar;
    const {
      customerCreateIsLoading,
      customerCreateResponse,
      errorMessage
    } = state.addCustomer;

    const {
      reservationCreateIsLoading,
      reservationCreate,
      reservationCreateErrorMessage
    } = state.addReservation;

    return {
      availableCarIsLoading,
      availableCar,
      availableCarErrorMessage,
      customerCreateIsLoading,
      customerCreateResponse,
      errorMessage,
      reservationCreateIsLoading,
      reservationCreate,
      reservationCreateErrorMessage
    };
  };

  return connect(
    mapStateToProps,
    { fetchAvailableCars, postCustomer, postReservation }
  )(withReduxNew);
};

export default withRedux;
