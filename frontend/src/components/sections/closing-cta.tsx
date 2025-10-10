"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from '../contact-modal';
import Link from 'next/link';

export default function ClosingCta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-secondary rounded-lg p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to Write Your Own Success Story?
            </h2>
            <div className="mt-8 flex justify-center flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/programs">
                  🚀 Start Your Journey
                </Link>
              </Button>
              <Button size="lg" variant="outline" onClick={() => setIsModalOpen(true)}>
                💬 Book a Free Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} defaultSubject="Free Discovery Call" />
    </>
  );
}
