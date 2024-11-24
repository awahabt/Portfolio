import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative w-full dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full max-w-8xl">
        <Hero />
      </div>
    </main>
  );
}