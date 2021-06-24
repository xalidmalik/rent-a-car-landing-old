import React, { Component } from "react";
import { withFormik, Form, Field, Formik } from "formik";
import * as yup from "yup"; // for everything
import InputWrapper from "../Inputs/InputWrapper";
import { postCustomer } from "../../../redux/actions/customer";

const Inputs = ({ values, errors, touched }) => (
  <Form id="CustomerForm">
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
            <small className="form-text text-muted pl-1">{errors.name}</small>
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
        <small className="form-text text-muted pl-1">{errors.email}</small>
      )}
    </InputWrapper>
    <InputWrapper title="Doğum Tarihi">
      <Field
        type="birthDate"
        name="birthDate"
        placeholder="birthDate"
        className="w-100 form-control input-inset"
      />
      {touched.birthDate && errors.birthDate && (
        <small className="form-text text-muted pl-1">{errors.birthDate}</small>
      )}
    </InputWrapper>
    <button className="btn btn-primary w-100 mt-3" style={{ height: "3.5rem" }}>
      Rezervasyon Yap
    </button>
    {/* <button>Submit</button> */}
  </Form>
);

const CustomerForm = withFormik({
  mapPropsToValues({ email, name, surname, tc, phoneNumber, birthDate }) {
    return {
      name: name || "",
      surname: surname || "",
      tc: tc || "",
      phoneNumber: phoneNumber || "",
      email: email || "",
      birthDate: birthDate || ""
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required("İsim girmeniz gerekiyor"),
    surname: yup.string().required("Soyisim girmeniz gerekiyor"),
    tc: yup.number().required("Kimlik numarasi"),
    phoneNumber: yup.number().required("Telefon Numarasi"),
    email: yup
      .string()
      .email("Lütfen geçerli bir eposta giriniz")
      .required("Eposta girmeniz gerekiyor"),
    birthDate: yup.date()
  }),
  handleSubmit(values) {
    this.props.returnValues(values);
  }
})(Inputs);

export default CustomerForm;
