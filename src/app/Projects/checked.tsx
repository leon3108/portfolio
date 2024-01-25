import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import reactLogo from '@/public/logo_react.png';
import supabaseLogo from '@/public/logo_supabase.png';
import nextjsLogo from '@/public/logo_nextjs.png';
import tailwindLogo from '@/public/logo_tailwind.png';
import Badge from '@/badge';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function BadgeLine({ className }: { className?: string }) {
  return (
    <div className={`flex overflow-x-auto whitespace-no-wrap mt-4 ${className}`} /* animate-infinite-left-to-right */>
      <Badge alt="logo of React" src={reactLogo} text="React" className="bg-react" />
      <Badge alt="logo of Nextjs" src={nextjsLogo} text="Nextjs" className="bg-nextjs" />
      <Badge alt="logo of Supabase" src={supabaseLogo} text="Supabase" className="bg-supabase" />
      <Badge alt="logo of Tailwind" src={tailwindLogo} text="Tailwind" className="bg-tailwind" />
    </div>
  );
}

export default function Checked() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const anim = gsap.fromTo(
        container.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          paused: true,
        }
      );

      ScrollTrigger.create({
        trigger: container.current,
        start: 'center 90%',
        onEnter: () => anim.play(),
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: 'center 90%',
        onEnterBack: () => anim.play(),
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: 'top bottom',
        onLeaveBack: () => anim.pause(0),
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: 'top bottom',
        onLeave: () => anim.pause(0),
      });
    },
    { scope: container }
  );

  return (
    <section className="mt-4 opacity-0" ref={container}>
      <div className="flex items-center lg:hidden">
        <p className="text-2xl">Checked, Todo app</p>
        <a href="https://checkd.online/login" target="_blank">
          <ExternalLinkIcon className="h-4 w-4 ml-2" />
        </a>
      </div>

      <div className="flex flex-col xl:flex-row xl:items-start">
        <div className="flex justify-center">
          <Image
            alt="screenshot of Checked"
            src="/checked.png"
            width={100}
            height={100}
            className="w-80 sm:w-[500px] md:w-[550px] lg:w-[650px] xl:w-[700px] 2xl:w-[800px]"
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col xl:flex-col-reverse xl:ml-4">
          <BadgeLine />

          <Card className="mt-4 xl:mt-0">
            <CardHeader className="hidden lg:block">
              <CardTitle>Checked, Todo app</CardTitle>
              <CardDescription className="flex justify-between">
                <a href="https://checkd.online/login" target="_blank">
                  Checkd.online
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              As a customer of apps like Notion, obsidian etc. I naturally wanted to create a project resembling what I
              love.
              <br />
              The main feature is a system of tag, which allows user to create a todo with tags and sort todos by tags.
              <br />
              <br />
              During the developpment I could learn the server components with NextJs, how to host a project with vercel
              and modify the domain name.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
