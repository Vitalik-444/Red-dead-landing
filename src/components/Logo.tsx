export default function Logo({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="2" y="2" width="44" height="44" fill="none" stroke="#B99A70" strokeWidth="1.5" />
      <rect x="6" y="6" width="36" height="36" fill="#A33B2D" />
      <text x="24" y="31" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif" fontWeight="800" fontSize="22" fill="#E9DFCE" letterSpacing="1">RD</text>
    </svg>
  )
}
