import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="flex flex-col items-center text-gray text-xs  pb-4">
      <div className=" flex flex-wrap justify-center gap-2 max-w-[450px] md:max-w-none mx-auto">
        <a href="#" className="hover:text-blue-500">Terms</a>
        <a href="#" className="hover:text-blue-500">Privacy</a>
        <a href="#" className="hover:text-blue-500">Security</a>
        <a href="#" className="hover:text-blue-500">Status</a>
        <a href="#" className="hover:text-blue-500">Docs</a>
        <a href="#" className="hover:text-blue-500">Contact</a>
        <a href="#" className="hover:text-blue-500">Manage cookies</a>
        <a href="#" className="hover:text-blue-500">Do not share my personal information</a>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <FontAwesomeIcon icon={faGithub} className="w-6 h-6 " />
        <p>© 2024 GitHub, Inc.</p>
      </div>
    </div>
  );
}
