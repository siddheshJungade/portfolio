"use client";
import CountUp from "react-countup";
import { IconType } from "react-icons";

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}: {
  containerStyles?: string,
  icon?: any,
  endCountNum: number,
  endCountText?: string,
  badgeText?: string
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="flex items-center gap-x-2 ">
      <div className="text-3xl text-white">{icon}</div>
        <div className="text-4xl leading-none font-bold text-white ">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[100px] leading-none text-[15px] font-medium text-white">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
