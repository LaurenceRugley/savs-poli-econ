import { useState, type ReactNode } from 'react';

export function Word({ definition, children }: { definition: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="word-tip bg-transparent border-0 p-0 m-0 font-inherit text-inherit cursor-help"
      >
        {children}
      </button>
      {open && (
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-30 w-60 text-left bg-ink text-limestone text-xs leading-snug rounded p-2 shadow-lg pointer-events-none">
          {definition}
        </span>
      )}
    </span>
  );
}
