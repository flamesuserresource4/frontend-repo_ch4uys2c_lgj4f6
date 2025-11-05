import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">About Me</h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              I’m Vickey — a full‑stack web developer focused on building fast, accessible, and user‑friendly digital products. I love bringing ideas to life with clean code and modern design, blending strong engineering with a keen eye for detail.
            </p>
            <p className="mt-3 leading-relaxed text-slate-300">
              My core stack includes Nuxt, Vue, JavaScript, PHP (Yii), Python, HTML, and CSS. I enjoy working end‑to‑end: architecture, APIs, performance, and delightful UI interactions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Skills</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                'Nuxt',
                'Vue',
                'JavaScript',
                'PHP / Yii',
                'Python',
                'HTML',
                'CSS',
                'REST APIs',
                'Responsive UI',
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-200 shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
