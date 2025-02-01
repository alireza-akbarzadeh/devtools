import {
  AcmeLogo,
  ApexLogo,
  CelestialLogo,
  EchoLogo,
  PulseLogo,
  QuantumLogo,
} from '@/assets';
import Image from 'next/image';

const COMPANY_LOGOS = [
  { src: AcmeLogo, name: 'Acme Corporation' },
  { src: ApexLogo, name: 'Apex Technologies' },
  { src: CelestialLogo, name: 'Celestial Systems' },
  { src: EchoLogo, name: 'Echo Innovations' },
  { src: PulseLogo, name: 'Pulse Digital' },
  { src: QuantumLogo, name: 'Quantum Solutions' },
];

export function LogoThicker() {
  return (
    <section
      id="logo-thicker"
      className="py-20 md:py-24"
      aria-label="Our Trusted Partners"
    >
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1">
            <h2 className="text-2xl font-bold">
              Trusted by top innovative teams
            </h2>
          </div>
          <div
            className="flex-1 overflow-hidden [mask:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
            role="group"
            aria-label="Partner company logos"
          >
            <div className="flex gap-6">
              {COMPANY_LOGOS.map((logo) => (
                <div key={logo.name} className="relative aspect-square w-full">
                  <Image
                    src={logo.src.src}
                    alt={`${logo.name} logo`}
                    fill
                    sizes="(max-width: 768px) 60vw, 60vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
