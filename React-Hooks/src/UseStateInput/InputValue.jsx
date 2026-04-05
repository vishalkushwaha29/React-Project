import { useState } from "react"


const InputValue = () => {
    const [title, setTitle] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form is Submitted by " , title);
        setTitle('');
    } 

  return (
    <div className="p-10 mt-10 mr-10 h-[50vh] w-[60%] bg-gray-600 rounded-2xl text-center">
      <h1 className="text-4xl font-semibold">
        This is Input Value Handling by UseState
      </h1>
      <div className="mt-10">
        <form onSubmit={(e) => {
            submitHandler(e);
        }}>
          <input
            type="text"
            name="1"
            placeholder="Enter your name"
            className="bg-amber-200 rounded-xs w-3xs h-10 p-5"
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
            }}
          />
          <button
            className="px-5 py-2 m-5 bg-blue-500 rounded-full font-semibold hover:bg-blue-700 hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputValue