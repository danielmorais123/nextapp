export default function Package({ desc, name, svg }: any) {
  return (
    <div className="border border-[#30363D] p-6 w-full rounded-md flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {svg}
        <p className="text-xl">{name}</p>
      </div>
      <p className="text-gray text-xs leading-5 tracking-wide">{desc} </p>
      <a
        href=""
        className="bg-button text-xs w-fit  py-1 px-3 rounded-md border border-zinc-700 "
      >
        Learn More
      </a>
    </div>
  );
}
