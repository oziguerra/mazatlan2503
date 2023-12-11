import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <div className="h-20 md:h-24 w-auto bg-secondary flex justify-center">
      <a href="https://github.com/oziguerra" target="_blank" className="m-6 md:m-8 text-primary"><IoLogoGithub className="w-auto h-9"/></a>  
      <a href="https://www.linkedin.com/in/ozielguerra/" target="_blank" className="m-6 md:m-8 text-primary"><FaLinkedinIn className="w-auto h-9" /></a>
    </div>
  );
}
