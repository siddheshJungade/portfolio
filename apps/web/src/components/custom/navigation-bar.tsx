"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import resumeData from "../../../resume.json";
import { useEffect, useState } from "react";
const menuItems = [
  {
    name: "Work",
    route: "/work/blog",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

export const NavigationBar = () => {
  const [isDrawerOn, setIsDrawerOn] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const pathName = usePathname();



  useEffect(() => {
    const handleScroll: any = () => {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  
  return (
    <nav className={`sticky z-30  transition-all top-0 w-full p-2 bg-white  ${isVisible ? '' : 'shadow-xl'}`}>
      <div className="flex md:mx-10 mx-auto flex-col md:flex-row  items-center justify-between">
        <div className="w-full flex justify-between text-2xl md:text-4xl">
          <Link href="/" onClick={() => setIsDrawerOn(false)} className="font-bold text-gray-900 dark:text-white">
            Siddhesh.
          </Link>
          <div className="block md:hidden">
            <i
              className={
                isDrawerOn ? "hidden" : "md:hidden fa fa-solid fa-bars"
              }
              onClick={() => setIsDrawerOn(true)}
            ></i>
            <i
              className={
                isDrawerOn == false
                  ? `hidden`
                  : "md:hidden fa fa-solid fa-minus"
              }
              onClick={() => setIsDrawerOn(false)}
            ></i>
          </div>
        </div>
        <div  className={`${isDrawerOn? "block": "max-sm:hidden" } w-full mt-10 md: mt-0 flex flex-col md:flex-row gap-x-10 gap-y-5 md:gap-y-0 justify-start md:justify-end items-start md:items-center`}>
          <ul className="flex flex-col gap-y-3 md:gap-y-0 md:gap-x-5 t md:flex-row md:items-center">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.route}
                  onClick={() => setIsDrawerOn(false)}
                  className={
                    pathName.includes(item.route.replace("/blog", ""))
                                   ? `relative after:absolute after:top-5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-100 after:bg-black after:transition-transform after:duration-300 after:ease-in-out`
                      : `text-gray-500 relative after:absolute after:top-5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 `
                  }
                  // ? `disable underline underline-offset-2 md:underline-offset-[100%] decoration-2 md:decoration-4 after:scale-x-0 after:bg-black after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out `
                  // : ``
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            onClick={() => {
              setIsDrawerOn(false)
              window.open(resumeData.link.github, "_target")
            }}
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            Github
          </Button>
        </div>
      </div>
    </nav>
  );
};
