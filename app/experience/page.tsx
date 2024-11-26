import Sidebar from "@/components/Sidebar";

export default function ExperiencePage (){
    return(
        <div className=" w-full  h-full min-h-screen flex  items-start p-10 gap-10 montserrat ">
      <div className="lg:flex sticky hidden ">
        <Sidebar />
      </div>
      <div className="flex flex-1  flex-col bor p-8 gap-10 rounded-xl">
        <p className="text-5xl font-semibold">Experience</p>

        <p>
          Creating seamless digital experiences with React, Next.js, Tailwind
          CSS, TypeScript, and the latest technologies.
        </p>
        <hr />
        <h2 className="text-3xl ">Field Experience</h2>
        
        <hr />
        
      </div>
    </div>
    )
}