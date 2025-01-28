import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    image: "./images/test1.png"
  },
  {
    image: "./images/test2.png"
  },
  {
    image: "./images/test3.png"
  },
  {
    image: "./images/test4.png"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-['Barlow_Semi_Condensed'] tracking-wide">
          What Our Clients Say
        </h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
} 