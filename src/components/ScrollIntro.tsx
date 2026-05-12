import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { SalonChair, ThreeChairs, TipJar, Capitol } from './Illustrations';

// A scrollytelling hero that turns the salon into an economy.
// Sticky left column with morphing illustration, prose blocks on the right
// that fade through as you scroll.
//
// Mobile: stacks vertically — illustration sticks at the top, prose flows below.
export function ScrollIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.25 });

  // Frame opacities: 4 evenly-spaced beats
  // Beat 0: salon chair only           [0.00 - 0.18]
  // Beat 1: three chairs / market      [0.20 - 0.40]
  // Beat 2: tip jar / shared pool      [0.42 - 0.62]
  // Beat 3: capitol / government       [0.64 - 1.00]
  const op0 = useTransform(p, [0.0, 0.1, 0.18, 0.22], [1, 1, 1, 0]);
  const op1 = useTransform(p, [0.18, 0.22, 0.40, 0.44], [0, 1, 1, 0]);
  const op2 = useTransform(p, [0.40, 0.44, 0.62, 0.66], [0, 1, 1, 0]);
  const op3 = useTransform(p, [0.62, 0.66, 0.9, 1], [0, 1, 1, 1]);

  // Subtle pan on each layer for life
  const y0 = useTransform(p, [0, 0.2], [0, -20]);
  const y1 = useTransform(p, [0.2, 0.42], [20, -20]);
  const y2 = useTransform(p, [0.42, 0.64], [20, -20]);
  const y3 = useTransform(p, [0.64, 1], [20, 0]);

  const beats = [
    {
      kicker: 'Imagine',
      h: 'You open your own salon.',
      p: "You buy the chairs. You set the prices. The clients pay you, and you decide what to do with what's left over after rent. Some of it you reinvest — better products, a new station. The rest is yours.",
    },
    {
      kicker: 'Now imagine three salons',
      h: 'And they all compete.',
      p: "Clients pick whichever salon they like best — the prices people will pay, the wages stylists will work for, the brands that survive — all of it gets sorted by people choosing. That sorting is what people mean when they say <em>the market.</em>",
    },
    {
      kicker: 'Now imagine',
      h: 'You all share a tip pool.',
      p: 'Maybe healthcare, maybe parental leave, maybe a fund that helps when somebody can\'t work. The salons stay private — you still own your chairs — but some of what you earn goes into a pool that helps everyone. That\'s closer to <em>social democracy</em>.',
    },
    {
      kicker: 'Now imagine',
      h: 'The state owns every salon.',
      p: 'One office somewhere decides the prices, the schedules, what products everyone uses. Nobody owns their chairs. That\'s the hard version of <em>socialism</em> — and in practice, every country that tried it ended up with one party in charge of everything.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative"
      // 4 beats × ~120vh each = enough scroll for each to breathe
      style={{ height: '460vh' }}
    >
      <div className="sticky top-[68px] h-[calc(100vh-68px)] overflow-hidden flex items-center">
        <div className="max-w-wide mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Sticky illustration column */}
          <div className="relative h-[34vh] md:h-[70vh] flex items-center justify-center text-ink/85 order-2 md:order-1">
            <motion.div style={{ opacity: op0, y: y0 }} className="absolute inset-0 flex items-center justify-center">
              <SalonChair size={Math.min(340, 80 * 4)} />
            </motion.div>
            <motion.div style={{ opacity: op1, y: y1 }} className="absolute inset-0 flex items-center justify-center">
              <ThreeChairs size={360} />
            </motion.div>
            <motion.div style={{ opacity: op2, y: y2 }} className="absolute inset-0 flex items-center justify-center">
              <TipJar size={300} />
            </motion.div>
            <motion.div style={{ opacity: op3, y: y3 }} className="absolute inset-0 flex items-center justify-center">
              <Capitol size={320} />
            </motion.div>
          </div>

          {/* Prose column */}
          <div className="relative h-[34vh] md:h-[70vh] flex items-center order-1 md:order-2">
            {beats.map((b, i) => {
              const op = [op0, op1, op2, op3][i];
              return (
                <motion.div
                  key={i}
                  style={{ opacity: op }}
                  className="absolute inset-0 flex flex-col justify-center pr-2"
                >
                  <p className="sans text-xs uppercase tracking-[0.3em] text-gold mb-2">
                    {b.kicker}
                  </p>
                  <h2 className="serif text-display-md md:text-display-lg text-ink leading-[1.05] mb-4 mt-0">
                    {b.h}
                  </h2>
                  <p
                    className="prose-savs !text-body-lg !mb-0"
                    dangerouslySetInnerHTML={{ __html: b.p }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
