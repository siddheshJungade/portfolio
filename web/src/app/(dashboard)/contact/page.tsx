// "use client";

import Script from "next/script";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/siddheshjungade/30min"
        style={{
          minWidth: "100%",
          height: "700px",
        }}
      ></div>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></Script>
    </main>
  );
}
