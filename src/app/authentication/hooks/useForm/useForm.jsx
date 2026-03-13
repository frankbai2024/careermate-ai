"use client";
import { useState } from "react";

const useForm = ({ fields, validation }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState(() => {
    const initialData = {};
    fields.forEach((field) => {
      initialData[field] = "";
    });

    return initialData;
  });//
  // -----------------------------------------------------------
  // const onChange = (field, event) => {
  //   setData((previousData) => ({
  //     ...previousData,
  //     [field]: event.target.value,
  //   })
  //   );
  // };
  //换成high-order function 写法：比如field是email,调用onChange={onChange("email")}返回event方法
  const onChange = (field) => (event) => {
    setData((previousData) => ({
      ...previousData,
      [field]: event.target.value,
    })
    );
  }
  //接受参数调用，并返回一个函数
  //实现保存参数的作用 - 闭包
  // const onChange = (field) => {
  //   const fn = (event) => {
  //     setData((previousData) => ({
  //       ...previousData,
  //       [field]: event.target.value,
  //     })
  //     );
  //   };
  //   return fn;
  // }
  // ------------------------------------------------------------
  const error = {};
  Object.keys(validation).forEach((field) => {
    const result = validation[field](data[field]);

    if (!result) {
      return;
    }

    error[field] = result;
  });

  //const onSubmit = (handleSubmit, event) => { //handleSubmit是传进来的方法，对应try/catch那一段。
  //改成HOF high order function
  const onSubmit = (handleSubmit) => (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    const hasError = Object.keys(error).length > 0;
    if (hasError) {
      return;
    }
    handleSubmit();
  };

  return {
    onChange,
    data,
    onSubmit,
    isSubmitted,
    error,
  };
};

export default useForm;