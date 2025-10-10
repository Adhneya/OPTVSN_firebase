import Contact from '@/components/sections/contact';
import { Suspense } from 'react';

export default function ContactPage() {
  return (
    <main>
      <Suspense>
        <Contact />
      </Suspense>
    </main>
  );
}
