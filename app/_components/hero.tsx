"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [
  "/images/2.webp",
  "/images/1.webp",
  "/images/3.webp",
  "/images/n1.jpeg",
  "/images/n2.jpeg",
  "/images/n4.jpeg",
  "/images/4.webp",
  "/images/7.webp",
  "/images/8.webp",
  "/images/26.webp",
  "/images/31.webp",
  "/images/11.webp",
  "/images/30.webp",
  "/images/29.webp",
];

const OverlayText = () => (
  <div className="absolute inset-0 px-8 flex justify-center items-center">
    <div className="space-y-8 flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-7xl text-white font-bold">
        HOŞ GELDİNİZ
      </h2>
      <p className="text-white font-semibold ">
        Rahatlığınız ve Keyfiniz için en iyisini yaşayın
      </p>
      <Button className=" px-8  " variant="yellow" asChild>
        <Link href="/iletisim">İletişim</Link>
      </Button>
    </div>
  </div>
);

export default function Hero() {
  return (
    <section>
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
          Fade(),
        ]}
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent className="h-[calc(100vh-74.13px)] bg-opacity-40 bg-gray-800 ">
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <Image
                src={image}
                alt={`image-${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="brightness-50  "
              />
              <OverlayText />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
