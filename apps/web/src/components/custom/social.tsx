"use client";

import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
} from "react-icons/ri";

import { FaHashnode } from "react-icons/fa6";

import Link from "next/link";

import resumeData from "../../../resume.json"

// icons for the current user and the current user's profile

const icons = [
  {
    path: resumeData.link.instagram,
    name: <RiInstagramFill />,
  },
  {
    path: resumeData.link.github,
    name: <RiGithubFill />,
  },
  {
    path: resumeData.link.twitter,
    name: <RiTwitterXFill />,
  },
  {
    path: resumeData.link.hashnode,
    name: <FaHashnode />
  },
  {
    path: resumeData.link.linkedin,
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
          <Link href={icon.path} key={index} target="_target">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

