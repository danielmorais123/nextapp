"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function Tab({ tab }: any) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const tabParm = params.get("tab");

  console.log(tabParm);
  return (
    <button
      className={twMerge(
        "text-sm gap-2 flex items-center px-1 pb-3  leading-7 text-[13px]",
        (tabParm === tab?.name || (tab.name === "Overview" && !tabParm)) &&
          "border-b-2 border-[#F78166]"
      )}
      onClick={() => {
        const current = new URLSearchParams(params);
        current.set("tab", tab.name);
        router.replace(`${pathname}?${current.toString()}`);
      }}
    >
      <FontAwesomeIcon icon={tab.icon} className="text-gray" />
      {tab.name}
      {tab.notifications ? <span className="text-xs bg-[#F78166] rounded-lg px-1.5 py-0.5">{tab.notifications}</span> : null}
    </button>
  );
}
