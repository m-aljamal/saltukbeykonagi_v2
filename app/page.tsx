import Hero from "./_components/hero";
import ReversationForm from "./_components/reversation-form";

export default function Home() {
  return (
    <main>
      <Hero />
      <section>
        <div className=" -mt-20  absolute left-0 right-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ">
          <div className="p-4 bg-zinc-200 rounded-md">
            <ReversationForm />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-zinc-900">
          <div className="text-white pt-24 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ">
            text
          </div>
        </div>
      </section>
    </main>
  );
}
