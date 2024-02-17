import Main from "./Main";
import ThemeSwitcher from "./ThemeSwitcher";
import Topbar from "./Topbar";

export default function Home() {
  return (
    <div className="">
      <Topbar />
      <div className="px-4">
        <Main />
      </div>
      
      <ThemeSwitcher />
    </div>
  );
}
