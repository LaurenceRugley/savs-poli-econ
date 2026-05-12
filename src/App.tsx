import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from '@/pages/Home';
import { PartOne, PartTwo } from '@/pages/PartPages';
import { ReadingRail } from '@/components/Editorial';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Header() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-40 bg-limestone/90 backdrop-blur border-b border-gold-light/40">
      <div className="max-w-wide mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-3 no-underline">
          <span className="serif italic text-2xl text-ink leading-none">For Savs</span>
          <span className="sans text-[10px] uppercase tracking-[0.3em] text-gold hidden sm:inline">
            A Refresher
          </span>
        </Link>
        <nav className="flex items-center gap-5">
          {[
            { to: '/part-one', label: '01 · Economics', shortLabel: '01' },
            { to: '/part-two', label: '02 · Government', shortLabel: '02' },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`sans text-xs sm:text-sm uppercase tracking-[0.2em] transition-colors ${
                pathname === l.to ? 'text-ink font-medium' : 'text-ink/55 hover:text-ink'
              }`}
            >
              <span className="hidden sm:inline">{l.label}</span>
              <span className="sm:hidden">{l.shortLabel}</span>
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
      <ReadingRail />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/part-one" element={<PartOne />} />
        <Route path="/part-two" element={<PartTwo />} />
      </Routes>
      <footer className="border-t border-gold-light/40 mt-24 py-10 text-center">
        <p className="serif italic text-gold text-lg">— with love, L</p>
      </footer>
    </BrowserRouter>
  );
}
