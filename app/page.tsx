import { API_GITHUB_USERS } from "@/urls";
import Footer from "./Footer";
import Main from "./Main";
import Topbar from "./Topbar";

export default async function Home() {
  const json = await fetch(`${API_GITHUB_USERS}danielmorais123`);
  const user = await json.json();

  console.log(user)
  return (
    <div className="">
      <Topbar user={user} />
      <div className="px-4">
        <Main />
        <Footer />
      </div>
    </div>
  );
}
