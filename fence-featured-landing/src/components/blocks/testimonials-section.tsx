import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    image: "images/test1.png",
    alt: "Testimonial from Kristi Waters"
  },
  {
    image: "images/test2.png",
    alt: "Testimonial from Belinda Perez"
  },
  {
    image: "images/test3.png",
    alt: "Testimonial from Harley Hedrick"
  },
  {
    image: "images/test4.png",
    alt: "Testimonial from Wally Nunez"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-slate-900 py-12 sm:py-20">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg">
          <div
            className={cn(
              "transition-opacity duration-500",
              isAnimating ? "opacity-0" : "opacity-100"
            )}
          >
            <div className="flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}${testimonials[currentIndex].image}`}
                alt={testimonials[currentIndex].alt}
                className="w-full max-w-2xl rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 