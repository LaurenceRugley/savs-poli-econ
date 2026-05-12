import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollIntro } from '@/components/ScrollIntro';
import { ThreeBranches, Scissors } from '@/components/Illustrations';
import { GradientRule } from '@/components/Editorial';

export function Home() {
  return (
    <>
      {/* HERO */}
      <header className="relative max-w-prose mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="sans text-xs uppercase tracking-[0.35em] text-gold mb-6">
            for savs · with love
          </p>
          <h1 className="serif text-ink leading-[0.95] mb-3" style={{ fontSize: 'clamp(3.5rem, 11vw, 6rem)' }}>
            A Gentle
          </h1>
          <h1 className="serif italic text-ink leading-[0.95] mb-8" style={{ fontSize: 'clamp(3.5rem, 11vw, 6rem)' }}>
            Introduction.
          </h1>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold" />
            <Scissors size={40} className="text-gold" />
            <span className="h-px w-12 bg-gold" />
          </div>
          <p className="prose-savs text-body-lg !mb-2 max-w-[34rem]">
            Hi Savs — this is a little plain-English walkthrough of some big ideas that get
            thrown around in the news all the time. No jargon. No agenda. No textbook smell.
          </p>
          <p className="prose-savs italic text-body-lg max-w-[34rem]">
            Just the basics — so when something comes up, you have a foundation. Love you. — L
          </p>

          {/* Cue the reader to scroll */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="mt-16 flex items-center gap-2 text-gold sans text-xs uppercase tracking-[0.3em]"
          >
            <span>scroll</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
          </motion.div>
        </motion.div>
      </header>

      {/* SCROLLYTELLING — salon as economy */}
      <ScrollIntro />

      {/* TRANSITION */}
      <section className="max-w-prose mx-auto px-6 pt-12 md:pt-20">
        <p className="dot-rule sans text-xs uppercase tracking-[0.3em] text-gold/80 text-center mb-6">
          So
        </p>
        <h2 className="serif text-display-md md:text-display-lg text-ink text-center leading-[1.1] mb-4">
          Those are the three big ideas people argue about.
        </h2>
        <p className="prose-savs text-body-lg text-center mx-auto max-w-[34rem] !mb-0">
          Capitalism, socialism, communism — different answers to the same questions about
          who owns the stuff, who decides, and how the money gets split. Here's the longer
          version, with examples you can actually point at.
        </p>
      </section>

      {/* PART CARDS */}
      <section className="max-w-wide mx-auto px-6 mt-12 md:mt-16 grid md:grid-cols-2 gap-6">
        <PartCard
          n="01"
          title="Three Economic Systems"
          kicker="Capitalism · Socialism · Communism"
          description="What each one actually means in normal English — using salons and tip pools and chair-rent."
          to="/part-one"
          accent="gold"
          ill={<Scissors size={64} className="text-ink/70" />}
        />
        <PartCard
          n="02"
          title="How Our Government Works"
          kicker="Congress · the President · the Courts"
          description="Three branches that push back on each other. Why no single person gets to run away with the whole show."
          to="/part-two"
          accent="sage"
          ill={<ThreeBranches size={120} className="text-ink/70" />}
        />
      </section>

      <GradientRule />

      <section className="max-w-prose mx-auto px-6 pb-20 text-center">
        <p className="serif italic text-display-sm text-ink/85">
          Read it like a magazine. Tap anything you don't recognize. Text me anytime. — L
        </p>
      </section>
    </>
  );
}

function PartCard({
  n,
  title,
  kicker,
  description,
  to,
  accent,
  ill,
}: {
  n: string;
  title: string;
  kicker: string;
  description: string;
  to: string;
  accent: 'gold' | 'sage';
  ill: React.ReactNode;
}) {
  const tone =
    accent === 'sage'
      ? 'from-[#F3F1EC] to-[#E4E9DD]'
      : 'from-[#FAF5EB] to-[#F0E1C3]';
  return (
    <Link to={to} className="block no-underline group">
      <article
        className={`card-lift bg-gradient-to-br ${tone} border border-gold-light/50 rounded-2xl p-7 md:p-9 h-full`}
      >
        <div className="flex items-start justify-between mb-5">
          <p className="serif italic text-gold/80 text-4xl leading-none">{n}</p>
          <div className="opacity-80 group-hover:opacity-100 transition-opacity">{ill}</div>
        </div>
        <p className="sans text-xs uppercase tracking-[0.25em] text-ink/70 mb-2">{kicker}</p>
        <h3 className="serif text-display-md text-ink mb-3 leading-tight">{title}</h3>
        <p className="prose-savs !text-body !mb-5">{description}</p>
        <p className="arrow-link sans text-sm uppercase tracking-[0.2em] text-ink font-medium">
          Read this part <span className="arrow">→</span>
        </p>
      </article>
    </Link>
  );
}
