"use client"
import Link from "next/link";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import { Button } from "../ui/button";
import { Socials } from "./social";
import { DevImg } from "./dev-img";
import Badge from "./badge";
import AboutNavbar from "./about-nav-bar";
import resume from "../../../resume.json";

export const Hero = () => {
  return (
    <>
      <section className="w-full h-full bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
        <div className="flex flex-col min-h-screen justify-around w-full container mx-auto">
          <div className="w-full h-full my-10 flex flex-col xl:flex-row justify-center md:justify-around  items-center gap-10">
            {/* text  */}
            <div className="flex flex-col gap-4 justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                Software Developer
              </div>
              <h1 className="text-2xl tracking-tight lg:text-2xl">
                Hello , my name is{" "}
                <span className="font-extrabold">Siddhesh Jungade</span>
              </h1>

              <p className="w-full md:w-[600px] mx-auto xl:mx-0">
                Crafting Scalable Solutions with the Power of JavaScript:
                Turning Ideas into Reality with Precision and Speed.
              </p>
              {/* buttons  */}
              <div className="flex flex-col gap-3 md:flex-row mx-auto xl:mx-0">
                <Link href={"/contact"}>
                  <Button className="gap-x-2">Contact me</Button>
                </Link>

                <Button variant="secondary" onClick={() => {
                  window.open(resume.resume_link,"_target")
                }} className="gap-x-2">
                  Download CV
                </Button>
              </div>
              {/* socials  */}
              <Socials
                containerStyles="flex gap-x-6 m-auto my-8 xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </div>
            {/* image  */}
            <div className="relative min-w-screen h-full ">
              <Badge
                containerStyles="hidden md:block absolute top-[12%] -left-[5rem] bg-black p-4 rounded-3xl"
                icon={<RiBriefcase4Fill />}
                endCountNum={2}
                badgeText="Years Of Experience"
              />

              <Badge
                containerStyles="hidden md:block absolute top-[80%] -left-[1rem] bg-black p-4 rounded-3xl"
                icon={<RiTodoFill />}
                endCountNum={5}
                // endCountText={'k'}
                badgeText="Finished Projects"
              />

              <Badge
                containerStyles="hidden md:block absolute top-[55%] -right-[4rem] bg-black p-4 rounded-3xl"
                icon={<RiTeamFill />}
                endCountNum={3}
                // endCountText={'k'}
                badgeText="Happy Clients"
              />
              <div className="w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem]">
                <DevImg
                  containerStyles="relative w-full h-full z-[-1]"
                  imgSrc="/assets/images/profile.png"
                />
              </div>
            </div>
          </div>
          {/* icon   */}
          <div className="flex w-full justify-center  animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </section>
    </>
  );
};
