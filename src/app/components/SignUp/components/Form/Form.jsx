import Button from "./components/Button";
import Field from "./components/Field";
import LoginLink from "./components/LoginLink";

const Form = () => (
  //           水平内边距125px，垂直居中     
  <form className="px-[125px] my-auto">
    <div className="mb-16">
      <h1 className="font-black text-[40px]">Create Your Account</h1>
      {/* // 文字颜色灰色700， 上边距12px */}
      <p className="text-sm text-gray-700 mt-3">Join CareerMate AI and start your smart career journey</p>
    </div>

    <p>Form</p>
    <div className="space-y-6">
      <Field label="Full Name" placeholder="Your Full Name" />
      <Field label="Email Address" placeholder="Your Email Address" />
      <Field label="Password" placeholder="Create Your Password" />
    </div>

    <div className="mt-10 ">
      <Button>Create Account</Button>
      <LoginLink />
    </div>

  </form>
);

export default Form;