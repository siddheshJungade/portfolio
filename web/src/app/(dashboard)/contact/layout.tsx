
import Script from "next/script";

export default function ContactPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
      {children}
    </>
  );
}
