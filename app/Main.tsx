import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "./Link";
import {
  faCircle,
  faLink,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Main() {
  return (
    <div className="py-10 text-white flex flex-col gap-5">
      <div className="flex items-center gap-4">
        {" "}
        <img
          src="https://avatars.githubusercontent.com/u/72794515?v=4"
          alt=""
          className="w-24 h-24 rounded-full"
        />
        <div>
          <p className=" text-xl">Nikema</p>
          <p className="text-gray">danielmorais123</p>
        </div>
      </div>
      <div className="">
        <p className="text-sm">
          Founder of @PopSchools. Artist, maker, storyteller. Host of the Our
          Voices Podcast by PopSchools
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Link icon={faLink} link="https://nikemaprophet.com" />
        <Link icon={faXTwitter} link="@NikemaCodes" />
        <Link icon={faLink} link="https://staging.bsky.app/profile/nikema.me" />
        <div className="flex items-center gap-2">
          {" "}
          <a
            className="flex items-center gap-1 text-xs text-gray group hover:text-blue-500 transition"
            href="#"
          >
            <FontAwesomeIcon icon={faUserGroup} className=" w-4 h-4" />
            <span className="text-white group-hover:text-blue-500">292</span>
            <p>followers</p>
          </a>{" "}
          <FontAwesomeIcon icon={faCircle} className="w-1 h-1" />
          <a
            className="flex items-center gap-1 text-xs text-gray group hover:text-blue-500 transition"
            href="#"
          >
            <span className="text-white group-hover:text-blue-500">121</span>
            <p>following</p>
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-button text-sm w-full p-1 rounded-md border border-zinc-700 ">
          Follow
        </button>
        <button className="bg-button text-sm w-full p-1 rounded-md border border-zinc-700 flex items-center gap-1.5 justify-center  ">
          <FontAwesomeIcon icon={faHeart} className="text-rose-400 w-4 h-4" />
          Sponsor
        </button>
      </div>
      <hr className="border-zinc-800" />
    </div>
  );
}
