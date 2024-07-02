"use client";
import Link from "next/link";
import { useState } from "react";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "../ui/tabs";
import { Skills } from "./skills";
import { PersonalInfo } from "./personal-info";

export default function AboutNavbar() {
  const menus = [
    { title: "#Skills", value: "skills" },
    { title: "#Personal Info", value: "about" },
  ];

  return (
    <Tabs defaultValue="skills" className="w-[85%]">
      <TabsList className="grid w-full md:w-1/2 h-[3rem] mx-auto grid-cols-2 gap-3 justify-center rounded-full">
        {menus.map((item, idx) => (
          <TabsTrigger
            key={idx}
            value={item.value!}
            className="text-center rounded-full h-full data-[state=active]:bg-black data-[state=active]:text-white"
          >
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="skills" className="w-full mx-auto">
        <Skills />
      </TabsContent>
      <TabsContent value="about" className="w-full mx-auto">
        <PersonalInfo />
      </TabsContent>
    </Tabs>
  );
}
