import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className=" rounded-4xl h-full w-2/3 p-3 flex flex-nowrap gap-10 overflow-x-auto">
        {props.users.map((elem,idx) => {
            return <RightCard img={elem.img} key={idx} id={idx} tag={elem.tag} content={elem.content} />;
        })}
    </div>
  );
}

export default RightContent;