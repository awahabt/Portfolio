import Contact from "@/components/Contact";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Cover } from "@/components/ui/cover";
import { sendEmail } from "@/lib/mail";
import {  Mail, MapPin } from "lucide-react";

export default async function ContactPage() {
  const send = async () => {
    "use server";
    await sendEmail({
      to: "contact.abdulwahabtahir@gmail.com",
      name: "Wahab",
      subject: "Test Mail",
      body: `<h1>Hello World</h1>`,
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col flex-wrap items-center  justify-center ">
      <ThemeSwitcher value={"absolute right-8 top-5"} />
      {/* <Navbar value={"sm:hidden"} padding={"mt-3"}/> */}

      <div className="col-span-2 min-h-[200px] py-8 ">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Join me to build remarkable projects at
          <br /> <Cover>Lightning speed</Cover>
        </h1>
      </div>
      <div className=" col-span-2 flex flex-wrap p-5 mx-3 sm:mx-10 rounded-xl  justify-center gap-10 border">
        {" "}
        <div className=" lg:min-w-[600px] md:min-w-[400px]">
          <Contact />
        </div>
        <div className="flex flex-col dark:bg-gray-900  dark:border-white bg-gray-100 justify-center rounded-xl p-10 montserrat gap-10 ">
          {/* Globe */}
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold max-w-[300px]">What is your plan ? Call me</h1>
            <p className="max-w-[300px] ">
              You can get my contact information here and if you like, you can
              see the urls of my pages on social networks from the bottom of the
              page and find me there.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="flex gap-2 items-center text-xl"><MapPin/>Islamabad | <span className="text-green-700 font-semibold">Pakistan</span></p>
            <p className="flex gap-2 items-start text-md hover:underline underline-offset-2"><Mail/>contact.abdulwahabtahir<br/>@gmail.com</p>

          </div>
        </div>
      </div>

      {/* <form>
                <button formAction={send} className="p-4 bg-black text-white">Test</button>
            </form> */}
    </div>
  );
}
