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
      title: "Did you forgot your password?",
      subTitle: `Insert your email and we will send you a link
       in your email box to reset your password.`,
      body: <Form onNextStep={() => setCurrentStep(1)} />,
    },
    {
      title: "Email was sent",
      subTitle: `Check your email inbox. We sent you an email to edit your password.
       If you didn't received the email, please check your SPAM inbox`,
      body: <EmailSent onNextStep={() => setCurrentStep(2)} />,
    },
    {
      title: "Complete your profile",
      subTitle: "Insert all your information",
      body: <StepTwo />,
    },
  ];

  console.log(currentStep);

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
