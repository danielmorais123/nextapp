import OverviewProj from "./OverviewProj";

export default function Overview() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        <p className="text-sm tracking-wide">Pinned</p>
        <div className="flex flex-col gap-4 mt-4 w-full md:grid md:grid-cols-2">
          <OverviewProj />
          <OverviewProj />
          <OverviewProj />
          <OverviewProj />
        </div>
      </div>
    </div>
  );
}
