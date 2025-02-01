import { HeroLanding, LogoThicker } from '@/components/sections';
import { Features } from '@/components/sections/features';

export default async function IndexPage() {
  return (
    <>
      <HeroLanding />
      <LogoThicker />
      <Features />
    </>
  );
}
