"use-client"
import { ContactForm } from '@/components/custom/contact-form';

export default function Contact() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ContactForm key="./contacts" />
    </main>
  );
}

