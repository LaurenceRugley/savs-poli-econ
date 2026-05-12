import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export function Quiz({
  title = 'Want to test it?',
  questions,
}: {
  title?: string;
  questions: QuizQuestion[];
}) {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [revealed, setRevealed] = useState<boolean[]>(Array(questions.length).fill(false));

  const handle = (qi: number, oi: number) => {
    if (revealed[qi]) return;
    const a = [...answers]; a[qi] = oi; setAnswers(a);
    const r = [...revealed]; r[qi] = true; setRevealed(r);
  };

  const done = revealed.every(Boolean);
  const correct = answers.reduce<number>(
    (acc, a, i) => (a === questions[i].correctIndex ? acc + 1 : acc),
    0,
  );

  return (
    <section className="my-14 md:my-20 max-w-prose mx-auto">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full text-center bg-limestone-dark/60 hover:bg-limestone-dark border border-gold-light/60 hover:border-gold rounded-xl px-6 py-7 transition-all card-lift"
        >
          <p className="sans text-xs uppercase tracking-[0.3em] text-gold mb-2">
            optional · ungraded
          </p>
          <p className="serif italic text-2xl md:text-3xl text-ink m-0">
            {title}
          </p>
          <p className="sans text-sm text-ink/60 mt-2 m-0">
            Tap to open · {questions.length} question{questions.length === 1 ? '' : 's'}
          </p>
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-gold-light/60 rounded-xl bg-white/60 backdrop-blur p-6 md:p-8"
        >
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="sans text-xs uppercase tracking-[0.3em] text-gold mb-1">quick check</p>
              <h4 className="serif text-2xl md:text-3xl text-ink m-0">{title}</h4>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-ink/40 hover:text-ink text-xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="space-y-7">
            {questions.map((q, qi) => (
              <div key={qi} className="border-l-2 border-gold-light pl-4">
                <p className="font-medium mb-3 m-0">
                  <span className="serif italic text-gold mr-2">{qi + 1}.</span>
                  {q.question}
                </p>
                <div className="space-y-1.5">
                  {q.options.map((opt, oi) => {
                    const isCorrect = oi === q.correctIndex;
                    const isSelected = answers[qi] === oi;
                    const isRevealed = revealed[qi];
                    let cls =
                      'block w-full text-left px-3.5 py-2.5 border border-gold-light/60 rounded-lg bg-white hover:bg-limestone-dark/40 text-ink text-sm transition-all';
                    if (isRevealed && isCorrect) {
                      cls = 'block w-full text-left px-3.5 py-2.5 border-2 rounded-lg text-sm border-[#7A9E7E] bg-[#E5EFE3] text-ink';
                    } else if (isRevealed && isSelected && !isCorrect) {
                      cls = 'block w-full text-left px-3.5 py-2.5 border-2 rounded-lg text-sm border-[#B97070] bg-[#F3E1E0] text-ink';
                    }
                    return (
                      <button
                        key={oi}
                        className={cls}
                        onClick={() => handle(qi, oi)}
                        disabled={isRevealed}
                      >
                        {opt}
                        {isRevealed && isCorrect && <span className="ml-2">✓</span>}
                        {isRevealed && isSelected && !isCorrect && <span className="ml-2">✗</span>}
                      </button>
                    );
                  })}
                </div>
                <AnimatePresence>
                  {revealed[qi] && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 px-3 text-sm leading-relaxed text-ink/80 italic"
                    >
                      {q.explanation}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {done && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-7 pt-5 border-t border-gold-light/50 text-center"
            >
              <p className="serif italic text-display-sm text-ink m-0">
                {correct === questions.length
                  ? 'Nice — you got all of them.'
                  : correct >= questions.length * 0.7
                    ? "That's the shape of it."
                    : 'Worth another look — and ask me anytime.'}
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </section>
  );
}
