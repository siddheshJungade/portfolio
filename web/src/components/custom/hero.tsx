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

export const Hero = () => {
  return (
    <>
      <section className="py-2 h-full bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
        <div className="w-full container mx-auto">
          <div className="flex flex-col xl:flex-row justify-center md:justify-start gap-10">
            {/* text  */}
            <div className="flex flex-col gap-4 justify-center w-full xl:w-1/2 mx-auto xl:mx-0 text-center xl:text-left">
              <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                Software Developer
              </div>
              <h1 className="text-2xl tracking-tight lg:text-2xl">
                Hello , my name is{" "}
                <span className="font-extrabold">Siddhesh Jungade</span>
              </h1>

              <p className=" w-full mx-auto xl:mx-0">
                Crafting Scalable Solutions with the Power of JavaScript:
                Turning Ideas into Reality with Precision and Speed.
              </p>
              {/* buttons  */}
              <div className="flex flex-col gap-3 md:flex-row mx-auto xl:mx-0">
                <Link href={"/contact"}>
                  <Button className="gap-x-2">Contact me</Button>
                </Link>

                <a href="/cv.pdf" download="cv.pdf">
                  <Button variant="secondary" className="gap-x-2">
                    Download CV
                  </Button>
                </a>
              </div>
              {/* socials  */}
              <Socials
                containerStyles="flex gap-x-6 m-auto my-8 xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </div>
            {/* image  */}
            <div className="hidden xl:block flex flex-row relative justify-self-start w-[25rem] h-[25rem] xl:w-[30rem]  xl:h-[30rem] justify-center">
              {/* badge  */}
              <Badge
                containerStyles="absolute top-[12%] -left-[5rem] bg-black p-4 rounded-3xl"
                icon={<RiBriefcase4Fill />}
                endCountNum={2}
                badgeText="Years Of Experience"
              />
              {/* badge 2  */}
              <Badge
                containerStyles="absolute top-[80%] -left-[1rem] bg-black p-4 rounded-3xl"
                icon={<RiTodoFill />}
                endCountNum={5}
                // endCountText={'k'}
                badgeText="Finished Projects"
              />
              {/* badge 3  */}
              <Badge
                containerStyles="absolute top-[55%] -right-[9rem] bg-black p-4 rounded-3xl"
                icon={<RiTeamFill />}
                endCountNum={3}
                // endCountText={'k'}
                badgeText="Happy Clients"
              />
              <DevImg
                containerStyles="bg-hero_shape self-center w-full h-full z-[-1] bg-no-repeat relative bg-bottom"
                imgSrc="/assets/images/profile.png"
              />
            </div>
          </div>
          {/* icon   */}
          <div className="flex w-full mt-10 justify-center left-2/4 botton-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </section>
    </>
  );
};
