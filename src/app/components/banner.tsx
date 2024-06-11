'use client';

import HeaderImage from '@/public/M.N.2.png';
import { Button } from '@/ui/button';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Ellipse from './ellipse';
import Skeleton from './skeleton';

const linkedinURL = 'https://www.linkedin.com/in/leon-maxime-noel/';

function CatchLine({ className }: { className: string }) {
  return (
    <div
      className={`text-center p-4 md:px-14 lg:px-0 lg:w-[550px] lg:text-justify xl:w-[600px] 2xl:w-[800px] ${className}`}
    >
      I&apos;m a dedicated software developer who thrives on transforming intricate problems into streamlined solutions.
      With a keen eye for detail and a passion for creativity, I craft clean and efficient code that drives progress.
      Let&apos;s embark on a journey of innovation and collaborate to build a better, brighter future.
    </div>
  );
}

export default function Banner() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section id="about" className="2xl:mt-60">
      <div className="min-w-screen p-4 flex justify-around items-center lg:justify-start xl:px-14 lg:mt-10 2xl:mt-20">
        <div className="w-24 h-52 sm:w-32 sm:h-56 md:w-40 md:h-60 xl:w-48 2xl:mr-8 flex items-center">
          {!loaded && <Skeleton />}
          <Image
            className={`rounded-full ${!loaded && 'hidden'}`}
            src={HeaderImage}
            alt="Beautiful picture of myself"
            priority
            onLoadingComplete={() => setLoaded(true)}
          />
        </div>
        <div className="right-element ml-2">
          <p className="md:text-xl lg:min-w-max xl:text-3xl">Maxime NOEL</p>
          <p className="md:text-xl lg:min-w-max xl:text-3xl">Web Developper </p>
          <div className="flex items-center flex-wrap">
            <a href="https://github.com/leon3108" target="_blank">
              <GitHubLogoIcon className="h-6 w-6 m-2 ml-0" />
            </a>
            <a href={linkedinURL} target="_blank">
              <LinkedInLogoIcon className="h-6 w-6 m-2 ml-0" />
            </a>
            <Link href="#contact" className="pl-0">
              mail
            </Link>
            <a href="/MaximeNOEL_eng.pdf" download="MaximeNOEL_eng.pdf" className="ml-2 underline">
              Resume
            </a>
          </div>
          <CatchLine className="hidden lg:block" />
          <Button variant={'cta'}>
            <Link href="#contact">Let's Build Together</Link>
          </Button>
        </div>
      </div>
      <CatchLine className="lg:hidden" />
      <div className="relative">
        <Ellipse />
      </div>
    </section>
  );
}
