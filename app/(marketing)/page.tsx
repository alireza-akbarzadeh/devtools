import { HeroLanding, LogoThicker, WaitList } from '@/components/sections';
import { Features } from '@/components/sections/features';
import { Testimonials } from '@/components/sections/testimonials';

export default async function IndexPage() {
  return (
    <>
      <HeroLanding />
      <LogoThicker />
      <Features />
      <Testimonials />
      <WaitList />
    </>
  );
}
