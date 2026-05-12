import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from '@/pages/Home';
import { PartOne, PartTwo } from '@/pages/PartPages';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Header() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-40 bg-limestone/85 backdrop-blur border-b border-gold-light/40">
      <div className="max-w-prose mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-3 no-underline">
          <span className="serif italic text-2xl text-ink leading-none">For Savs</span>
          <span className="sans text-xs uppercase tracking-widest text-gold">A Refresher</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6">
          {[
            { to: '/part-one', label: 'Part 1' },
            { to: '/part-two', label: 'Part 2' },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`sans text-sm ${pathname === l.to ? 'text-ink font-medium' : 'text-ink/60 hover:text-ink'}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function App() {
  return (
    <BrowserRouter basename="/savs-poli-econ">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/part-one" element={<PartOne />} />
        <Route path="/part-two" element={<PartTwo />} />
      </Routes>
      <footer className="border-t border-gold-light/40 mt-24 py-8 text-center">
        <p className="sans text-xs uppercase tracking-widest text-gold">
          With love · L
        </p>
      </footer>
    </BrowserRouter>
  );
}
