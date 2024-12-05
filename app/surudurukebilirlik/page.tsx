"use client";

import React from "react";
import PageSheet from "../_components/page-sheet";
import Image from "next/image";

function Page() {
  const images = [
    "/images/n-1.jpeg",
    "/images/n-2.jpeg",
    "/images/n-3.jpeg",
    "/images/n-4.jpeg",
    "/images/n-5.jpeg",
  ];

  return (
    <PageSheet>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image: string) => (
            <div
              key={image}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt="Gallery image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </PageSheet>
  );
}

export default Page;

