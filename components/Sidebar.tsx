import {
  ClipboardMinus,
  Github,
  Home,
  Kanban,
  MapPin,
  MessageSquareCode,
} from "lucide-react";
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  const links = [
    {
      title: "Home",
      icon: <Home className="w-4" />,
      href: "/",
    },

    {
      title: "Github",
      icon: <Github className="w-4" />,
      href: "https://github.com/awahabt",
    },
    {
      title: "Experience",
      icon: <ClipboardMinus className="w-4" />,
      href: "/experience",
    },
    {
      title: "Projects",
      icon: <Kanban className="w-4" />,
      href: "/project",
    },
    {
      title: "Contact",
      icon: <MessageSquareCode className="w-4" />,
      href: "/contact",
    },
  ];
  return (
    <div className="max-w-[350px] flex flex-col gap-4  ">
      <div className="border dark:border-white border-black rounded-xl p-5 flex flex-col gap-10 ">
        

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
          {links.map((items, id) => (
            <Link href={items.href} key={id}>
              <div className="flex justify-center gap-2 border dark:border-white border-black py-1  rounded hover:bg-black hover:text-white dark:hover:bg-gray-900 transition-all shadow-sm shadow-white-100">
                {items.icon}
                {items.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
