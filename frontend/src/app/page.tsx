import Blog from '@/components/sections/blog';
import Hero from '@/components/sections/hero';
import Testimonials from '@/components/sections/testimonials';
import { TrustStrip } from '@/components/sections/trust-strip';
import StickyMicroCTA from '@/components/sticky-micro-cta';
import ProgramsOverview from '@/components/sections/programs-overview';
import ClosingCta from '@/components/sections/closing-cta';
import Motivational from '@/components/sections/motivational';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ProgramsOverview />
      <Motivational />
      <Testimonials />
      <Blog />
      <ClosingCta />
      <StickyMicroCTA />
    </main>
  );
}

