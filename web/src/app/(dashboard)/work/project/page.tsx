"use client";
import { ContactForm } from "@/components/custom/contact-form";
import { LOADER } from "@/components/custom/loader";
import Projects from "@/components/custom/projects";
import { Button } from "@/components/ui/button";

const workCategory = [
  {
    name: "Professional",
    link: "",
  },
  {
    name: "Blog",
    link: "",
  },
  {
    name: "Project",
    link: "",
  },
];
export default function Work() {
  return (
    <main className="flex min-h-screen min-w-screen items-start justify-center mb-5">
       <Projects />
    </main>
  );
}
