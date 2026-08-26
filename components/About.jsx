export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 py-16 sm:py-20 bg-[#0F172A]"
    >
      {/* Content */}
      <div className="max-w-4xl about-content text-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F8FAFC]">
          About{' '}
          <span className="bg-gradient-to-r from-[#F8FAFC] via-[#9ED0E0] to-[#6FA3B8] bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#F8FAFC]">
          Software Engineer{' '}
          <span className="text-[#6FA3B8]">&amp;</span>{' '}
          Full Stack Developer
        </h3>

        <p className="text-lg md:text-xl leading-relaxed text-slate-300 text-justify sm:text-center md:text-justify max-w-3xl mx-auto">
          I&apos;m a{' '}
          <span className="font-semibold text-[#F8FAFC]">
            Fresh Graduate Software Engineer
          </span>{' '}
          and full-stack developer who builds modern, scalable web
          applications from the ground up. I work with{' '}
          <span className="text-[#9ED0E0]">
            MongoDB, Express.js, React.js &amp; Node.js
          </span>{' '}
          to build clean, functional products — from database design to
          finished user interfaces — and build mobile apps with{' '}
          <span className="text-[#9ED0E0]">Flutter</span>. I hold a{' '}
          <span className="font-semibold text-[#F8FAFC]">
            BS in Software Engineering from Riphah International University
          </span>{' '}
          (2022 – 2026) and am interning at{' '}
          <span className="font-semibold text-[#F8FAFC]">
            Al-Raheem Technologies
          </span>{' '}
          while growing my skills through real-world projects.
        </p>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center max-w-3xl mx-auto">
          {[
            ['3+', 'Projects Built'],
            ['16+', 'Certifications'],
            ['8+', 'Tech Skills'],
            ['2026', 'Graduated'],
          ].map(([num, text]) => (
            <div
              key={text}
              className="p-4 rounded-xl border border-[#6FA3B8]/20 bg-[#6FA3B8]/10"
            >
              <h4 className="text-3xl font-bold text-[#9ED0E0]">{num}</h4>
              <p className="text-slate-400 text-sm mt-1">{text}</p>
            </div>
          ))}
        </div>

        {/* Skills pills */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {[
            'HTML',
            'CSS',
            'JavaScript',
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'REST APIs',
            'Flutter',
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 rounded-full text-sm border border-[#6FA3B8]/30 bg-[#6FA3B8]/10 text-[#9ED0E0] hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}