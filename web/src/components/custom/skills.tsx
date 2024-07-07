"use-client";
import * as React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const skillList = [
  {
    type: "Language",
    values: ["JavaScript", "TypeScript", "Java", "Python", "C/C++", "HTML5"],
    backgroundColor: "",
  },
  {
    type: "Technologies",
    values: [
      "Node.js",
      "Express",
      "Rest API",
      "AWS",
      "Nest.JS",
      "Docker",
      "Next.js",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Appsmith",
      "GitHub Action",
    ],
    backgroundColor: "",
  },
  {
    type: "Concepts",
    values: [
      "OOPS",
      "Backend Design Patterns",
      "DBMS",
      "Computer Networks",
      "Low Level Design",
      "High Level Design",
      "Data Structure & Algorithm",
      "Cloud",
    ],
    backgroundColor: "",
  },
  {
    type: "Tools",
    values: [
      "VS Code",
      "Postman",
      "Github",
      "Terminal",
      "Mac",
      "Linux",
      "Windows",
      "WSL",
    ],
    backgroundColor: "",
  },
];

export function Skills() {
  return (
    <div className="w-full h-[420px]">
      <Swiper
        slidesPerView={1}
        cssMode={true}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-full h-full grid my-1"
        breakpoints={{
          1000: {
            slidesPerView: 4,
          },
          400: {
            slidesPerView: 2,
          },
        }}
      >
        {skillList.map((item: any, idx: number) => {
          return (
            <SwiperSlide key={idx} className=" ">
              <Card className="p-3 h-[25em] mx-2 bg-slate-200 shadow-lg rounded-3xl">
                <CardTitle className="ml-6">{item.type}</CardTitle>
                <CardContent className="flex flex-wrap   gap-2 mt-3">
                  {item.values.map((skill: string, _idx: number) => {
                    return (
                      <span
                        className="py-1 px-3 rounded-full text-white bg-slate-600"
                        key={_idx}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </CardContent>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
