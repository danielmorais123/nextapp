"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCaretDown,
  faCodePullRequest,
  faComputer,
  faCube,
  faInbox,
  faListCheck,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonWithIcon from "./ButtonWithIcon";
import Tab from "./Tab";
import { faStar, faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import Dialog from "./Dialog";


export default function Topbar({ user }: any) {
  const [open, setOpen] = useState(false);
  const tabs = [
    {
      id: 1,
      name: "Overview",
      icon: faWindowRestore,
    },
    {
      id: 2,
      name: "Repositories",
      icon: faComputer,
    },
    {
      id: 3,
      name: "Projects",
      icon: faListCheck,
      notifications: 33,
    },
    {
      id: 4,
      name: "Packages",
      icon: faCube,
    },
    {
      id: 5,
      name: "Stars",
      icon: faStar,
    },
  ];

  

  return (
    <>
      <Dialog open={open} />{" "}
      <header className="bg-[#010409] pt-6 px-4 text-[#E6EDF3] border-b border-zinc-800">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ButtonWithIcon icon={faBars} setOpen={() => setOpen(!open)} />

            <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
            <a className="text-sm">{user.login}</a>
          </div>
          <div className="flex items-center gap-2.5">
            <ButtonWithIcon icon={faMagnifyingGlass} />
            <ButtonWithIcon
              icon={faPlus}
              otherIcon={faCaretDown}
              btnClasses="w-[54px]  gap-1 flex items-center justify-center"
            />
            <ButtonWithIcon icon={faCodePullRequest} />
            <ButtonWithIcon icon={faInbox} />
            <img
              src={user.avatar_url}
              className="w-8 h-8 rounded-full"
              alt=""
            />
            
          </div>
        </div>
        <nav className="flex items-center gap-3 mt-7">
          {tabs.map((tab) => (
            <Tab key={tab.id} tab={tab} />
          ))}
        </nav>
      </header>
    </>
  );
}
