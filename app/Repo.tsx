import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "./Badge";
import { faCaretDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Repo({ repo }: any) {

  console.log()
  return (
    <div className="py-8 text-gray flex justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <a href={repo?.html_url} className="text-blue-500 hover:underline max-w-[300px] overflow-x-hidden">
            {repo.name}
          </a>
          <Badge name={repo.private ? "Private" : "Public"} />
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faCircle}
              className={twMerge("w-2 h-2", repo?.language?.color)}
            />
            <p className="text-xs max-w-[300px] overflow-x-hidden">{repo?.language}</p>
          </div>
          <div>
            <p className="text-xs">Update on {repo?.updated_at}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-button text-xs w-full flex items-center gap-3 py-1 px-3 rounded-l-md border border-zinc-700 ">
         <FontAwesomeIcon icon={faStar} className="w-3 h-3" /> Star
        </button>
        <button className="bg-button text-xs w-full border-l-0  flex items-center gap-3 py-1.5 px-3 rounded-r-md border border-zinc-700 ">
         <FontAwesomeIcon icon={faCaretDown} className="w-3 h-3" /> 
        </button>
      </div>
    </div>
  );
}
