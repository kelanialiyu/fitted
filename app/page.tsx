import SignIn from "./ui/components/sign-in";
export default function Home() {
  return (

    <main className="flex min-h-screen relative flex-col items-center content-center justify-center gap-4 md:gap-6 lg:gap-8 lg:p-2">
      <h1 className="text-4xl font-bold">Fitted Task</h1>
      <div className="flex min-h-[8rem] max-w-72 w-[90%] border-dashed border-[2px] border-[#5464] rounded-md justify-center items-center p-6">
        <SignIn />
      </div>
    </main>
  );
}
