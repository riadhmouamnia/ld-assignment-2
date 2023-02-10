import React from "react";
import AuthWrapper from "../Layout/AuthWrapper";
import Cover from "./components/Cover";
import Form from "./components/Form";

function index() {
  return (
    <AuthWrapper
      cover={<Cover />}
      title="Login"
      subTitle="Thanks to come back on coraly"
      askUserToTakeAction="Don't your have an account?"
      actionLink="Sign up now"
    >
      <Form />
    </AuthWrapper>
  );
}

export default index;
