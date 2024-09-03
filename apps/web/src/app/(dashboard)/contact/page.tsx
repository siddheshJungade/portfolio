import { ContactForm } from '@/components/custom/contact-form';
import Script from 'next/script';

export default function Contact() {

  return (
    <main className="flex w-full mx-auto min-h-screen flex-col items-center justify-between">
        {/* <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      /> */}
      <ContactForm key="./contacts" />
    </main>
  );
}

