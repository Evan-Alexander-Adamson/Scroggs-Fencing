import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

export function QuoteForm() {
  const handleClose = () => {
    window.location.hash = '';
  };

  return (
    <div className="w-full max-w-md mx-auto bg-slate-900/70 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl p-8">
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-4 text-white hover:bg-white/10"
        onClick={handleClose}
      >
        <X className="h-5 w-5" />
      </Button>

      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white font-['Barlow_Semi_Condensed']">
            Request a Free Quote
          </h1>
          <p className="text-white/80 text-sm">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Name</Label>
            <Input
              id="name"
              placeholder="John Smith"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              placeholder="john@example.com"
              required
              type="email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Phone</Label>
            <Input
              id="phone"
              placeholder="(806) 555-0123"
              required
              type="tel"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="project" className="text-white">Project Details</Label>
            <Textarea
              id="project"
              placeholder="Tell us about your fencing project..."
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-['Barlow_Semi_Condensed'] font-semibold"
          >
            Submit Quote Request
          </Button>
        </div>
      </div>
    </div>
  );
} 