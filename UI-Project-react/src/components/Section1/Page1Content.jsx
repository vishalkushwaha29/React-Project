import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = (props) => {
  return (
    <div className="pb-10 pt-6 px-15 gap-10 flex items-center h-[85vh]">
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content