import React from "react";
import AuthWrapper from "pages/auth/Layout/AuthWrapper";
import EmailSent from "pages/auth/shared/EmailSent";
import Cover from "pages/auth/Reset/components/Cover";
import Form from "pages/auth/Reset/components/Form";
import StepTwo from "pages/auth/Reset/components/StepTwo";

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
      title: "Insert new password",
      subTitle: "Enter your new password to access the platform",
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
