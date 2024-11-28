import Contact from "@/components/Contact";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Cover } from "@/components/ui/cover";
import { GlobeDemo } from "@/components/ui/GlobeDemo";
import { sendEmail } from "@/lib/mail";

export default async function ProjectPage() {
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
    <div className="w-screen min-h-screen  bor flex flex-col items-center  justify-center ">
        <ThemeSwitcher value={"absolute right-8 top-5"}/>
      {/* <Navbar value={"sm:hidden"} padding={"mt-3"}/> */}
      <div className=" grid grid-cols-2  relative z-10 justify-around py-10">
        <div className="col-span-2 h-[200px] ">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Join me to build remarkable projects at
            <br /> <Cover>Lightning speed</Cover>
          </h1>
        </div>
        <div className=" border-white-100 border-r-2">
          {/* Globe */}
          <GlobeDemo/>
        </div>
        
        <div className=" w-full ">
          <Contact />
        </div>
      </div>

      {/* <form>
                <button formAction={send} className="p-4 bg-black text-white">Test</button>
            </form> */}
    </div>
  );
}
