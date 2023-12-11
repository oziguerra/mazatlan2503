import { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Navbar() {
  let Links = [
    { name: "Work experience", link: "#workExperience" },
    { name: "About me", link: "#aboutMe" },
    { name: "Tools I have used", link: "#tools" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-secondary py-4 md:px-10 px-7 ">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer">
          <Link href="#top">
            <svg
              className="w-9 stroke-black hover:fill-accent hover:stroke-accent duration-500"
              version="1.0"
              viewBox="0 0 375 375"
            >
              <defs>
                <clipPath id="a">
                  <path d="M156.555 279.262h44.976v44.972h-44.976Zm0 0" />
                </clipPath>
                <clipPath id="b">
                  <path d="M179.043 279.262c-12.418 0-22.488 10.066-22.488 22.484 0 12.422 10.07 22.488 22.488 22.488s22.488-10.066 22.488-22.488c0-12.418-10.07-22.484-22.488-22.484Zm0 0" />
                </clipPath>
                <clipPath id="c">
                  <path d="M223.656 279.262h44.977v44.972h-44.977Zm0 0" />
                </clipPath>
                <clipPath id="d">
                  <path d="M246.145 279.262c-12.418 0-22.489 10.066-22.489 22.484 0 12.422 10.07 22.488 22.489 22.488 12.421 0 22.488-10.066 22.488-22.488 0-12.418-10.067-22.484-22.488-22.484Zm0 0" />
                </clipPath>
              </defs>
              <path d="M187.5 375C83.91 375 0 290.508 0 187.5S83.91 0 187.5 0 375 83.91 375 187.5 290.508 375 187.5 375Zm0-363.426c-97.223 0-175.926 78.703-175.926 175.926 0 97.223 78.703 175.926 175.926 175.926 97.223 0 175.926-78.703 175.926-175.926 0-97.223-79.281-175.926-175.926-175.926Zm0 0" />
              <path
                className="stroke-[15px] stroke-inherit"
                
                
                d="m109.129 324.23 159.5-263.777"
              />
              <g clip-path="url(#a)">
                <g clip-path="url(#b)">
                  <path d="M156.555 279.262h44.976v44.972h-44.976Zm0 0" />
                </g>
              </g>
              <g clip-path="url(#c)">
                <g clip-path="url(#d)">
                  <path d="M223.656 279.262h44.977v44.972h-44.977Zm0 0" />
                </g>
              </g>
            </svg>
          </Link>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-secondary md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-linear ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.link} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                href={link.link}
                className="text-primary hover:text-accent duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/*<button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>*/}
        </ul>
        {/* button */}
      </div>
    </div>
  );
}
