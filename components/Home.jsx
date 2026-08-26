'use client';
import { useEffect, useState } from 'react';
import {
  Briefcase,
  Palette,
  Download,
  FileDown,
  FolderGit2,
  Sparkles,
} from 'lucide-react';

import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

export default function Home() {
  const texts = [
    'Software Engineer',
    'Full Stack Developer',
    'Web & App Developer',
    'Flutter Developer',
  ];

  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    let timeout;

    if (forward) {
      if (charIdx < texts[idx].length) {
        timeout = setTimeout(() => {
          setDisplay(texts[idx].slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 85);
      } else {
        timeout = setTimeout(() => setForward(false), 1200);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplay(texts[idx].slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 55);
      } else {
        setIdx((i) => (i + 1) % texts.length);
        setForward(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, forward, idx]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 pt-28 pb-16 bg-[#020617] text-white"
    >
      {/* background glows */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-20 right-20 w-72 h-72 bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
        {/* LEFT */}
        <div className="max-w-xl z-10 text-center lg:text-left flex flex-col justify-center">
          <p className="uppercase tracking-[4px] text-sm text-[#9ED0E0] mb-4 font-semibold flex items-center gap-2 justify-center lg:justify-start">
            <Sparkles size={16} />
            Available For Projects
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-3">
            <span className="block bg-gradient-to-r from-white to-[#9ED0E0] bg-clip-text text-transparent">
              Muddasir
            </span>
            <span className="block bg-gradient-to-r from-[#6FA3B8] to-[#d7f1fa] bg-clip-text text-transparent">
              Khan
            </span>
          </h1>

          <h3 className="text-xl h-10 text-slate-300 mb-5">
            I&apos;m a{' '}
            <span className="text-[#9ED0E0] font-semibold border-r-2 border-[#9ED0E0] pr-1 animate-pulse">
              {display}
            </span>
          </h3>

          {/* tags */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-5">
            {['Full Stack', 'React.js', 'Node.js', 'MongoDB', 'REST APIs', 'Flutter'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-[#6FA3B840] bg-[#6FA3B815] text-[#cdebf5] text-sm hover:scale-105 transition"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-slate-400 leading-7 text-base max-w-lg mb-6 text-justify sm:text-left">
            Fresh Graduate Software Engineer and full-stack developer who builds
            modern, scalable web applications — from database design to clean,
            functional user interfaces. Currently interning at Al-Raheem Technologies.
          </p>

          {/* buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6FA3B8] hover:bg-[#88bfd6] hover:shadow-[0_0_25px_#6FA3B880] hover:scale-105 font-semibold transition-all duration-300 text-white"
            >
              <Sparkles size={18} />
              Get In Touch
            </a>

            <a
              href="/assets/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6FA3B8] hover:bg-[#88bfd6] hover:shadow-[0_0_25px_#6FA3B880] hover:scale-105 font-semibold transition-all duration-300"
            >
              <FileDown size={18} />
              Download CV
            </a>

            <a
              href="#portfolio"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6FA3B8] hover:bg-[#88bfd6] hover:shadow-[0_0_25px_#6FA3B880] hover:scale-105 font-semibold transition-all duration-300"
            >
              <FolderGit2 size={18} />
              View Project
            </a>
          </div>

          {/* socials */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {[
              { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=muhammadmuddasirkhan7@gmail.com&su=Portfolio%20Inquiry', icon: <FaEnvelope />, label: 'Email' },
              { href: 'https://www.linkedin.com/in/muhammad-muddasir-khan-661178429/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
              { href: 'https://github.com/Muddasir123420', icon: <FaGithub />, label: 'GitHub' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-[#6FA3B830] bg-white/5 backdrop-blur-md flex items-center justify-center text-[#9ED0E0] text-xl hover:scale-110 hover:border-[#9ED0E0] hover:shadow-[0_0_22px_#6FA3B870] transition-all duration-300"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — profile image with badges */}
        <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] flex items-center justify-center z-10 mx-auto lg:mx-0 shrink-0">
          {/* glow */}
          <div className="absolute w-[115%] h-[115%] rounded-full bg-[#6FA3B825] blur-[80px] animate-pulse" />

          {/* rings */}
          <div className="absolute inset-[-24px] sm:inset-[-30px] rounded-full border border-[#6FA3B840] animate-[spin_30s_linear_infinite_reverse]" />
          <div className="absolute inset-[-10px] sm:inset-[-14px] rounded-full border border-dashed border-[#6FA3B840] animate-[spin_18s_linear_infinite]" />

          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6FA3B840] to-transparent animate-pulse" />

          <img
            src="/assets/muddasir.jpeg"
            alt="Muddasir Khan"
            className="relative z-10 w-full h-full object-cover object-top rounded-full border-[5px] sm:border-[6px] border-white/20 shadow-[0_0_60px_#6FA3B850]"
          />

          {/* badge top right */}
          <div className="absolute top-4 -right-4 sm:-right-8 md:-right-12 bg-[#0f172a]/90 backdrop-blur-md border border-[#6FA3B840] px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl flex gap-2 items-center text-xs sm:text-sm shadow-lg whitespace-nowrap z-20 animate-bounce">
            <Palette size={16} className="text-[#9ED0E0]" />
            Software Engineer
          </div>

          {/* badge bottom left */}
          <div
            className="absolute bottom-4 -left-4 sm:-left-8 md:-left-12 bg-[#0f172a]/90 backdrop-blur-md border border-[#6FA3B840] px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl flex gap-2 items-center text-xs sm:text-sm shadow-lg whitespace-nowrap z-20 animate-bounce"
            style={{ animationDelay: '1s' }}
          >
            <Briefcase size={16} className="text-[#9ED0E0]" />
            Full Stack Developer
          </div>
        </div>
      </div>
    </section>
  );
}