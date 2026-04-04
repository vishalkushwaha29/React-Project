const Counter = (props) => {
  return (
    <div className="bg-green-950 w-30 h-30 rounded-2xl mt-8">
      <h1 className="font-semibold text-8xl text-green-200 p-1 text-center">
        {props.count}
      </h1>
    </div>
  );
}

export default Counter