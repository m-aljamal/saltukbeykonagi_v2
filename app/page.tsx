import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section>
        <Carousel className="w-full ">
          <CarouselContent>
            <CarouselItem className=" h-screen relative">
              <Image
                src="/images/1.webp"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
              />
            </CarouselItem>
            <CarouselItem className=" h-screen relative">
              <Image
                src="/images/2.webp"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  );
}
