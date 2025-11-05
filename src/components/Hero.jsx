import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 md:pt-36">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs md:text-sm tracking-wide text-slate-200 backdrop-blur">
            Vickey • Portfolio
          </span>
          <h1 className="mt-6 text-3xl md:text-6xl font-semibold leading-tight">
            Building thoughtful web experiences
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 md:text-lg">
            Nuxt, Vue, JavaScript, PHP (Yii), Python, HTML, and CSS — crafting fast, accessible, and elegant products.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-slate-900 shadow hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5">
            <a
              aria-label="GitHub"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-full border border-white/15 bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-full border border-white/15 bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              aria-label="Email"
              href="mailto:vickey.dev@example.com"
              className="group rounded-full border border-white/15 bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 text-xs text-slate-300 sm:grid-cols-3 md:grid-cols-6">
          {['Nuxt', 'Vue', 'JavaScript', 'PHP / Yii', 'Python', 'HTML & CSS'].map((skill) => (
            <div
              key={skill}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center backdrop-blur"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
