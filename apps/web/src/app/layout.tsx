import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/custom/navigation-bar";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/custom/footer";
import Script from "next/script";

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

        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-28SM99QG7P"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-28SM99QG7P');
            `,
          }}
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
