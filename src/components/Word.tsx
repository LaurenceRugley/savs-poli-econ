import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// A persistent, mobile-friendly definition card.
// Tap opens it; tap outside / Esc / X closes it.
// Optional `emoji` for a visual anchor in the card header.
export function Word({
  definition,
  emoji,
  children,
}: {
  definition: string;
  emoji?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const [side, setSide] = useState<'top' | 'bottom'>('bottom');

  // Position above the trigger when there isn't room below
  useEffect(() => {
    if (!open || !triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    setSide(window.innerHeight - r.bottom < 200 ? 'top' : 'bottom');
  }, [open]);

  // Dismiss on outside click or Esc
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      const t = e.target as Node;
      if (
        !triggerRef.current?.contains(t) &&
        !popRef.current?.contains(t)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <span className="relative inline-block">
      <button
        ref={triggerRef}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className={`word-tip bg-transparent border-0 p-0 m-0 font-inherit text-inherit cursor-help ${
          open ? 'text-gold' : ''
        }`}
        aria-expanded={open}
      >
        {children}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={popRef}
            initial={{ opacity: 0, y: side === 'bottom' ? -4 : 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: side === 'bottom' ? -4 : 4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`absolute left-1/2 -translate-x-1/2 z-30 w-64 sm:w-72 ${
              side === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'
            }`}
            role="dialog"
          >
            <div className="relative bg-limestone border border-gold-light rounded-lg shadow-[0_10px_40px_-10px_rgba(42,34,24,0.25)] p-3 pr-7">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-1.5 right-2 text-ink/40 hover:text-ink text-base leading-none"
              >
                ×
              </button>
              {emoji && (
                <div className="text-2xl leading-none mb-1.5">{emoji}</div>
              )}
              <p className="text-sm leading-snug text-ink/90 m-0">
                {definition}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
