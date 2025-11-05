import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Portfolio',
    description:
      'A modern, animated personal site with an interactive 3D hero, project case studies, and smooth page transitions.',
    tech: ['Nuxt', 'Vue', 'Tailwind', 'Framer Motion'],
    image:
      'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop',
    github: '#',
    demo: '#projects',
  },
  {
    title: 'E‑commerce API',
    description:
      'A robust backend service with authentication, product catalogs, and order workflows, built with Python and Yii.',
    tech: ['Python', 'FastAPI', 'PHP / Yii', 'MongoDB'],
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Responsive, data‑dense dashboard with interactive charts, server‑side pagination, and real‑time updates.',
    tech: ['JavaScript', 'Vue', 'HTML', 'CSS'],
    image:
      'https://images.unsplash.com/photo-1551281044-8bf4e4250713?q=80&w=1600&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Projects</h2>
            <p className="mt-2 text-slate-400">Selected work showcasing craft and capability.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg transition hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-slate-800/70 px-2 py-1 text-xs text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.github}
                    className="inline-flex items-center gap-2 rounded-md border border-slate-700/80 bg-slate-800/60 px-3 py-1.5 text-sm text-slate-200 transition hover:bg-slate-700"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
                  >
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
