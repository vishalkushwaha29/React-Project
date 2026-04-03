import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full bg-yellow-500 w-80 overflow-hidden shrink-0 rounded-4xl relative">
      <img
        className="object-cover h-full w-full "
        src={props.img}
        alt="Image"
      />
      <RightCardContent id={props.id} tag={props.tag} content={props.content} />
    </div>
  );
}

export default RightCard