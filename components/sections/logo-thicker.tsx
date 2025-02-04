'use client';
import {
  AcmeLogo,
  ApexLogo,
  CelestialLogo,
  EchoLogo,
  PulseLogo,
  QuantumLogo,
} from '@/assets';
import { motion } from 'motion/react';

const COMPANY_LOGOS = [
  { src: AcmeLogo, name: 'Acme Corporation' },
  { src: ApexLogo, name: 'Apex Technologies' },
  { src: CelestialLogo, name: 'Celestial Systems' },
  { src: EchoLogo, name: 'Echo Innovations' },
  { src: PulseLogo, name: 'Pulse Digital' },
  { src: QuantumLogo, name: 'Quantum Solutions' },
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Trusted by top innovative teams
            </h2>
          </div>
          <div
            className="flex-1 overflow-hidden [mask:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
            role="group"
            aria-label="Partner company logos"
          >
            <motion.div
              initial={{ translate: '-50%' }}
              animate={{ translate: '0' }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
              className="flex flex-none -translate-x-1/2 flex-row gap-14 pr-14"
            >
              {COMPANY_LOGOS.map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={logo.name}
                  src={logo.src.src}
                  alt={`${logo.name} logo`}
                  className="h-6 w-auto flex-none"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
