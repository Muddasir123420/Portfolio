import { Briefcase } from 'lucide-react';

export default function Experience() {
  const jobs = [
    {
      role: 'Software Engineering Intern',
      org: 'Al-Raheem Technologies Pvt. Ltd.',
      date: 'Jul 2026 — Onward',
      current: true,
      desc: '6-month internship gaining hands-on industry experience in software development.',
    },
    {
      role: 'Software Developer',
      org: 'Global Business Associate',
      date: 'Jun 2024 — Aug 2025',
      current: false,
      desc: 'Worked on software development tasks and contributed to ongoing company projects.',
    },
    {
      role: 'Software Developer',
      org: 'Advance Technology',
      date: 'Feb 2021 — Dec 2023',
      current: false,
      desc: 'Worked on software development tasks and contributed to ongoing company projects.',
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-5 sm:px-8 bg-[#020617] text-[#F8FAFC]"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        Work{' '}
        <span className="bg-gradient-to-r from-[#6FA3B8] via-[#9ED0E0] to-[#F8FAFC] bg-clip-text text-transparent">
          Experience
        </span>
      </h2>

      <p className="text-[#9ED0E0] text-lg text-center mb-16">
        Where I&apos;ve worked and what I&apos;ve learned
      </p>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="relative bg-[#0F172A] border border-[#6FA3B840] hover:border-[#9ED0E0] rounded-xl p-6 flex gap-5 transition-all duration-300"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-[#6FA3B8]/10 border border-[#6FA3B840] flex items-center justify-center">
              <Briefcase size={20} className="text-[#9ED0E0]" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h4 className="text-lg font-semibold text-[#F8FAFC]">{job.role}</h4>
                {job.current && (
                  <span className="text-xs px-3 py-0.5 rounded-full border border-green-400/40 bg-green-400/10 text-green-400">
                    current
                  </span>
                )}
              </div>
              <p className="text-[#9ED0E0] text-sm font-medium mb-2">{job.org}</p>
              <p className="text-slate-400 text-sm mb-2 text-justify sm:text-left">{job.desc}</p>
              <p className="text-slate-500 text-xs font-mono">{job.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
