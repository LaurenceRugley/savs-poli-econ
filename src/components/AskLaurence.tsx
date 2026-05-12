// A quiet inline "ask me anything" link — not a sticky bubble.
// Replaces the previous footer button. Lives at the bottom of sections.
export function AskLaurence({ topic }: { topic?: string }) {
  const body = topic
    ? `Hey L — quick question about ${topic} from the refresher.`
    : 'Hey L — quick question from the refresher.';
  const href = `sms:909-753-2601?&body=${encodeURIComponent(body)}`;
  return (
    <a
      href={href}
      className="arrow-link inline-flex items-center gap-2 sans text-sm tracking-[0.05em] text-ink/70 hover:text-ink no-underline"
    >
      <span className="serif italic text-gold text-lg">— L</span>
      <span>text me about this</span>
      <span className="arrow">→</span>
    </a>
  );
}
