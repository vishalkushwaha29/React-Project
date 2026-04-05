import { useState } from "react";
import { Trash } from "lucide-react";

const App = () => {

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({title, note});

    setTask(copyTask);
    

    setTitle('');
    setNote('');
  }

  return (
    <div className="h-full min-h-screen lg:flex bg-black text-white p-10">
      <form
        className="flex flex-col w-full gap-5 lg:mr-10 mb-10"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <div>
          <h2 className="font-semibold">Notes Title</h2>
          {/* Heading Input */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="p-4 mt-2 border-2 rounded h-10 w-full outline-none"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <h2 className="font-semibold">Notes Detail</h2>
          {/* For Detail */}
          <textarea
            placeholder="Write Details..."
            className="p-4 mt-2 border-2 rounded outline-none w-full"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
        </div>
        <button className="bg-blue-400 active:bg-blue-900 outline-none p-2 w-full hover:cursor-pointer hover:bg-blue-700 text-black font-semibold rounded-2xl">
          Add Note
        </button>
      </form>
      <div className=" p-7 h-screen lg:w-full lg:border-l-2 overflow-y-auto" id="para">
        <h1 className="text-4xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {task.map((elem,idx) => {

            return (
              <div
                className="h-52 relative w-42 rounded-2xl text-black bg-center text-balance overflow-y-auto p-2 bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]"
                id="para"
                key={idx}
              >
                <div className="flex justify-between mt-5">
                  <h3 className="font-semibold text-center border-b-2 mb-2">
                    {elem.title}
                  </h3>
                  <button>
                    <Trash />
                  </button>
                </div>
                <p className="text-xs font-semibold">{elem.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;