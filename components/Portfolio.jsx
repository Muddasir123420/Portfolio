'use client';

import { TenantArt, EnterpriseArt, RideArt } from './ProjectArt';

export default function Portfolio() {
  const devProjects = [
    {
      title: 'Tenant Management System',
      desc: 'A complete full-stack system covering database design, backend logic, and frontend interface for managing tenants end-to-end.',
      tags: ['Database', 'Backend', 'Frontend'],
      Art: TenantArt,
    },
    {
      title: 'TS Enterprise',
      desc: 'A simple, clean business website built to represent the company\u2019s services and information online.',
      tags: ['Web', 'Frontend'],
      Art: EnterpriseArt,
    },
    {
      title: 'Ride N Serve',
      desc: 'A ride-service platform built as both a website and an app, connecting users with service providers.',
      tags: ['Web', 'App'],
      Art: RideArt,
    },
  ];

  const DevCard = ({ it }) => {
    const Art = it.Art;
    return (
      <div className="relative group">
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#6FA3B8] via-[#9ED0E0] to-[#6FA3B8] opacity-0 group-hover:opacity-100 blur-md transition duration-500 animate-gradient-border" />

        <div className="relative bg-[#0F172A] rounded-xl p-5 sm:p-6 h-full flex flex-col justify-between z-10 border border-[#6FA3B840] group-hover:border-[#9ED0E0] transition-all duration-300 overflow-hidden">

          <div className="h-36 sm:h-40 w-full rounded-lg mb-4 overflow-hidden border border-[#6FA3B830] group-hover:scale-105 transition duration-500">
            <Art />
          </div>

          <h5 className="font-semibold text-lg text-[#F8FAFC] group-hover:text-[#9ED0E0] transition duration-300 mb-2">
            {it.title}
          </h5>

          <p className="text-slate-400 text-sm mb-4">{it.desc}</p>

          <div className="flex flex-wrap gap-2">
            {it.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-[#6FA3B840] bg-[#6FA3B815] text-[#9ED0E0]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 px-5 sm:px-8 bg-[#0F172A] text-[#F8FAFC]">

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        My{' '}
        <span className="bg-gradient-to-r from-[#6FA3B8] via-[#9ED0E0] to-[#F8FAFC] bg-clip-text text-transparent">
          Portfolio
        </span>
      </h2>

      <p className="text-[#9ED0E0] text-lg text-center mb-16">
        Selected Development Projects
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {devProjects.map((it, idx) => (
          <DevCard key={idx} it={it} />
        ))}
      </div>

      <style jsx>{`
        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-border {
          background-size: 200% 200%;
          animation: gradient-border 4s linear infinite;
        }
      `}</style>
    </section>
  );
}