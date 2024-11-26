import { ClipboardMinus, Github, Home, Kanban, MapPin, MessageSquareCode } from "lucide-react";
import React from "react";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Link from "next/link";

const Sidebar = () => {
  const links = [
    {
    
      title: "Home",
      icon: (
        <Home className="w-4"/>
      ),
      href: "/",
    },

    {
      title: "Github",
      icon: (
        <Github className="w-4"/>
      ),
      href: "https://github.com/awahabt",
    },
    {
      title: "Experience",
      icon: (
        <ClipboardMinus className="w-4"/>
      ),
      href: "/experience",
    },
    {
      title: "Projects",
      icon: (
        <Kanban className="w-4"/>
      ),
      href: "/project",
    },
    {
      title: "Contact",
      icon: (
        <MessageSquareCode className="w-4"/>
      ),
      href: "/contact",
    },
  ];
  return (
    <div className="max-w-[350px] montserrat flex flex-col gap-4 z-10">
      <div className="bor rounded-xl p-5 flex flex-col gap-10 ">
        <h3 className="text-4xl  font-bold">Abdul Wahab Tahir</h3>

        <div className="flex flex-col  gap-1">
          <p className="hover:underline">contact.abdulwahabtahir@gmail.com</p>
          <div className="flex items-center gap-1">
            <MapPin className="w-5" />{" "}
            <p>
              Islamabad |{" "}
              <span className="text-green-700 font-bold">Pakistan</span>
            </p>
          </div>
        </div>
        <div className=" rounded flex gap-4 justify-center p-4 text-center flex-col">
            {links.map((items, id)=>(
                <Link href={items.href} key={id}><div className="flex justify-center gap-2 bor py-1  rounded hover:bg-gray-800 transition-all shadow-sm shadow-white-100" >{items.icon}{items.title}</div></Link>
            ))}
          
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
