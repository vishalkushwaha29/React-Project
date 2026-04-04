import { useState } from "react";
import Button from "./Button";
import Counter from "./Counter";

const Hooks = () => {
  const [count, setCount] = useState(0);

  const min = 0;
  const resetCount = () => {
    setCount(min);
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };
  return (
    <div className="p-8 h-[50vh] w-[35%] bg-gray-600 rounded-2xl absolute mt-10 text-center">
      <h1 className="text-4xl font-semibold">This is UseState Hook</h1>

      <Button
        increase={increaseCount}
        decrease={decreaseCount}
        reset={resetCount}
      />

      <div className="flex justify-center w-full h-[30vh]">
        <Counter count={count} />
      </div>
    </div>
  );
};

export default Hooks;
