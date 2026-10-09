/** Decorative hero art: question-mark speech bubble, stacked green books and a plant. */
export function FaqIllustration({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="100 24 420 330" className={className} fill="none">
      {/* Sparkle lines. */}
      <g stroke="#12A06E" strokeWidth="3" strokeLinecap="round">
        <path d="M335 62l16-8" />
        <path d="M340 86h20" />
        <path d="M335 110l16 8" />
      </g>

      {/* Speech bubble. */}
      <circle cx="270" cy="95" r="52" fill="#fff" stroke="#0E5A3A" strokeWidth="4" />
      <path d="M250 140l-14 30 38-20z" fill="#fff" stroke="#0E5A3A" strokeWidth="4" strokeLinejoin="round" />
      <path d="M244 136h30v10h-30z" fill="#fff" />
      <path
        d="M254 82c0-10 7-17 17-17s17 7 17 16c0 7-4 11-10 15-4 3-6 5-6 11M272 122v4"
        stroke="#0E5A3A"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Books, top to bottom. */}
      <ellipse cx="290" cy="326" rx="170" ry="9" fill="#0B3F2A" opacity="0.14" />

      <rect x="170" y="268" width="270" height="44" rx="6" fill="#F4F7F5" stroke="#CFE0D7" strokeWidth="2" />
      <rect x="150" y="274" width="270" height="38" rx="6" fill="#1C7A52" />
      <rect x="150" y="274" width="270" height="10" rx="5" fill="#2A9467" />

      <rect x="195" y="226" width="240" height="44" rx="6" fill="#F4F7F5" stroke="#CFE0D7" strokeWidth="2" />
      <rect x="175" y="232" width="240" height="38" rx="6" fill="#2E8B5E" />
      <rect x="175" y="232" width="240" height="10" rx="5" fill="#46A97B" />

      <rect x="215" y="186" width="210" height="42" rx="6" fill="#F4F7F5" stroke="#CFE0D7" strokeWidth="2" />
      <rect x="195" y="192" width="210" height="38" rx="6" fill="#0E5A3A" />
      <rect x="195" y="192" width="210" height="10" rx="5" fill="#187049" />

      {/* Plant. */}
      <path d="M455 322c0 14 8 24 22 24s22-10 22-24z" fill="#F4F7F5" stroke="#CFE0D7" strokeWidth="2" />
      <rect x="448" y="308" width="58" height="14" rx="5" fill="#fff" stroke="#CFE0D7" strokeWidth="2" />
      <path d="M477 310V210" stroke="#2E8B5E" strokeWidth="4" strokeLinecap="round" />
      <path d="M477 250c-34-6-44-32-38-56 28 4 44 26 38 56z" fill="#2E8B5E" />
      <path d="M477 236c30-10 38-36 30-58-26 8-40 30-30 58z" fill="#46A97B" />
      <path d="M477 282c-30 0-46-20-44-42 26 0 42 18 44 42z" fill="#1C7A52" />
      <path d="M477 270c26-4 40-24 36-44-24 4-38 22-36 44z" fill="#2A9467" />
      <path d="M477 212c-10-20-6-40 6-54 12 16 12 38-6 54z" fill="#46A97B" />
    </svg>
  );
}
