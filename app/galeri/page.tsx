"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

import { useState } from "react";
import ImageModul from "../_components/ImageModul";
import PageSheet from "../_components/page-sheet";

const testimonials = [
  [
    [
      "/images/1.webp",
      "/images/2.webp",
      "/images/9.webp",
      "/images/10.webp",
      "/images/16.webp",
      "/images/17.webp",
      "/images/24.webp",
      "/images/25.webp",
      "/images/32.webp",
    ],
    [
      "/images/3.webp",
      "/images/33.webp",
      "/images/34.webp",
      "/images/11.webp",
      "/images/18.webp",
      "/images/19.webp",
      "/images/26.webp",
      "/images/27.webp",
    ],
  ],
  [
    [
      "/images/4.webp",
      "/images/6.webp",
      "/images/12.webp",
      "/images/13.webp",
      "/images/20.webp",
      "/images/21.webp",
      "/images/28.webp",
      "/images/29.webp",
    ],
    [
      "/images/7.webp",
      "/images/8.webp",
      "/images/14.webp",
      "/images/15.webp",
      "/images/22.webp",
      "/images/23.webp",
      "/images/30.webp",
      "/images/31.webp",
    ],
  ],
];

export default function Example() {
  const [shouldShow, setShouldShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (image: string) => {
    setShouldShow(true);
    setCurrentImage(image);
  };

  return (
    <PageSheet>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-yellow-900">
            Saltuk Bey Konağı Otel
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Rahatlığınız ve Keyfiniz için en iyisini yaşayın
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <div className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1 relative h-[500px]">
            <Image
              src="/images/17.webp"
              alt="room"
              className="h-full w-full object-cover object-center p-4"
              layout="fill"
            />
          </div>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={cn(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((image: string) => (
                    <div
                      onClick={() => handleImageClick(image)}
                      key={image}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 relative h-[250px] cursor-pointer"
                    >
                      <Image
                        src={image}
                        alt="room"
                        className="h-full w-full object-cover object-center p-4 "
                        layout="fill"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        {currentImage && (
          <ImageModul
            shouldShow={shouldShow}
            currentImage={currentImage}
            close={async () => setShouldShow(false)}
          />
        )}
      </div>
    </PageSheet>
  );
}
