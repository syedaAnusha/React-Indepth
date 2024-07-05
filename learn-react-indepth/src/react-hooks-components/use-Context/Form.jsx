import Panel from "./Panel";
import Button from "./Button";
const Form = () => {
  return (
    <div className="text-5xl text-white flex-col justify-center items-center">
      <h1>I am an example of USE-CONTEXT</h1>
      <Panel mode="dark">
        <Button>Sign Up</Button>
        <Button>Login </Button>
      </Panel>
    </div>
  );
};

export default Form;
