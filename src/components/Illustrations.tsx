/* eslint-disable react/no-unknown-property */
// Salon-metaphor illustration set.
// Single-style line art on transparent background — stroke uses currentColor
// so it inherits whatever ink color the parent sets (works in light + dark).
// Gold accent fills are absolute hex so they pop against the cream palette.

import { type SVGProps } from 'react';

const GOLD = '#B89968';
const TERRACOTTA = '#C68E6E';
const SAGE = '#8AA08A';

type IllProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 200): IllProps => ({
  width: size,
  height: size,
  viewBox: '0 0 200 200',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

// 1. Styling chair — anchor metaphor for "running your own business" = capitalism
export function SalonChair({ size = 200, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Floor */}
      <line x1="30" y1="170" x2="170" y2="170" />
      {/* Pedestal */}
      <path d="M85 170 L85 145 L115 145 L115 170" />
      <ellipse cx="100" cy="170" rx="22" ry="4" fill={GOLD} fillOpacity="0.25" stroke="none" />
      {/* Seat */}
      <path d="M70 145 Q70 130 85 130 L115 130 Q130 130 130 145 Z" fill={GOLD} fillOpacity="0.18" />
      {/* Back */}
      <path d="M75 130 L75 80 Q75 70 85 70 L115 70 Q125 70 125 80 L125 130" />
      <path d="M85 75 L115 75" />
      {/* Headrest */}
      <ellipse cx="100" cy="55" rx="18" ry="8" fill={GOLD} fillOpacity="0.18" />
      {/* Armrests */}
      <path d="M70 110 Q60 110 60 120 L60 130" />
      <path d="M130 110 Q140 110 140 120 L140 130" />
      {/* Sparkle */}
      <path d="M150 35 L150 45 M145 40 L155 40" stroke={GOLD} />
      <circle cx="40" cy="50" r="2" fill={GOLD} stroke="none" />
    </svg>
  );
}

// 2. Booth-rent / market — three chairs in a row, money flowing
export function ThreeChairs({ size = 240, ...rest }: IllProps) {
  return (
    <svg {...base(size)} viewBox="0 0 280 200" {...rest}>
      <line x1="20" y1="170" x2="260" y2="170" />
      {[40, 140, 240].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 18} 170 L${x - 18} 150 L${x + 18} 150 L${x + 18} 170`} />
          <path d={`M${x - 22} 150 Q${x - 22} 140 ${x - 14} 140 L${x + 14} 140 Q${x + 22} 140 ${x + 22} 150 Z`} fill={i === 1 ? GOLD : 'transparent'} fillOpacity="0.2" />
          <path d={`M${x - 18} 140 L${x - 18} 100 Q${x - 18} 92 ${x - 12} 92 L${x + 12} 92 Q${x + 18} 92 ${x + 18} 100 L${x + 18} 140`} />
          <ellipse cx={x} cy="82" rx="10" ry="5" fill={GOLD} fillOpacity="0.18" />
        </g>
      ))}
      {/* Coin flow arcs */}
      <path d="M60 60 Q90 30 130 60" strokeDasharray="3 3" stroke={GOLD} />
      <path d="M160 60 Q190 30 230 60" strokeDasharray="3 3" stroke={GOLD} />
      <circle cx="60" cy="60" r="4" fill={GOLD} stroke="none" />
      <circle cx="230" cy="60" r="4" fill={GOLD} stroke="none" />
    </svg>
  );
}

// 3. Government building — minimalist Capitol stand-in
export function Capitol({ size = 200, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <line x1="20" y1="170" x2="180" y2="170" />
      {/* Stairs */}
      <path d="M40 170 L40 160 L160 160 L160 170" />
      <path d="M55 160 L55 150 L145 150 L145 160" />
      {/* Columns */}
      {[65, 85, 105, 125].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="150" x2={x} y2="100" />
          <rect x={x - 4} y="98" width="8" height="3" fill={GOLD} fillOpacity="0.3" stroke="none" />
          <rect x={x - 4} y="148" width="8" height="3" fill={GOLD} fillOpacity="0.3" stroke="none" />
        </g>
      ))}
      {/* Pediment */}
      <path d="M55 100 L100 70 L145 100 Z" fill={GOLD} fillOpacity="0.15" />
      {/* Dome */}
      <path d="M85 70 Q100 40 115 70" />
      <ellipse cx="100" cy="40" rx="3" ry="6" fill={GOLD} stroke={GOLD} />
      <line x1="100" y1="34" x2="100" y2="28" stroke={GOLD} />
      <path d="M97 32 L100 28 L103 32" fill={GOLD} stroke="none" />
    </svg>
  );
}

// 4. Three branches — three columns of different heights, linked
export function ThreeBranches({ size = 240, ...rest }: IllProps) {
  return (
    <svg {...base(size)} viewBox="0 0 280 200" {...rest}>
      <line x1="20" y1="170" x2="260" y2="170" />
      {/* Columns */}
      <g>
        <rect x="48" y="80" width="44" height="90" fill={GOLD} fillOpacity="0.1" />
        <line x1="48" y1="80" x2="48" y2="170" />
        <line x1="92" y1="80" x2="92" y2="170" />
        <line x1="48" y1="80" x2="92" y2="80" />
        <text x="70" y="155" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="11" fontStyle="italic" fill={GOLD} stroke="none">law</text>
      </g>
      <g>
        <rect x="118" y="60" width="44" height="110" fill={TERRACOTTA} fillOpacity="0.12" />
        <line x1="118" y1="60" x2="118" y2="170" />
        <line x1="162" y1="60" x2="162" y2="170" />
        <line x1="118" y1="60" x2="162" y2="60" />
        <text x="140" y="155" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="11" fontStyle="italic" fill={TERRACOTTA} stroke="none">run</text>
      </g>
      <g>
        <rect x="188" y="90" width="44" height="80" fill={SAGE} fillOpacity="0.12" />
        <line x1="188" y1="90" x2="188" y2="170" />
        <line x1="232" y1="90" x2="232" y2="170" />
        <line x1="188" y1="90" x2="232" y2="90" />
        <text x="210" y="155" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="11" fontStyle="italic" fill={SAGE} stroke="none">judge</text>
      </g>
      {/* Linking arrows */}
      <path d="M92 50 Q140 30 188 50" strokeDasharray="2 3" />
      <path d="M85 50 L92 50 L88 55" />
      <path d="M195 50 L188 50 L192 55" />
    </svg>
  );
}

// 5. Coins — shared pool / tip jar metaphor
export function TipJar({ size = 180, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M70 90 L70 160 Q70 175 85 175 L115 175 Q130 175 130 160 L130 90 Z" fill={GOLD} fillOpacity="0.1" />
      <ellipse cx="100" cy="90" rx="30" ry="6" fill={GOLD} fillOpacity="0.25" />
      <ellipse cx="100" cy="90" rx="30" ry="6" />
      {/* Coins inside */}
      <circle cx="92" cy="120" r="7" fill={GOLD} fillOpacity="0.45" stroke={GOLD} />
      <circle cx="108" cy="135" r="7" fill={GOLD} fillOpacity="0.45" stroke={GOLD} />
      <circle cx="98" cy="150" r="7" fill={GOLD} fillOpacity="0.45" stroke={GOLD} />
      {/* Coin going in */}
      <circle cx="100" cy="60" r="8" fill={GOLD} fillOpacity="0.6" stroke={GOLD} />
      <path d="M100 50 L100 45" stroke={GOLD} />
      {/* Label */}
      <line x1="80" y1="105" x2="120" y2="105" strokeOpacity="0.4" />
    </svg>
  );
}

// 6. Hammer + gavel = court / final word
export function Gavel({ size = 200, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <line x1="40" y1="170" x2="160" y2="170" />
      {/* Block */}
      <rect x="60" y="155" width="80" height="10" fill={GOLD} fillOpacity="0.25" />
      {/* Gavel handle */}
      <path d="M90 100 L130 60" strokeWidth="3" />
      {/* Gavel head */}
      <rect x="115" y="40" width="32" height="22" rx="2" transform="rotate(-45 131 51)" fill={GOLD} fillOpacity="0.35" />
      {/* Impact spark */}
      <path d="M75 110 L82 103 M70 100 L78 100" stroke={GOLD} />
    </svg>
  );
}

// 7. Voting box / ballot
export function Ballot({ size = 200, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <line x1="30" y1="170" x2="170" y2="170" />
      <rect x="55" y="90" width="90" height="75" rx="4" fill={GOLD} fillOpacity="0.12" />
      <line x1="55" y1="110" x2="145" y2="110" />
      <rect x="80" y="85" width="40" height="6" rx="1" fill={GOLD} stroke={GOLD} />
      {/* Ballot going in */}
      <rect x="85" y="50" width="30" height="40" fill="white" />
      <line x1="92" y1="60" x2="108" y2="60" />
      <line x1="92" y1="68" x2="108" y2="68" />
      <path d="M94 76 L98 80 L106 70" stroke={TERRACOTTA} />
    </svg>
  );
}

// 8. Three buildings of different heights — federalism / states vs federal
export function FederalState({ size = 240, ...rest }: IllProps) {
  return (
    <svg {...base(size)} viewBox="0 0 280 200" {...rest}>
      <line x1="20" y1="170" x2="260" y2="170" />
      {/* Big federal building */}
      <rect x="100" y="50" width="80" height="120" fill={GOLD} fillOpacity="0.12" />
      <path d="M100 50 L140 30 L180 50" fill={GOLD} fillOpacity="0.2" />
      {[65, 90, 115, 140].map((y) => (
        <g key={y}>
          <rect x="110" y={y} width="12" height="14" fill={GOLD} fillOpacity="0.3" stroke="none" />
          <rect x="134" y={y} width="12" height="14" fill={GOLD} fillOpacity="0.3" stroke="none" />
          <rect x="158" y={y} width="12" height="14" fill={GOLD} fillOpacity="0.3" stroke="none" />
        </g>
      ))}
      <text x="140" y="165" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="10" fill={GOLD} stroke="none">federal</text>
      {/* State houses */}
      <g>
        <rect x="40" y="120" width="40" height="50" fill={SAGE} fillOpacity="0.12" />
        <path d="M40 120 L60 105 L80 120" fill={SAGE} fillOpacity="0.2" />
        <rect x="55" y="140" width="10" height="30" fill={SAGE} fillOpacity="0.3" stroke="none" />
        <text x="60" y="163" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="9" fill={SAGE} stroke="none">state</text>
      </g>
      <g>
        <rect x="200" y="115" width="44" height="55" fill={TERRACOTTA} fillOpacity="0.12" />
        <path d="M200 115 L222 100 L244 115" fill={TERRACOTTA} fillOpacity="0.2" />
        <rect x="218" y="135" width="10" height="35" fill={TERRACOTTA} fillOpacity="0.3" stroke="none" />
        <text x="222" y="160" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="9" fill={TERRACOTTA} stroke="none">state</text>
      </g>
    </svg>
  );
}

// 9. Open book — Marx / origins
export function OpenBook({ size = 200, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <line x1="30" y1="170" x2="170" y2="170" />
      <path d="M40 70 Q100 60 100 80 Q100 60 160 70 L160 150 Q100 140 100 160 Q100 140 40 150 Z" fill={GOLD} fillOpacity="0.12" />
      <path d="M100 80 L100 160" />
      {/* Lines of text */}
      {[95, 105, 115, 125, 135].map((y, i) => (
        <g key={y}>
          <line x1="50" y1={y} x2={90 - i * 3} y2={y} strokeOpacity="0.5" />
          <line x1={110 + i * 3} y1={y} x2="150" y2={y} strokeOpacity="0.5" />
        </g>
      ))}
      {/* Bookmark */}
      <path d="M130 60 L140 60 L140 95 L135 88 L130 95 Z" fill={TERRACOTTA} fillOpacity="0.5" stroke={TERRACOTTA} />
    </svg>
  );
}

// 10. Scissors crossed — beauty / hairstyling signature
export function Scissors({ size = 160, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="60" cy="60" r="18" fill={GOLD} fillOpacity="0.15" />
      <circle cx="60" cy="140" r="18" fill={GOLD} fillOpacity="0.15" />
      <path d="M75 75 L140 140" strokeWidth="2.5" />
      <path d="M75 125 L140 60" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="6" fill="none" />
      <circle cx="60" cy="140" r="6" fill="none" />
      <circle cx="100" cy="100" r="3" fill={GOLD} stroke="none" />
    </svg>
  );
}
