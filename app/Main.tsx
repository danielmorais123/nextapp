"use client";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "./Link";
import {
  faCircle,
  faHotel,
  faLink,
  faLocation,
  faLocationDot,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Achivements from "./Achivements";
import Packages from "./Tabs/Packages";
import { useSearchParams } from "next/navigation";
import Overview from "./Tabs/Overview";
import Repository from "./Tabs/Repository";

export default function Main() {
  const params = useSearchParams();

  const tabParm = params.get("tab");
  return (
    <div className="py-10 text-white flex flex-col md:flex-row 2xl:max-w-[1250px] mx-auto gap-5">
      <div className="flex flex-col gap-5 md:max-w-[250px] lg:max-w-[280px] xl:max-w-[300px]">
        <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
          {" "}
          <img
            src="https://avatars.githubusercontent.com/u/3941856?v=4"
            alt=""
            className="w-24 md:w-full h-24 md:h-fit object-contain rounded-full"
          />
          <div className="">
            <p className=" text-xl">Nikema</p>
            <p className="text-gray">prophen </p>
          </div>
        </div>
        <div className="md:flex md:items-center md:gap-2 hidden">
          <button className="bg-button text-sm w-full p-1 rounded-md border border-zinc-700 ">
            Follow
          </button>
          <button className="bg-button text-sm w-full p-1 rounded-md border border-zinc-700 flex items-center gap-1.5 justify-center  ">
            <FontAwesomeIcon icon={faHeart} className="text-rose-400 w-4 h-4" />
            Sponsor
          </button>
        </div>
        <div className="">
          <p className="text-sm leading-7">
            Founder of @PopSchools. Artist, maker, storyteller. Host of the Our
            Voices Podcast by PopSchools
          </p>
        </div>
        <div className="flex flex-col gap-3  ">
          <div className="gap-3 md:flex-col md:flex hidden">
            <Link icon={faHotel} link="PopSchools" />
            <Link icon={faLocationDot} link="Sacramento, CA" />
          </div>
          <Link icon={faLink} link="https://nikemaprophet.com" />
          <Link icon={faXTwitter} link="@NikemaCodes" />
          <Link
            icon={faLink}
            link="https://staging.bsky.app/profile/nikema.me"
          />
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
        <div className="flex md:hidden items-center gap-2">
          <button className="bg-button text-sm w-full p-1 rounded-md border border-zinc-700 ">
            Follow
          </button>
          <button className="bg-button text-sm w-full p-1 rounded-md border border-zinc-700 flex items-center gap-1.5 justify-center  ">
            <FontAwesomeIcon icon={faHeart} className="text-rose-400 w-4 h-4" />
            Sponsor
          </button>
        </div>
        <hr className="border-zinc-800" />
        <Achivements />
      </div>
      <div className="flex w-full">
        {tabParm === "Overview" || !tabParm ? <Overview /> : null}
        {tabParm === "Repositories" ? <Repository /> : null}
        {tabParm === "Projects" ? <Packages /> : null}
        {tabParm === "Packages" ? <Packages /> : null}
      </div>
    </div>
  );
}
