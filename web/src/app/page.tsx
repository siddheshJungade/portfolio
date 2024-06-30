import AboutNavbar from "@/components/custom/about-nav-bar";
import { Hero } from "@/components/custom/hero";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-around p-10">
        <Hero />

        <AboutNavbar />
      </main>
    </>
  );
}
