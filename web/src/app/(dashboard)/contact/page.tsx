"use client";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/siddheshjungade/30min?primary_color=121212"
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </main>
  );
}
