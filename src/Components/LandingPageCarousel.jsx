import { MoveRight, MoveLeft } from "lucide-react";
import { useState } from "react";

export default function LandingPageCarousel() {
  const slides = [
    {
      title: "Summer Collection 2026",
      description:
        "Refresh your wardrobe with the latest trends and exclusive discounts.",
      buttonText: "Shop Now",
      backgroundColor: "bg-gradient-to-r from-orange-500 to-red-500",
    },
    {
      title: "Latest Electronics",
      description:
        "Discover smartphones, laptops, headphones, and more at unbeatable prices.",
      buttonText: "Explore Deals",
      backgroundColor: "bg-gradient-to-r from-blue-600 to-cyan-500",
    },
    {
      title: "Home & Living",
      description:
        "Upgrade your home with stylish furniture and smart appliances.",
      buttonText: "Browse Collection",
      backgroundColor: "bg-gradient-to-r from-purple-600 to-pink-500",
    },
    {
      title: "Gaming Zone",
      description:
        "Consoles, gaming laptops, accessories, and everything in between.",
      buttonText: "Start Gaming",
      backgroundColor: "bg-gradient-to-r from-gray-900 to-purple-900",
    },
    {
      title: "Fitness & Wellness",
      description:
        "Stay healthy with premium fitness gear and wellness essentials.",
      buttonText: "Get Fit",
      backgroundColor: "bg-gradient-to-r from-green-500 to-emerald-700",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[55vh] overflow-hidden">
      <button
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white"
        onClick={prevSlide}
      >
        <MoveLeft size={24} />
      </button>

      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.title}
            className={`${slide.backgroundColor} flex h-full shrink-0 flex-col items-center justify-center gap-4 text-center`}
            style={{ width: `${100 / slides.length}%` }}
          >
            <h1 className="text-5xl font-bold text-white">{slide.title}</h1>

            <p className="max-w-2xl text-xl text-white">{slide.description}</p>

            <button className="rounded-xl bg-white px-5 py-2 text-lg font-semibold transition-transform duration-300 hover:scale-105">
              {slide.buttonText}
            </button>
          </div>
        ))}
      </div>

      <button
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white"
        onClick={nextSlide}
      >
        <MoveRight size={24} />
      </button>
    </div>
  );
}
