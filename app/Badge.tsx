import React from "react";
import { twMerge } from "tailwind-merge";

export default function Badge({ name, classes }: any) {
  return (
    <p
      className={twMerge(
        "text-gray text-xs border border-gray w-fit py-0.5 px-2 rounded-2xl",
        classes
      )}
    >
      {name}
    </p>
  );
}
