"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/util/scroll-animation";
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <section className="relative mt-16 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <ScrollAnimation>
          <h1 className="mx-auto mb-2 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            <span>
              <Typewriter
                words={['The Ultimate AI-agent', 'The Seal Team Six']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </h1>
          <h1 className="mx-auto mb-2 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            <span>
              <Typewriter
                words={['for your cloud operations', 'of your Devops Team']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1100}
              />
            </span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation delay={400}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-black px-6 py-2 text-white hover:bg-gray-800 hover-lift"
            >
              <Link href="/new">
                <span className="flex items-center gap-2">
                  <span className="sr-only">Deploy</span>
                  Start Deploying
                </span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-200 px-6 py-2 hover:bg-gray-50 hover-lift"
            >
              <Link href="/contact/sales">Get a Demo</Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation delay={600} className="mx-auto mt-16 w-full max-w-4xl">
        <div className="mx-auto h-64 w-full overflow-hidden rounded-lg gradient-hero">
          <div className="mx-auto h-full w-full max-w-md logo-float">
            <svg
              viewBox="0 0 76 65"
              fill="none"
              className="h-full w-full transform-gpu"
            >
              <path
                d="M37.5274 0L75.0548 65H0L37.5274 0Z"
                className="fill-white"
              ></path>
            </svg>
          </div>
        </div>
      </ScrollAnimation>

      {/* Decorative background elements */}
      <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-pink-100 opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
