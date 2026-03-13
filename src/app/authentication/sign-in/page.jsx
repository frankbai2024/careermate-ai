"use client";
import axios from "axios";
import Button from "../components/Button";
import Field from "../components/Field";
import Header from "../components/Header";
import Hint from "../components/Hint";
import useForm from "../hooks/useForm";
import getEmailError from "./utils/getEmailError";
import getPasswordError from "./utils/getPasswordError";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ServerError from "./components/ServerError";

const SignInPage = () => {
  const { onChange, data, onSubmit, isSubmitted, error } = useForm({
    fields: ["email", "password"],
    validation: {
      email: getEmailError,
      password: getPasswordError,
    }
  })

  const [serverError, setServerError] = useState();
  const router = useRouter();

  return (
    <>
      <form>
        <Header
          title="HELLO Welcome Back"
          subTitle="LOG IN to continue your AI Journey"
        />

        {serverError && <ServerError status={serverError.response?.status} />}

        <Field
          value={data.email}
          onChange={(event) => onChange("email", event)}
          label="Email" placeholder="Your Email"
          error={isSubmitted && error.email}
        />
        <Field
          value={data.password}
          onChange={(event) => onChange("password", event)}
          label="Password" type="password" placeholder="Your Password"
          error={isSubmitted && error.password}
        />

        <Button
          onClick={(event) => {
            onSubmit(async () => {
              console.log(data);
              try {
                await axios.post(
                  "http://localhost:3000/v1/auth/login", data);
              } catch (error) {
                console.log(error);
                setServerError(error);
                return;
              }
              console.log("登陆成功");
              router.push("/dashboard");
            }, event);
          }}
        >Log In</Button>
        <Hint
          message="Don't have an account? "
          action={{ text: "Sign Up", href: "/authentication/sign-up" }}
        />
      </form>

    </>
  )
};
export default SignInPage;