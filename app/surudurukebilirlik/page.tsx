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
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {images.map((image: string, index: number) => (
            <div
              key={image}
              className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </PageSheet>
  );
}

export default Page;

