const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
      <h2 className="h-12 w-12 rounded-full bg-white flex justify-center items-center font-bold text-2xl">{props.id+1}</h2>
      <div className="flex flex-col justify-between w-full">
        <p className="text-lg leading-relaxed text-white mb-8 w-[90%]">{props.content}</p>
        <div className="flex justify-between">
          <button className="bg-blue-600 font-semibold text-white rounded-full px-6 py-2">{props.tag}</button>
          <button className="bg-blue-600 font-semibold text-white rounded-full px-3 py-2">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent;