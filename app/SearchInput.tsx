export default function SearchInput({ value, onChange }: any) {
  return (
    <input
      placeholder="Find a repository..."
      className="border text-sm py-1.5 px-4 border-zinc-700 bg-transparent w-full rounded-md focus:outline outline-2 focus:outline-blue-500"
      value={value}
      onChange={onChange}
    />
  );
}
