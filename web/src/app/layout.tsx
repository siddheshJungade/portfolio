import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/custom/navigation-bar";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/custom/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is Siddhesh Jungade portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="icon" href="/icon.png" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
        />
      </head>
      <body className={inter.className}>
        <NavigationBar />
        <div className="container ">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
