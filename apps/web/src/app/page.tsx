import AboutNavbar from "@/components/custom/about-nav-bar";
import { Hero } from "@/components/custom/hero";
export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center ">
        <Hero />
        <AboutNavbar />
      </main>
    </>
  );
}
