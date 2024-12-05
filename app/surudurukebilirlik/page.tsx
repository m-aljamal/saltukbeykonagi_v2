"use client";

import React from "react";
import PageSheet from "../_components/page-sheet";
import { useState } from "react";
import Image from "next/image";
import ImageModul from "../_components/ImageModul";

function Page() {
  const [currentImage, setCurrentImage] = useState("");
  const [shouldShow, setShouldShow] = useState(false);

  const images = ["n-1.jpeg", "n-2.jpeg", "n-3.jpeg", "n-4.jpeg", "n-5.jpeg"];

  const handleImageClick = (image: string) => {
    setShouldShow(true);
    setCurrentImage(image);
  };

  return (
    <PageSheet>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {images.map((image: string) => (
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

export default Page;
