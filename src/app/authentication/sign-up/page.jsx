"use client";
import { useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
//import { isEmpty, isStrongPassword } from "validator";
//import isEmail from "validator/lib/isEmail";
//import getError from "./utils/getError";
import axios from "axios";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
//import RegisteredSuccess from "./components/RegisteredSuccess";
import ServerError from "./components/ServerError";
import getEmailError from "./utils/getEmailError";
import getFullNameError from "./utils/getFullNameError";
import getPasswordError from "./utils/getPasswordError";
import Hint from "../components/Hint";
import useForm from "../hooks/useForm";

const SignUpPage = () => {
  const { onChange, data, onSubmit, isSubmitted, error, } = useForm({
    fields: ["fullName", "email", "password"],
    validation: {
      fullName: getFullNameError,
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
          title={<div className="font-black">CREATE YOUR ACCOUNT</div>}
          subTitle="JOIN CareerMat AI and Start your smart Career journey"
        />

        <Field value={data.fullName}
          onChange={(event) => onChange("fullName", event)}
          label="Full Name" placeholder="Your Full Name"
          error={isSubmitted && error.fullName}
        />

        <Field value={data.email}
          onChange={(event) => onChange("email", event)}
          label="Email" placeholder="Your Email"
          error={isSubmitted && error.email}
        />
        <Field value={data.password} type="password"
          onChange={(event) => onChange("password", event)}
          label="Password" placeholder="Create Your Password"
          error={isSubmitted && error.password}
        />

        <Button
          onClick={async (event) => {
            onSubmit(async () => {
              console.log(data);
              try {
                await axios.post(
                  // "http://localhost:8000/api/auth/sign-up",
                  `${process.env.NEXT_PUBLIC_AUTH_API}/v1/auth/register`, data);
              } catch (error) {
                setServerError(error);
                return;
              }

              //setIsRegistered(true);
              console.log("注册成功");

              router.push("/dashboard");
            }, event);
          }}
        >
          Create Account
        </Button>
        <Hint
          message="Already have an account?"
          action={{ text: "Lon In", href: "/authentication/sign-in" }}
        />

      </form >
      {serverError && <ServerError status={serverError.response?.status} />}
      {/* {serverError && <ServerError status={error.response?.status} />} */}
      {/* {isRegistered && <RegisteredSuccess />} */}
    </>
  );
};

export default SignUpPage;