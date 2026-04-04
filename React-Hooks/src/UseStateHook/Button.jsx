const Button = (props) => {
  return (
    <div className="w-full flex justify-around">
      <button
        className="px-5 py-2 mt-5 bg-blue-500 rounded-full font-semibold hover:bg-blue-700 hover:cursor-pointer"
        onClick={props.increase}
      >
        Increase Count
      </button>
      <button
        className="px-5 py-2 mt-5 bg-blue-500 rounded-full font-semibold hover:bg-blue-700 hover:cursor-pointer"
        onClick={props.decrease}
      >
        Decrease Count
      </button>
      <button 
        className="px-5 py-2 mt-5 bg-blue-500 rounded-full font-semibold hover:bg-blue-700 hover:cursor-pointer"
        onClick={props.reset}
      >
        Reset Count
      </button>
    </div>
  );
}

export default Button