import { IoCloudDoneOutline } from "react-icons/io5";
type SuccessProps = {
  visible: boolean;
  showSuccess?: boolean;
  showFailure?: boolean;
};
export default function SuccessfulPop({
  visible,
  showSuccess,
  showFailure,
}: SuccessProps) {
  return (
    <div
      className={` ${
        visible ? "visible right-[-300px]" : "invisible right-[-1000px]"
      }  ${
        showSuccess ? "bg-green-600/90" : showFailure ? "bg-red-600/90" : ""
      } absolute p-5 text-2xl flex gap-2 rounded-lg top-[-80px] items-center transition-all duration-500`}
    >
      <h1>
        {" "}
        {showSuccess
          ? "Product Added Successfully"
          : showFailure
          ? "Error Occured. Please try again"
          : null}
      </h1>
      <IoCloudDoneOutline size={20} />
    </div>
  );
}
