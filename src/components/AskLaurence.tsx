export function AskLaurence({ topic }: { topic?: string }) {
  const body = topic
    ? `Hey L — quick question about ${topic} from the refresher.`
    : 'Hey L — quick question from the refresher.';
  const href = `sms:909-753-2601?&body=${encodeURIComponent(body)}`;
  return (
    <a
      href={href}
      className="inline-block mt-4 px-4 py-2 bg-ink text-limestone hover:bg-gold transition-colors rounded text-sm sans no-underline"
    >
      Ask Laurence about this
    </a>
  );
}
