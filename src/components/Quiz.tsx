import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export function Quiz({ title = 'Quick check', questions }: { title?: string; questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [revealed, setRevealed] = useState<boolean[]>(Array(questions.length).fill(false));

  const handle = (qi: number, oi: number) => {
    if (revealed[qi]) return;
    const a = [...answers]; a[qi] = oi; setAnswers(a);
    const r = [...revealed]; r[qi] = true; setRevealed(r);
  };

  const done = revealed.every(Boolean);
  const correct = answers.reduce<number>((acc, a, i) => (a === questions[i].correctIndex ? acc + 1 : acc), 0);

  return (
    <div className="callout">
      <h4 className="serif text-display-sm text-ink mb-3 mt-0">{title}</h4>
      <div className="space-y-5">
        {questions.map((q, qi) => (
          <div key={qi} className="border-l-2 border-gold pl-4">
            <p className="font-medium mb-2">
              <span className="text-gold mr-2">Q{qi + 1}.</span>{q.question}
            </p>
            <div className="space-y-1.5">
              {q.options.map((opt, oi) => {
                const isCorrect = oi === q.correctIndex;
                const isSelected = answers[qi] === oi;
                const isRevealed = revealed[qi];
                let cls = 'block w-full text-left px-3 py-2 border rounded bg-white border-gold-light text-ink hover:bg-limestone-dark text-sm transition-colors';
                if (isRevealed && isCorrect) cls = 'block w-full text-left px-3 py-2 border-2 rounded bg-green-50 border-green-700 text-ink text-sm';
                else if (isRevealed && isSelected && !isCorrect) cls = 'block w-full text-left px-3 py-2 border-2 rounded bg-red-50 border-red-700 text-ink text-sm';
                return (
                  <button key={oi} className={cls} onClick={() => handle(qi, oi)} disabled={isRevealed}>
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
                  className="mt-2 pl-2 text-sm italic text-ink/80 not-italic"
                >
                  {q.explanation}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      {done && (
        <p className="serif italic text-display-sm text-ink mt-4 mb-0">
          {correct === questions.length ? 'Nice — you got all of them.' : correct >= questions.length * 0.7 ? "That's the shape of it." : "Worth another look — and ask me anytime."}
        </p>
      )}
    </div>
  );
}
