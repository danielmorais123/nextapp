import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faComputer,
  faCircle,
  faCodeBranch,
 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OverviewProj() {
  return (
    <div className="border-[#30363D] h-fit text-xs flex flex-col gap-3 text-gray border rounded-md p-5">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faComputer} className="w-4 h-4" />
        <p>spinnarker.io</p>
      </div>
      <p>Forked from spinnaker/spinnaker.io</p>
      <p>spinnaker.io website content</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <FontAwesomeIcon
            icon={faCircle}
            className="w-2 text-orange-500 h-2"
          />
          <p>HTML</p>
        </div>
        <div className="flex items-center gap-1 group cursor-pointer">
          <FontAwesomeIcon icon={faStar} className="group-hover:text-blue-500" />
          <p className="group-hover:text-blue-500">1</p>
        </div>
        <div className="flex items-center gap-1 cursor-pointer group ">
          <FontAwesomeIcon icon={faCodeBranch} className="group-hover:text-blue-500" />
          <p className="group-hover:text-blue-500">2</p>
        </div>
      </div>
    </div>
  );
}
