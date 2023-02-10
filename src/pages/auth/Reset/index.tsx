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
          ? "Email was sent"
          : "Did you forgot your password?"
      }
      subTitle={
        !emailSent && stepTwo
          ? "Insert all your information"
          : emailSent
          ? "Check your email inbox. We sent you an email to edit your password. If you didn't received the email, please check your SPAM inbox"
          : "Insert your email and we will send you a link in your email box to reset your password."
      }
      askUserToTakeAction={!emailSent && !stepTwo ? "Go back to" : ""}
      actionLink={!emailSent && !stepTwo ? "Login" : ""}
      link="/login"
    >
      {!emailSent && !stepTwo && <Form />}
      {emailSent && <EmailSent />}
      {stepTwo && <StepTwo />}
    </AuthWrapper>
  );
}

export default index;
