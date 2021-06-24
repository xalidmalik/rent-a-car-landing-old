import React from "react";
import PageLayout from "../Component/Layout/PageLayout";
import { ContactDatas } from "../Helpers/Static";
import ContactItems from "../Component/Contact/ContactItems";

const Contact = () => {
  return (
    <PageLayout>
      {ContactDatas.map((i, index) => {
        return <ContactItems Data={i} key={index} Index={index} />;
      })}
    </PageLayout>
  );
};

export default Contact;
