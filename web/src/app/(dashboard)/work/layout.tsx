import Link from "next/link";

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
  return (
    <>
      <main className="flex w-full min-h-screen items-start justify-start p-10 md:p-20">
        <div className="w-full">
          <div className="flex justify-center md:justify-start gap-2">
            {workCategory.map((item, idx) => (
              <Link
                key={idx}
                className="rounded-full px-6 py-1 bg-[#cbd5e1] hover:bg-primary text-black hover:text-white"
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
