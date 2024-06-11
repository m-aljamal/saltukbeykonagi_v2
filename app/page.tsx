import About from "./_components/about";
import Hero from "./_components/hero";
import KnowUs from "./_components/know-us";
import ReversationForm from "./_components/reversation-form";
import RoomDescription from "./_components/room-description";

export default function Home() {
  return (
    <main className="bg-zinc-200">
      <Hero />
      <section>
        <div className="-mt-20  absolute left-0 right-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ">
          <div className="p-4 bg-zinc-100 rounded-md shadow-md">
            <ReversationForm />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-zinc-200">
          <div className="text-white pt-56 sm:pt-24 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ">
            <About />
          </div>
        </div>
      </section>
      <section className="py-8 bg-zinc-200">
        <KnowUs />
      </section>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ">
        <div>
          <RoomDescription />
        </div>
      </section>
    </main>
  );
}
