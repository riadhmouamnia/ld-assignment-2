import React from "react";
import AuthWrapper from "../Layout/AuthWrapper";
import EmailSent from "../shared/EmailSent";
import Cover from "./components/Cover";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

function index() {
  const [emailSent, setEmailSent] = React.useState<boolean>(false);
  const [stepTwo, setStepTwo] = React.useState<boolean>(false);
  return (
    <AuthWrapper
      cover={<Cover />}
      title={
        !emailSent && stepTwo
          ? "Complete your profile"
          : emailSent
          ? "Your workspace is ready"
          : "Create your workspace"
      }
      subTitle={
        !emailSent && stepTwo
          ? "Insert all your information"
          : emailSent
          ? "We sent you a confermation email."
          : "Coraly is the place to manage your works process from the same place"
      }
      askUserToTakeAction={
        !emailSent && !stepTwo ? "Do you have an account?" : ""
      }
      actionLink={!emailSent && !stepTwo ? "Signin" : ""}
      link="/login"
    >
      {!emailSent && !stepTwo && <Form />}
      {emailSent && <EmailSent />}
      {stepTwo && <StepTwo />}
    </AuthWrapper>
  );
}

export default index;
