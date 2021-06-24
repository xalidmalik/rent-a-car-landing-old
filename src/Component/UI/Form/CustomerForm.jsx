import React, { Component } from "react";
import { withFormik, Form, Field, Formik } from "formik";
import * as yup from "yup"; // for everything
import InputWrapper from "../Inputs/InputWrapper";
import withRedux from "../../../Hoc/withRedux";
import moment from "moment";
import { AlertSwal } from "../../../Helpers/Alert";
import Swal from "sweetalert2";

const shema = yup.object().shape({
  name: yup.string().required("İsim girmeniz gerekiyor"),
  surname: yup.string().required("Soyisim girmeniz gerekiyor"),
  tc: yup.number().required("Kimlik numarasi"),
  phoneNumber: yup.number().required("Telefon Numarasi"),
  email: yup
    .string()
    .email("Lütfen geçerli bir eposta giriniz")
    .required("Eposta girmeniz gerekiyor"),
  birthDate: yup.date(),
  licenseYear: yup.date()
});

class CustomerForm extends Component {
  componentDidUpdate(prevProps) {
    const {
      customerCreateIsLoading,
      customerCreateResponse,
      errorMessage
    } = this.props;

    if (
      prevProps.customerCreateIsLoading &&
      !customerCreateIsLoading &&
      customerCreateResponse
    ) {
      let reservationModel = {
        CustomerId: customerCreateResponse.Id,
        CarId: this.props.Cars.Id,
        BeginDateTime: localStorage.getItem("startDate"),
        EndDateTime: localStorage.getItem("endDate"),
        Deposit: 0,
        DepartmentCode: "ayazarac",
        CompanyCode: "ayazarac",
        LocationSite: 0,
        IsApproval: true
      };
      this.props.postReservation(reservationModel);
    }

    const {
      reservationCreateIsLoading,
      reservationCreate,
      reservationCreateErrorMessage
    } = this.props;

    if (
      prevProps.reservationCreateIsLoading &&
      !reservationCreateIsLoading &&
      reservationCreate
    ) {
      Swal.fire("Başarılı!", "Rezervasyon kaydınız oluşturuldu en kısa sürede sizinle iletişime geçilecektir", "success");
    }
  }

  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          surname: "",
          tc: "",
          phoneNumber: "",
          email: "",
          birthDate: "",
          licenseYear: ""
        }}
        validationSchema={shema}
        onSubmit={values => {
          let model = {
            Name: values.name,
            Surname: values.surname,
            Gender: 0,
            BirthOfDateTime: values.birthDate,
            Nationality: "Kastamonu",
            Tc: values.tc,
            PassportSerialNumber: "0000000",
            FirstPhone: values.phoneNumber,
            SecondPhone: "Belirtilmedi",
            EMail: values.email || "Belirtilmedi",
            Address: "Belirtilmedi",
            LicenseYear: values.licenseYear,
            SerialNumberOfDrivingLicense: "belirtilmedi",
            IsActive: true,
            IsAdditionalDriver: false,
            InBlackList: false,
            LocationSite: 0,
            Profession: "Belirtilmedi",
            BloodGroup: 0,
            DepartmentCode: "ayazarac",
            CompanyCode: "ayazarac"
          };

          this.props.postCustomer(model);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} id="CustomerForm">
            <div className="form-row">
              <div className="col">
                <InputWrapper title="Ad">
                  <Field
                    type="name"
                    name="name"
                    placeholder="Gerçek isminiz"
                    className="w-100 form-control input-inset"
                  />
                  {touched.name && errors.name && (
                    <small className="form-text text-muted pl-1">
                      {errors.name}
                    </small>
                  )}
                </InputWrapper>
              </div>
              <div className="col">
                <InputWrapper title="Soyad">
                  <Field
                    type="surname"
                    name="surname"
                    placeholder="Gerçek soyadınız"
                    className="w-100 form-control input-inset"
                  />
                  {touched.surname && errors.surname && (
                    <small className="form-text text-muted pl-1">
                      {errors.surname}
                    </small>
                  )}
                </InputWrapper>
              </div>
            </div>
            <InputWrapper title="TC Kiklik Numarası">
              <Field
                type="number"
                name="tc"
                placeholder="TC Kiklik Numarası"
                className="w-100 form-control input-inset"
              />
              {touched.tc && errors.tc && (
                <small className="form-text text-muted pl-1">{errors.tc}</small>
              )}
            </InputWrapper>
            <InputWrapper title="Telefon Numarası">
              <Field
                type="phoneNumber"
                name="phoneNumber"
                placeholder="Telefon Numarası"
                className="w-100 form-control input-inset"
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <small className="form-text text-muted pl-1">
                  {errors.phoneNumber}
                </small>
              )}
            </InputWrapper>

            <InputWrapper title="Email">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-100 form-control input-inset"
              />
              {touched.email && errors.email && (
                <small className="form-text text-muted pl-1">
                  {errors.email}
                </small>
              )}
            </InputWrapper>
            <div className="form-row">
              <div className="col">
                <InputWrapper title="Doğum Tarihi">
                  <Field
                    type="date"
                    name="birthDate"
                    placeholder="Doğum Tarihi"
                    className="w-100 form-control input-inset"
                  />
                  {touched.birthDate && errors.birthDate && (
                    <small className="form-text text-muted pl-1">
                      {errors.birthDate}
                    </small>
                  )}
                </InputWrapper>
              </div>
              <div className="col">
                <InputWrapper title="Ehliyet Alma Tarihi">
                  <Field
                    type="date"
                    name="licenseYear"
                    placeholder="Ehliyet Alma Tarihi"
                    className="w-100 form-control input-inset"
                  />
                  {/* <input type="text" onKeyPress /> */}
                  {touched.licenseYear && errors.licenseYear && (
                    <small className="form-text text-muted pl-1">
                      {errors.licenseYear}
                    </small>
                  )}
                </InputWrapper>
              </div>
            </div>

            <button
              type={"submit"}
              className="btn btn-primary w-100 mt-3"
              style={{ height: "3.5rem" }}
            >
              Rezervasyon Yap
            </button>
            {/* <button>Submit</button> */}
          </form>
        )}
      </Formik>
    );
  }
}

export default withRedux(CustomerForm);
