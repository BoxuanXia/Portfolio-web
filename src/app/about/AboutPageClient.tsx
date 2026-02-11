'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AboutContent, AboutSection } from '@/data/about-content';
import { getAssetPath } from '@/lib/utils';

const viewport = { once: true, amount: 0.35 };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

interface AboutPageClientProps {
  content: AboutContent;
}

export function AboutPageClient({ content }: AboutPageClientProps) {
  return (
    <main className="overflow-x-hidden bg-[var(--background)]">
      {content.sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </main>
  );
}

interface SectionProps {
  section: AboutSection;
}

function Section({ section }: SectionProps) {
  switch (section.id) {
    case 'section1-cartographer':
      return <Hero section={section} />;
    case 'section2-began':
      return <Origin section={section} />;
    case 'section3-foundation':
      return <Foundation section={section} />;
    case 'section4-toolkit':
      return <Toolkit section={section} />;
    case 'section5-philosophy':
      return <Philosophy section={section} />;
    case 'section6-beyond':
      return <Beyond section={section} />;
    case 'section7-connect':
      return <CallToAction section={section} />;
    default:
      return null;
  }
}

function Hero({ section }: { section: AboutSection }) {
  return (
    <section className="bg-[#111] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-28 lg:flex-row lg:items-center lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-1 flex-col gap-8"
        >
          <div className="flex items-center gap-3 text-sm tracking-[0.24em] text-gray-400 uppercase">
            <span>{section.content.tag}</span>
            <span className="h-px w-10 bg-[var(--accent-burgundy)]" />
            <span className="text-xs">Scroll to read my story</span>
          </div>
          <h1
            className="text-6xl leading-[0.95] md:text-7xl lg:text-8xl"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {section.content.name}
          </h1>
          <p className="max-w-xl text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {section.content.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative hidden lg:block lg:flex-[0_0_320px] xl:flex-[0_0_380px]"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <img
              src={section.content.image?.startsWith('http') ? section.content.image : getAssetPath(section.content.image || '')}
              alt="Portrait of Boxuan Xia"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.45)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Origin({ section }: { section: AboutSection }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-6"
        >
          <Eyebrow number="01" label="Where it began" />
          <h2
            className="text-4xl leading-tight tracking-tight text-gray-900 whitespace-pre-line"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {section.content.heading}
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
            {section.content.body}
          </p>
          <div className="flex flex-col gap-3">
            {section.content.items?.map((item, i) =>
              typeof item === 'string' ? (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className="flex gap-3 text-base text-gray-700"
                >
                  <span className="bullet-dot" />
                  <span>{item}</span>
                </motion.div>
              ) : null
            )}
          </div>
          <div className="accent-line" />
        </motion.div>
      </div>
    </section>
  );
}

function Foundation({ section }: { section: AboutSection }) {
  return (
    <section className="bg-[var(--surface-alt)]">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-xl shadow-[0_30px_70px_-40px_rgba(0,0,0,0.5)]">
              <img
                src={section.content.image?.startsWith('http') ? section.content.image : getAssetPath(section.content.image || '')}
                alt="Campus and autumn trees"
                className="h-auto max-h-[420px] w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="order-1 flex flex-col gap-6 lg:order-2"
          >
            <Eyebrow number="02" label="The foundation" />
            <h2
              className="text-4xl leading-tight tracking-tight text-gray-900 whitespace-pre-line"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {section.content.heading}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">{section.content.body}</p>

            <div className="space-y-4 pt-2">
              {section.content.items?.map((item, i) => {
                if (!item || typeof item === 'string' || !('label' in item)) return null;
                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    className="flex gap-4"
                  >
                    <span className="bullet-dot mt-2" />
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                        {item.label}
                      </div>
                      <div className="text-lg text-gray-900">{item.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Toolkit({ section }: { section: AboutSection }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-8"
        >
          <Eyebrow number="03" label="The toolkit" />
          <div className="flex flex-col gap-4">
            <h2
              className="text-4xl leading-tight tracking-tight text-gray-900"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {section.content.heading}
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
              {section.content.body}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.content.items?.map((item, i) => {
              if (!item || typeof item === 'string' || !('title' in item)) return null;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className="soft-card p-5"
                >
                  <div className="text-lg font-semibold text-gray-900">{item.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-gray-600">{item.detail}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Philosophy({ section }: { section: AboutSection }) {
  return (
    <section className="bg-[#181818] text-white">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col items-center gap-8 text-center"
        >
          <Eyebrow number="04" label={section.content.tag || ''} dark />
          <blockquote
            className="text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            “{section.content.quote}”
          </blockquote>
          <div className="accent-line" />
          <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
            {section.content.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Beyond({ section }: { section: AboutSection }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            <Eyebrow number="05" label="Beyond the map" />
            <h2
              className="text-4xl leading-tight tracking-tight text-gray-900 whitespace-pre-line"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {section.content.heading}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">{section.content.body}</p>
            <div className="accent-line" />
            <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
              {section.content.facts?.map((fact, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className="grid grid-cols-[120px_1fr] bg-white px-4 py-4 text-sm text-gray-700"
                >
                  <span className="uppercase tracking-wide text-gray-500">{fact.label}</span>
                  <span className="font-medium text-gray-900">{fact.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl shadow-[0_30px_70px_-40px_rgba(0,0,0,0.5)]">
              <img
                src={section.content.image?.startsWith('http') ? section.content.image : getAssetPath(section.content.image || '')}
                alt="City skyline"
                className="h-auto max-h-[420px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CallToAction({ section }: { section: AboutSection }) {
  return (
    <section className="bg-[#111] text-white">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:py-24 text-center space-y-8">
        <span className="text-sm font-semibold tracking-[0.24em] uppercase text-gray-400">
          {section.content.tag}
        </span>
        <h2
          className="text-4xl md:text-5xl leading-tight whitespace-pre-line"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          {section.content.heading}
        </h2>
        <p className="text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
          {section.content.body}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link href="/contact">
            <button className="px-8 py-3 rounded-md bg-[var(--accent-burgundy)] text-white font-semibold tracking-tight transition hover:brightness-110">
              Get in Touch
            </button>
          </Link>
          <Link href="/work">
            <button className="px-8 py-3 rounded-md border border-gray-600 text-white font-semibold tracking-tight transition hover:bg-[#1f1f1f]">
              View Work
            </button>
          </Link>
        </div>
        <div className="text-sm text-gray-500">boxuan.xia@email.com</div>
      </div>
    </section>
  );
}

function Eyebrow({ number, label, dark }: { number: string; label: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em]">
      <span
        className={`text-3xl font-light ${dark ? 'text-gray-400' : 'text-gray-300'}`}
        style={{ fontFamily: 'Cormorant Garamond, serif' }}
      >
        {number}
      </span>
      <span className="h-px w-10 bg-[var(--accent-burgundy)]" />
      <span className={`text-xs font-semibold ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  );
}
