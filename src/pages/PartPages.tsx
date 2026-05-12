import { MDXProvider } from '@mdx-js/react';
import PartOneContent from '@/content/part-one.mdx';
import PartTwoContent from '@/content/part-two.mdx';

const mdxComponents = {
  h1: (p: any) => (
    <h1
      className="serif text-ink leading-[0.95] mb-6 mt-2"
      style={{ fontSize: 'clamp(3rem, 9vw, 5rem)' }}
      {...p}
    />
  ),
  h2: (p: any) => <h2 className="serif text-display-md md:text-display-lg text-ink mt-12 mb-3 leading-tight" {...p} />,
  h3: (p: any) => <h3 className="serif italic text-display-sm text-ink mt-8 mb-2" {...p} />,
  h4: (p: any) => <h4 className="serif text-2xl text-ink mt-6 mb-2" {...p} />,
  p: (p: any) => <p className="prose-savs text-body" {...p} />,
  ul: (p: any) => <ul className="prose-savs list-disc pl-6 space-y-1.5 mb-4" {...p} />,
  ol: (p: any) => <ol className="prose-savs list-decimal pl-6 space-y-1.5 mb-4" {...p} />,
  li: (p: any) => <li className="prose-savs !text-body" {...p} />,
  strong: (p: any) => <strong className="font-semibold text-ink" {...p} />,
  em: (p: any) => <em className="italic" {...p} />,
  blockquote: (p: any) => <blockquote {...p} />,
  hr: () => <hr className="my-10 border-0 h-px bg-gold-light/60" />,
};

export function PartOne() {
  return (
    <main className="max-w-prose mx-auto px-6 py-12 md:py-16">
      <MDXProvider components={mdxComponents as any}>
        <article><PartOneContent /></article>
      </MDXProvider>
    </main>
  );
}

export function PartTwo() {
  return (
    <main className="max-w-prose mx-auto px-6 py-12 md:py-16">
      <MDXProvider components={mdxComponents as any}>
        <article><PartTwoContent /></article>
      </MDXProvider>
    </main>
  );
}
