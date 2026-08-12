import { BadgeCheck } from 'lucide-react';

export default function Certifications() {
  const groups = [
    {
      issuer: 'Cisco Networking Academy',
      count: '9 certificates',
      items: [
        ['JavaScript Essentials 2', 'Nov 2024'],
        ['Python Essentials 1', 'Nov 2024'],
        ['Python Essentials 2', 'Nov 2024'],
        ['HTML Essentials', 'Apr 2025'],
        ['CSS Essentials', 'Apr 2025'],
        ['Discovering Entrepreneurship', 'Apr 2025'],
        ['Engaging Stakeholders for Success', 'Oct 2024'],
        ['NDG Linux Essentials', 'Apr 2024'],
        ['Programming Essentials in C++', 'Jan 2023'],
      ],
    },
    {
      issuer: 'Coursera',
      count: '6 certificates',
      items: [
        ['Performing Data Definition & Manipulation in SQL', 'Apr 2024'],
        ['Relational Modeling in Dia', 'Mar 2024'],
        ['HTML and CSS: Building a Single-Page Website', 'Jan 2023'],
        ['The Bash Shell and Basic Scripting in Linux', 'May 2024'],
        ['Command Line Basics in Linux', 'May 2024'],
        ['High-Quality Flyer & Animated GIF in Adobe Photoshop', 'May 2023'],
      ],
    },
    {
      issuer: 'HarvardX',
      count: '1 certificate',
      items: [["CS50's Introduction to Programming with Scratch", '2024']],
    },
  ];

  return (
    <section id="certifications" className="py-16 sm:py-24 px-5 sm:px-8 bg-[#0F172A] text-[#F8FAFC]">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        My{' '}
        <span className="bg-gradient-to-r from-[#6FA3B8] via-[#9ED0E0] to-[#F8FAFC] bg-clip-text text-transparent">
          Certifications
        </span>
      </h2>

      <p className="text-[#9ED0E0] text-lg text-center mb-16">
        Continuous learning across development &amp; tools
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group.issuer}
            className="bg-[#020617] border border-[#6FA3B840] rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#6FA3B840]">
              <h4 className="font-semibold text-[#F8FAFC]">{group.issuer}</h4>
              <span className="text-xs text-slate-400 border border-[#6FA3B840] rounded-full px-2 py-0.5">
                {group.count}
              </span>
            </div>

            <ul className="flex flex-col gap-3">
              {group.items.map(([name, date]) => (
                <li key={name} className="flex items-start gap-2 text-sm">
                  <BadgeCheck size={16} className="text-[#9ED0E0] shrink-0 mt-0.5" />
                  <span className="text-slate-300 flex-1">{name}</span>
                  <span className="text-slate-500 text-xs font-mono whitespace-nowrap">{date}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
