import React from "react";
import AuthWrapper from "../Layout/AuthWrapper";
import EmailSent from "../shared/EmailSent";
import Cover from "./components/Cover";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

function index() {
  const [currentStep, setCurrentStep] = React.useState(0);

  const steps = [
    {
      title: "Create your workspace",
      subTitle:
        "Coraly is the place to manage your works process from the same place",
      body: <Form onNextStep={() => setCurrentStep(1)} />,
    },
    {
      title: "Your workspace is ready",
      subTitle: "We sent you a confermation email.",
      body: <EmailSent onNextStep={() => setCurrentStep(2)} />,
    },
    {
      title: "Complete your profile",
      subTitle: "Insert all your information",
      body: <StepTwo />,
    },
  ];

  return (
    <AuthWrapper
      cover={<Cover />}
      title={steps[currentStep].title}
      subTitle={steps[currentStep].subTitle}
    >
      {steps[currentStep].body}
    </AuthWrapper>
  );
}

export default index;
