import { IoCloudDoneOutline } from "react-icons/io5";
type SuccessProps = {
  visible: boolean;
  showSuccess?: boolean;
  showFailure?: boolean;
  title?: string | null;
};
export default function SuccessfulPop({
  visible,
  showSuccess,
  showFailure,
  title,
}: SuccessProps) {
  return (
    <div
      className={` ${
        visible ? "translate-x-[120%]" : "translate-x-0 opacity-0"
      }  ${
        showSuccess ? "bg-green-600/90" : showFailure ? "bg-red-600/90" : ""
      } absolute p-5 text-2xl flex gap-2 rounded-lg top-[-80px] items-center transition-all duration-500`}
    >
      <h1> {title}</h1>
      <IoCloudDoneOutline size={20} />
    </div>
  );
}
