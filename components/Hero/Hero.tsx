"use client";
import useRoleSwitcher from "@/hooks/useRoleSwitcher";
import useRotatingAnimation from "@/hooks/useRotatingAnimation";
import Image from "next/image";
import { HeroImage } from "../../utils/images";
import Ellipse from "./Ellipse";

const Hero = () => {
  const ellipseRef = useRotatingAnimation();

  const role = useRoleSwitcher({
    roles: [
      "FULL STACK DEVELOPER",
      "APPLICATION DEVELOPER II",
      "BACKEND ENGINEER",
    ],
  });


  return (
    <section
      className="bg-primary"
    >
      <div className="mx-auto grid max-w-300 grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-135">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">
              Hi - I&apos;m Trishana Rai
            </span>
            <span className="text-accent block text-2xl font-bold">{role}</span>
          </h1>

          <h2 className="text-neutral mt-3">
            3+ years of experience building scalable web applications across
            backend and frontend with Java, Spring, and modern JavaScript.
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="/files/Trishana Rai - CV.pdf"
              download
              aria-label="Download CV"
              className="bg-accent/90 hover:bg-accent min-w-32 cursor-pointer rounded-lg px-3.5 py-2.5 text-center text-sm font-medium text-secondary"
            >
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/trishana-rai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn Profile"
              className="text-neutral bg-secondary cursor-pointer rounded-lg px-3.5 py-2.5 text-sm"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="flex min-h-75 items-center justify-center lg:min-h-140">
          <div className="text-accent relative size-56 sm:size-60 md:size-80 lg:size-103">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="Trishana Rai - Full Stack Developer"
              className="object-contain p-7"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-80 lg:size-103"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
