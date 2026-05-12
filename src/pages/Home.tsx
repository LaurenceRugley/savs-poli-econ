import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <main className="max-w-prose mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="sans text-sm uppercase tracking-widest text-gold mb-4">For Savs · with love</p>
        <h1 className="serif text-display-xl text-ink leading-none mb-2">A Gentle</h1>
        <h1 className="serif italic text-display-xl text-ink leading-none mb-6">Introduction</h1>
        <hr className="border-0 h-[2px] bg-gold w-32 mb-6" />
        <p className="prose-savs text-body-lg">
          Hi Savs — this is a little plain-English walkthrough of some big ideas that get
          thrown around in the news all the time. No jargon, no political agenda. Just the
          basics so you have a foundation.
        </p>
        <p className="prose-savs italic text-body-lg">Love you. — L</p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-12 space-y-4"
      >
        <PartCard
          number="1"
          title="Three Economic Systems"
          description="Capitalism, socialism, and communism — what they actually mean, in normal English."
          to="/part-one"
        />
        <PartCard
          number="2"
          title="How Our Government Works"
          description="Congress, the President, the Supreme Court, and how they keep each other in check."
          to="/part-two"
        />
      </motion.section>
    </main>
  );
}

function PartCard({ number, title, description, to }: { number: string; title: string; description: string; to: string }) {
  return (
    <Link
      to={to}
      className="block group p-6 bg-white border border-gold-light rounded-lg hover:border-gold transition-all hover:shadow-md no-underline"
    >
      <div className="flex items-start gap-5">
        <div className="serif italic text-display-lg text-gold leading-none">{number}</div>
        <div className="flex-1">
          <h3 className="serif text-display-sm text-ink mb-1 group-hover:text-gold transition-colors">{title}</h3>
          <p className="prose-savs !text-body !mb-0">{description}</p>
          <p className="sans text-xs uppercase tracking-wider text-gold mt-3">Read this part →</p>
        </div>
      </div>
    </Link>
  );
}
