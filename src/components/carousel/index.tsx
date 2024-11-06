"use client";

import React, { useState, useEffect } from "react";

// Data
import { CAROUSEL_LIST } from "@/api/data";

// Components
import ImageWrapper from "../image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalSlides = 3;

  const moveCarousel = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex >= totalSlides) return 0;
      if (newIndex < 0) return totalSlides - 1;
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveCarousel(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative w-full p-3">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="carousel-wrapper flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array(totalSlides)
            .fill("Banner")
            .map((image, index) => {
              const id = `${image}_${index + 1}`;
              return (
                <div
                  key={id}
                  className="carousel-item flex-shrink-0 w-full h-48 bg-gray-300"
                >
                  <ImageWrapper
                    src="/images/banner-bg.png"
                    alt={id}
                    className="w-full h-full sm:h-screen"
                  />
                </div>
              );
            })}
        </div>
        <div className="absolute flex flex-col justify-center items-start top-0 h-full gap-5 p-6">
          {CAROUSEL_LIST.map(({ title }, index) => {
            const isActive = currentIndex === index;
            return (
              <span
                key={title}
                className={`${
                  isActive ? "text-amber-400" : "text-white"
                } font-semibold text-sm`}
              >
                {title}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center mt-2">
        <ImageWrapper
          src="/assets/bell.svg"
          alt="bell"
          className="w-auto h-4"
        />
        <span className="text-primary text-sm">
          ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
        </span>
      </div>
    </div>
  );
};

export default Carousel;
