import { motion, useScroll, useSpring } from 'framer-motion';
import { type ReactNode } from 'react';

// A magazine-style drop cap on the first letter of a paragraph.
// Usage:  <DropCap>The rest of the paragraph...</DropCap>
// The first character is rendered oversized in serif gold.
export function DropCap({ children }: { children: string }) {
  const text = String(children);
  const first = text.charAt(0);
  const rest = text.slice(1);
  return (
    <div className="prose-savs text-body mb-5">
      <span
        aria-hidden="true"
        className="serif text-[5.5rem] sm:text-[6.5rem] float-left leading-[0.78] mr-3 mt-1 text-gold italic"
      >
        {first}
      </span>
      <span className="sr-only">{first}</span>
      {rest}
      <div className="clear-both" />
    </div>
  );
}

// Editorial section break — italic gold numeral + hairline rule.
// Usage:  <Chapter n="II" title="The Soft Version" />
export function Chapter({ n, title }: { n: string; title?: string }) {
  return (
    <div className="my-24 text-center">
      <p
        className="serif italic text-gold leading-none mb-3"
        style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
      >
        {n}
      </p>
      <hr className="border-0 h-px bg-gold-light/70 w-24 mx-auto mb-4" />
      {title && (
        <p className="sans text-xs uppercase tracking-[0.3em] text-ink/60">
          {title}
        </p>
      )}
    </div>
  );
}

// A magazine pull quote. Big, italic, breathing room.
// Usage:  <Pull attribution="Marx, 1848">"Workers of the world, unite!"</Pull>
export function Pull({
  attribution,
  children,
}: {
  attribution?: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-12 md:my-16 md:-mx-12 lg:-mx-20 px-4">
      <div className="border-l-2 border-gold pl-6 md:pl-10">
        <div
          className="serif italic text-ink leading-[1.2]"
          style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.5rem)' }}
        >
          {children}
        </div>
        {attribution && (
          <figcaption className="sans text-xs uppercase tracking-[0.25em] text-gold/80 mt-4">
            — {attribution}
          </figcaption>
        )}
      </div>
    </figure>
  );
}

// A deliberate close on each section. Em-dash + initials, then a soft rule.
export function Coda({ children }: { children?: ReactNode }) {
  return (
    <div className="my-16 text-center">
      <div className="serif italic text-ink/85 text-body-lg mx-auto max-w-[28rem] mb-4 leading-relaxed">
        {children}
      </div>
      <div className="flex items-center justify-center gap-3 text-gold">
        <span className="h-px w-10 bg-gold-light" />
        <span className="serif italic text-base">— L</span>
        <span className="h-px w-10 bg-gold-light" />
      </div>
    </div>
  );
}

// Top-of-page scroll progress rail. 2px gold bar that fills as you read.
export function ReadingRail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-50 origin-left pointer-events-none"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

// A "wider spread" wrapper that breaks out of the prose column.
// Useful between sections for visual rhythm.
export function Spread({ children }: { children: ReactNode }) {
  return (
    <div className="my-10 md:my-14 md:-mx-10 lg:-mx-20">
      {children}
    </div>
  );
}

// A soft gradient divider between sections — instead of a hard <hr/>.
export function GradientRule({ tone = 'gold' }: { tone?: 'gold' | 'terracotta' | 'sage' }) {
  const gradient =
    tone === 'terracotta'
      ? 'from-transparent via-[#C68E6E]/60 to-transparent'
      : tone === 'sage'
        ? 'from-transparent via-[#8AA08A]/60 to-transparent'
        : 'from-transparent via-gold/60 to-transparent';
  return (
    <div className="my-16 md:my-20 flex items-center gap-4 max-w-prose mx-auto">
      <div className={`flex-1 h-px bg-gradient-to-r ${gradient}`} />
      <div className="w-1.5 h-1.5 rounded-full bg-gold/70" />
      <div className={`flex-1 h-px bg-gradient-to-r ${gradient}`} />
    </div>
  );
}
