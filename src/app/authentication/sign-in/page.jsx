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
          //onChange={(event) => onChange("email", event)}
          //换一种写法,调用useForm.jsx里 const onChange= ("email") => (event) => ...
          onChange={onChange("email")}
          label="Email" placeholder="Your Email"
          error={isSubmitted && error.email}
        />
        <Field
          value={data.password}
          onChange={onChange("password")}
          label="Password" type="password" placeholder="Your Password"
          error={isSubmitted && error.password}
        />

        <Button
<<<<<<< Updated upstream
          onClick={onSubmit(async () => {
            console.log(data);
            try {
              await axios.post(
                `${process.env.NEXT_PUBLIC_AUTH_API}/v1/auth/login`, data);//本地backend
            } catch (error) {
              console.log(error);
              setServerError(error);
              return;
            }
            console.log("登陆成功");
            router.push("/dashboard");
          })
          }
        >
          Log In
        </Button>
=======
          onClick={(event) => {
            onSubmit(async () => {
              console.log(data);
              try {
                await axios.post(
                  `${process.env.NEXT_PUBLIC_AUTH_API}/v1/auth/login`, data);//本地backend
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
>>>>>>> Stashed changes
        <Hint
          message="Don't have an account? "
          action={{ text: "Sign Up", href: "/authentication/sign-up" }}
        />
      </form>

    </>
  )
};
export default SignInPage;