"use client";

import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
} from "react-icons/ri";

import { FaHashnode } from "react-icons/fa6";

import Link from "next/link";

// icons for the current user and the current user's profile

const icons = [
  {
    path: "https://www.instagram.com/siddheshjungade",
    name: <RiInstagramFill />,
  },
  {
    path: "https://github.com/premvarma2002",
    name: <RiGithubFill />,
  },
  {
    path: "https://twitter.com/realpremvarma",
    name: <RiTwitterXFill />,
  },
  {
    path: "https://blog.siddheshjungade.dev",
    name: <FaHashnode />
  },
  {
    path: "https://www.linkedin.com/in/siddheshjungade",
    name: <RiLinkedinFill />,
  },
];

export const Socials = ({
  containerStyles,
  iconsStyles,
}: {
  containerStyles: string;
  iconsStyles: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

