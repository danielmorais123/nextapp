import { useEffect, useState } from "react";
import Repo from "../Repo";
import SearchFilter from "../SearchFilter";
import SearchInput from "../SearchInput";
import { API_GITHUB_USERS } from "@/urls";

const filters = [
  {
    id: 1,
    name: "Type",
    filters: ["All", "Public", "Private"],
  },
  {
    id: 2,
    name: "Language",
    filters: [
      "All",
      "JavaScript",
      "Ruby",
      "HTML",
      "OCaml",
      "CSS",
      "Kotlin",
      "Shell",
      "Jupiter Notebook",
      "Dockerfile",
      "TypeScript",
    ],
  },
  {
    id: 3,
    name: "Sort",
    filters: ["Last updated", "Name", "Stars"],
  },
];

export default function Repository() {
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const [lang, setLang] = useState("");
  const [sort, setSort] = useState("");
  const [repos, setRepos] = useState([]);
  //const [reposFilter, setReposFilter] = useState([]);
  const reposFilter = filterRepos();
  console.log(reposFilter);
  useEffect(() => {
    fetch(`${API_GITHUB_USERS}danielmorais123/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        // setReposFilter(data);
      });
  }, []);

  console.log(reposFilter);

  // useEffect(() => {
  //   const arr = inputManipulation(repos);
  //   const secArr = typeManipulation(arr);
  //   const thirdArr = langManipulation(secArr);

  //   //  setReposFilter(thirdArr);
  // }, [input, type, lang, sort]);

  function inputManipulation(arr: any) {
    return input === "" || !input
      ? arr
      : arr.filter((e: any) =>
          e.name.toLowerCase().includes(input.toLowerCase())
        );
  }

  function langManipulation(arr: any) {
    return lang === "" || !lang || lang === "All"
      ? arr
      : arr.filter(
          (e: any) => e?.language?.toLowerCase() === lang.toLowerCase()
        );
  }

  function typeManipulation(arr: any) {
    console.log(arr);
    return type === "" || !type || type === "All"
      ? arr
      : arr.filter((e: any) => {
          const isPrivate = type === "Private" ? true : false;
          return e.private === isPrivate;
        });
  }
  function sortManipulation(arr: any) {
    console.log(sort);
    if (!sort) return arr;
    if (sort.toLowerCase() === "last updated") {
      return arr?.sort(
        (a: any, b: any) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
    }
    return arr;
  }

  function filterRepos() {
    const arr = inputManipulation(repos);
    const secArr = typeManipulation(arr);
    const langArr = langManipulation(secArr);
    return sortManipulation(langArr);
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <SearchInput
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
        />
        <div className=" flex gap-2">
          {filters.map((filter) => (
            <SearchFilter
              key={filter.id}
              filter={filter}
              value={
                filter.name === "Type"
                  ? type
                  : filter.name === "Language"
                  ? lang
                  : sort
              }
              setValue={
                filter.name === "Type"
                  ? setType
                  : filter.name === "Language"
                  ? setLang
                  : setSort
              }
            />
          ))}
        </div>
      </div>
      <hr className="mt-3 border-zinc-800" />
      <div>
        {reposFilter?.map((repo: any) => (
          <>
            <Repo key={repo?.id} repo={repo} />
            <hr className="border-zinc-800" />
          </>
        ))}
      </div>
    </div>
  );
}
