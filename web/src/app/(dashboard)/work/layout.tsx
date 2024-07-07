"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const workCategory = [
  {
    name: "Professional",
    link: "./professional",
  },
  {
    name: "Blog",
    link: "./blog",
  },
  {
    name: "Project",
    link: "./project",
  },
];
export default function WorkPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  
  return (
    <>
      <main className="flex min-w-screen mt-2 min-h-screen items-start justify-start">
        <div className="w-full">
          <div className="flex justify-center md:justify-start gap-2 mt-4">
            {workCategory.map((item, idx) => (
              <Link
                key={idx}
                className={`rounded-full px-6 py-1 hover:bg-primary hover:text-white ${
                  pathName.includes(item.link.replace(".",""))
                    ? `bg-black text-white disable `
                    : `bg-[#cbd5e1] text-black`
                }`}
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {children}
        </div>
      </main>
    </>
  );
}
