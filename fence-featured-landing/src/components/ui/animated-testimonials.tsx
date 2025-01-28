import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Testimonial {
  image: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
}

export function AnimatedTestimonials({ testimonials }: AnimatedTestimonialsProps) {
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
  }, [testimonials.length]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className={cn(
            "transition-opacity duration-500",
            isAnimating ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="flex items-center justify-center">
            <img
              src={testimonials[currentIndex].image}
              alt="Client Testimonial"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 