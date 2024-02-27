import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

export default function ButtonWithIcon({ icon, btnClasses, otherIcon ,setOpen}: any) {
  return (
    <button
    onClick={setOpen}
      className={twMerge(
        "border-[#333940] hover:bg-[#848d97]/20 border rounded-md w-8 h-8",
        btnClasses
      )}
    >
      <FontAwesomeIcon icon={icon} className="w-4 h-4 text-gray" />
      {otherIcon ? (
        <FontAwesomeIcon icon={otherIcon} className="w-4 h-3 text-gray" />
      ) : null}
    </button>
  );
}
