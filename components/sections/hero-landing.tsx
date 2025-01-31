import { GlowEButton } from '../shared/glow-button';
import startBg from '@/assets/stars.png';

export async function HeroLanding() {
  return (
    <section
      style={{ backgroundImage: `url(${startBg.src})` }}
      className="relative flex h-[492px] items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)] " />
      <div
        className="position-center size-64 items-center justify-center rounded-full border border-white/20
      bg-purple-500 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgba(184,148,255)_37.7%,rgb(24,0,66))]
        shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(148,69,255)]
      "
      />
      <div className="position-center size-[344px] rounded-full border border-white opacity-20">
        <div className="position-center !left-0 size-2 rounded-full  bg-white" />
        <div className="absolute left-1/2 top-0 size-2 -translate-x-1/2  -translate-y-1/2 rounded-full bg-white" />
        <div className="absolute left-full top-1/2 inline-flex size-5 -translate-x-1/2 -translate-y-1/2  items-center justify-center rounded-full border border-white">
          <div className="size-2 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="position-center size-[444px] rounded-full border  border-dashed border-white/20" />
      <div className="position-center absolute size-[544px] rounded-full border border-white opacity-20">
        <div className="position-center !left-0 size-2 rounded-full  bg-white" />
        <div className="absolute left-full top-1/2 size-2 -translate-x-1/2  -translate-y-1/2 rounded-full bg-white" />
      </div>
      <div className="container relative mt-16">
        <h1
          className="bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,.5))] bg-clip-text text-center
         text-8xl font-semibold tracking-tighter text-transparent md:text-[168px] md:leading-none"
        >
          Ai Seo
        </h1>
        <p className="mt-5 text-center text-lg text-white/70">
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="mt-5 flex justify-center">
          <GlowEButton>Join waitlist</GlowEButton>
        </div>
      </div>
    </section>
  );
}
