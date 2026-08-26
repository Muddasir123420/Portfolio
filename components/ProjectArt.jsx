export function TenantArt() {
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tenantBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#12283a" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="tenantBuild" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ED0E0" />
          <stop offset="100%" stopColor="#3F7A93" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#tenantBg)" />
      <circle cx="335" cy="45" r="30" fill="#9ED0E0" opacity="0.12" />

      {/* back building */}
      <rect x="55" y="70" width="70" height="140" rx="4" fill="#1c3247" />
      {Array.from({ length: 5 }).map((_, r) =>
        Array.from({ length: 3 }).map((__, c) => (
          <rect key={`b-${r}-${c}`} x={66 + c * 20} y={82 + r * 24} width="12" height="14" rx="1.5" fill="#6FA3B8" opacity="0.55" />
        ))
      )}

      {/* main building */}
      <rect x="150" y="40" width="110" height="170" rx="5" fill="url(#tenantBuild)" />
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 4 }).map((__, c) => (
          <rect
            key={`m-${r}-${c}`}
            x={163 + c * 22}
            y={54 + r * 25}
            width="14"
            height="16"
            rx="1.5"
            fill={(r + c) % 3 === 0 ? '#FDE68A' : '#0F172A'}
            opacity={(r + c) % 3 === 0 ? 0.9 : 0.35}
          />
        ))
      )}
      <rect x="192" y="185" width="26" height="25" rx="2" fill="#0F172A" />

      {/* third building */}
      <rect x="275" y="100" width="55" height="110" rx="4" fill="#254157" />
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 2 }).map((__, c) => (
          <rect key={`s-${r}-${c}`} x={285 + c * 22} y={112 + r * 22} width="11" height="12" rx="1.5" fill="#9ED0E0" opacity="0.5" />
        ))
      )}

      {/* ground */}
      <rect x="0" y="210" width="400" height="30" fill="#0b1420" />
      <rect x="0" y="210" width="400" height="2" fill="#6FA3B8" opacity="0.4" />
    </svg>
  );
}

export function EnterpriseArt() {
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="entBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#12283a" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#entBg)" />
      <circle cx="60" cy="50" r="34" fill="#9ED0E0" opacity="0.1" />

      {/* browser window */}
      <rect x="60" y="45" width="280" height="160" rx="10" fill="#152840" stroke="#6FA3B8" strokeOpacity="0.4" />
      <rect x="60" y="45" width="280" height="26" rx="10" fill="#1c3247" />
      <circle cx="76" cy="58" r="4" fill="#F27878" />
      <circle cx="90" cy="58" r="4" fill="#F2C069" />
      <circle cx="104" cy="58" r="4" fill="#62C554" />

      {/* nav bar */}
      <rect x="76" y="86" width="248" height="14" rx="4" fill="#233C52" />
      <rect x="76" y="86" width="60" height="14" rx="4" fill="#6FA3B8" />

      {/* hero content */}
      <rect x="76" y="112" width="120" height="10" rx="3" fill="#9ED0E0" />
      <rect x="76" y="128" width="160" height="8" rx="3" fill="#3f5568" />
      <rect x="76" y="142" width="130" height="8" rx="3" fill="#3f5568" />
      <rect x="76" y="160" width="64" height="20" rx="6" fill="#6FA3B8" />

      {/* card graphic */}
      <rect x="250" y="108" width="74" height="74" rx="8" fill="#0F172A" stroke="#6FA3B8" strokeOpacity="0.5" />
      <path d="M270 152 L285 132 L300 148 L312 128" stroke="#9ED0E0" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="270" cy="152" r="3.5" fill="#9ED0E0" />
      <circle cx="285" cy="132" r="3.5" fill="#9ED0E0" />
      <circle cx="300" cy="148" r="3.5" fill="#9ED0E0" />
      <circle cx="312" cy="128" r="3.5" fill="#9ED0E0" />

      <rect x="0" y="210" width="400" height="30" fill="#0b1420" />
      <rect x="0" y="210" width="400" height="2" fill="#6FA3B8" opacity="0.4" />
    </svg>
  );
}

export function RideArt() {
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rideBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#12283a" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#rideBg)" />
      <circle cx="330" cy="50" r="30" fill="#9ED0E0" opacity="0.12" />

      {/* road */}
      <rect x="0" y="150" width="400" height="60" fill="#152840" />
      <rect x="0" y="150" width="400" height="4" fill="#6FA3B8" opacity="0.5" />
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} x={10 + i * 52} y="178" width="26" height="6" rx="3" fill="#3f5568" />
      ))}

      {/* location pin */}
      <path d="M320 60c-14 0-24 10-24 24 0 18 24 46 24 46s24-28 24-46c0-14-10-24-24-24z" fill="#9ED0E0" />
      <circle cx="320" cy="84" r="9" fill="#0F172A" />

      {/* car body */}
      <rect x="90" y="118" width="150" height="34" rx="10" fill="#6FA3B8" />
      <path d="M110 118 L128 92 L200 92 L216 118 Z" fill="#9ED0E0" />
      <rect x="140" y="98" width="34" height="20" rx="3" fill="#0F172A" opacity="0.55" />
      <circle cx="122" cy="154" r="16" fill="#0F172A" />
      <circle cx="122" cy="154" r="7" fill="#9ED0E0" />
      <circle cx="206" cy="154" r="16" fill="#0F172A" />
      <circle cx="206" cy="154" r="7" fill="#9ED0E0" />
      <rect x="238" y="128" width="14" height="10" rx="2" fill="#FDE68A" />

      {/* motion lines */}
      <rect x="50" y="126" width="26" height="4" rx="2" fill="#6FA3B8" opacity="0.5" />
      <rect x="35" y="138" width="34" height="4" rx="2" fill="#6FA3B8" opacity="0.35" />

      <rect x="0" y="210" width="400" height="30" fill="#0b1420" />
      <rect x="0" y="210" width="400" height="2" fill="#6FA3B8" opacity="0.4" />
    </svg>
  );
}
