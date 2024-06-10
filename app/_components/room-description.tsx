import { cn } from "@/lib/utils";
import Image from "next/image";

export default function RoomDescription() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Standart Odamız
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Her odamızda bulunan merkezi klima sistemi,82 ekran LED TV, oturma
            grubu, kasa, fön makinesi, mini bar ve ultra konforlu yataklarımızla
            sizlere hizmet veriyoruz.
          </p>
        </div>
        <div className="mx-auto mt-8  flex flex-col  sm:space-y-0 md:grid max-w-2xl auto-rows-fr grid-cols-1 gap-8  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <ImageCard src="/images/12.webp" text="Lobi" />
          <ImageCard src="/images/13.webp" text="Toplantı Salonu" />
          <ImageCard src="/images/14.webp" text="Restoran" />
          <ImageCard src="/images/15.webp" text="Bahçe" />
          <ImageCard src="/images/11.webp" text="Oda" span="col-span-2" />
        </div>
      </div>
    </div>
  );
}

function ImageCard({
  src,
  text,
  span,
}: {
  src: string;
  text: string;
  span?: string;
}) {
  return (
    <div
      className={cn(
        "relative isolate shadow-md overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80",
        span
      )}
    >
      <Image
        src={src}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        layout="fill"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

      <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
        {text}
      </h3>
    </div>
  );
}
