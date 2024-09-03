"use client";
import Blog from "@/components/custom/blog-list";
import { ContactForm } from "@/components/custom/contact-form";
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
        <Blog />
    </main>
  );
}
