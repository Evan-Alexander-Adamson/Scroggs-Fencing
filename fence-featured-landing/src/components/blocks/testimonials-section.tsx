import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Import images directly
import test1 from "/images/test1.png";
import test2 from "/images/test2.png";
import test3 from "/images/test3.png";
import test4 from "/images/test4.png";

const testimonials = [
  {
    image: test1,
    alt: "Testimonial from Kristi Waters"
  },
  {
    image: test2,
    alt: "Testimonial from Belinda Perez"
  },
  {
    image: test3,
    alt: "Testimonial from Harley Hedrick"
  },
  {
    image: test4,
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
                src={testimonials[currentIndex].image}
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