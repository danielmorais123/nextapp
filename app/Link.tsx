import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Link({ icon, link }: any) {
  return (
    <div className="flex items-center gap-2 overflow-x-hidden ">
      <FontAwesomeIcon icon={icon} className="text-gray w-4 h-4" />
      <p className="text-xs">{link}</p>
    </div>
  );
}
