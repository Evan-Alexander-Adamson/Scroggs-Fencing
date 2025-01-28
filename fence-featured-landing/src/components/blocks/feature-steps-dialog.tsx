import React from "react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { FeatureSteps } from "./feature-section"

const projects = [
  { 
    step: 'Project 1', 
    title: '8ft Western Redwood',
    content: '8ft Western Redwood board on board with cap and trim in Amarillo, TX', 
    image: './images/Project1.png'
  },
  { 
    step: 'Project 2', 
    title: 'Sable Brown Wood Defender',
    content: 'Sable Brown Wood Defender stain. This product handles the Texas Panhandle weather conditions expecitionally with a three year stain life.', 
    image: './images/Project2.png'
  },
  {
    step: 'Project 3',
    title: 'Metal Privacy Fence',
    content: 'Metal privacy fence constructed for clients in Panhandle, Texas',
    image: './images/Project3.png'
  }
]

interface FeatureStepsDialogProps {
  children: React.ReactNode
}

export function FeatureStepsDialog({ children }: FeatureStepsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-7xl">
        <DialogTitle className="sr-only">Our Recent Projects</DialogTitle>
        <DialogDescription className="sr-only">View our recent fencing projects and installations</DialogDescription>
        <FeatureSteps 
          features={projects}
          title="Our Recent Projects"
          autoPlayInterval={6000}
          imageHeight="h-[600px]"
        />
      </DialogContent>
    </Dialog>
  )
} 