import Hooks from "./UseStateHook/Hooks";
import InputValue from "./UseStateInput/InputValue";

const App = () => {
  return (
    <div className="bg-black w-full h-screen flex justify-between p-10">
        <Hooks /> <br />
        <InputValue />
    </div>
  );
};

export default App;
