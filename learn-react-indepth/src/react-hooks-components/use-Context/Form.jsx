import Panel from "./Panel";
import Button from "./Button";
const Form = () => {
  return (
    <div className="text-5xl text-white">
      I am an example of USE-CONTEXT
      <Panel mode="dark">
        <Button>Sign Up</Button>
        <Button>Login </Button>
      </Panel>
    </div>
  );
};

export default Form;
