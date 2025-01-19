import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  title: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({ 
  features, 
  title,
  autoPlayInterval = 6000,
  imageHeight = "h-[600px]"
}: FeatureStepsProps) {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (!autoPlayInterval) return

    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % features.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [features.length, autoPlayInterval])

  return (
    <div className="relative overflow-hidden bg-slate-900 py-12 sm:py-16 rounded-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white font-['Barlow_Semi_Condensed'] sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project Info */}
            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.step}
                  className={cn(
                    "relative cursor-pointer rounded-xl p-6 transition-all duration-300 border",
                    activeStep === index
                      ? "bg-amber-500 text-slate-900 border-amber-400 scale-105"
                      : "hover:bg-white/5 text-white border-white/10"
                  )}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium font-['Barlow_Semi_Condensed']">{feature.step}</span>
                    <div className="h-px flex-1 bg-current opacity-20" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold font-['Barlow_Semi_Condensed']">{feature.title}</h3>
                  <p className="mt-2 text-sm opacity-90 font-['Barlow_Semi_Condensed']">{feature.content}</p>
                </div>
              ))}
            </div>
            {/* Project Image */}
            <div className="relative flex items-center justify-center min-h-[600px]">
              {features.map((feature, index) => (
                <div
                  key={feature.image}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-300 flex items-center justify-center",
                    activeStep === index ? "opacity-100" : "opacity-0"
                  )}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="max-w-full max-h-[600px] w-auto h-auto rounded-xl shadow-xl object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 