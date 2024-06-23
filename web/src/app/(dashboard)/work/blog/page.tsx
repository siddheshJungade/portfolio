"use client";
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
    <main className="flex min-h-screen items-start justify-center p-24">
      <div className="rounded overflow-hidden shadow-lg">
        <a href="#"></a>
        <div className="relative">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Photos
            </div>
          </a>

          <a href="!#">
            <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <span className="font-bold">27</span>
              <small>March</small>
            </div>
          </a>
        </div>
        <div className="px-6 py-4">
          <a
            href="#"
            className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            Best View in Newyork City
          </a>
          <p className="text-gray-500 text-sm">The city that never sleeps</p>
        </div>
        <div className="px-6 py-4 flex flex-row items-center">
        </div>
      </div>
    </main>
  );
}
