import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Scroggs Fencing did an amazing job with our ranch fencing. Their attention to detail and quality of work exceeded our expectations.",
    name: "Robert Anderson",
    designation: "Ranch Owner in Panhandle",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Professional, punctual, and perfect execution. They installed our privacy fence in record time and the craftsmanship is outstanding.",
    name: "Maria Garcia",
    designation: "Homeowner in Amarillo",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Best fence contractor in the Panhandle area. Their team was courteous, efficient, and the final result is exactly what we wanted.",
    name: "John Mitchell",
    designation: "Commercial Property Manager",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "From initial consultation to final installation, Scroggs Fencing demonstrated exceptional professionalism and expertise.",
    name: "Sarah Williams",
    designation: "Local Business Owner",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "The quality of materials and workmanship is outstanding. Our new fence has completely transformed our property's appearance.",
    name: "David Thompson",
    designation: "Residential Client",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
  },
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