import Form from "./components/Form";
import Showcase from "./components/ShowCase";

const SignUp = () => (
  //   自己本身左右分布， 里面的元素（direct children）也左右分布
  //min-h-dvh: minimum height is device viewport height
  <div className="flex *:flex-1 p-8 min-h-dvh">
    <Form />
    <Showcase />
  </div>
);

export default SignUp;