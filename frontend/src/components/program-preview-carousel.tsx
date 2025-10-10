"use client";

import * as React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { programPreviews } from "@/lib/data";

export default function ProgramPreviewCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true, stopOnFocusIn: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="h-full -ml-4">
        {programPreviews.map((program) => (
          <CarouselItem key={program.name} className="pl-4">
            <Link href={program.href} className="block h-full">
              <Card className="h-full flex flex-col justify-center bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-shadow duration-300 card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{program.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{program.description}</CardDescription>
                  <div className="flex items-center text-sm font-medium text-primary mt-4">
                    View Program <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
