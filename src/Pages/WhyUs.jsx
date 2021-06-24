import React from "react";
import InfoWhyUs from "../Component/WhyUs/InfoWhyUs";
import { WhyUsDatas } from "../Helpers/Static";
import PageLayout from "../Component/Layout/PageLayout";

const WhyUs = () => {
  return (
    <PageLayout>
      {WhyUsDatas.map((i, index) => {
        return <InfoWhyUs Data={i} Index={index} key={index} />;
      })}
    </PageLayout>
  );
};

export default WhyUs;
