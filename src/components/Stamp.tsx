import { motion } from 'framer-motion'

/** Circular "1899" stamp with text on a path; rotates slowly. */
export default function Stamp({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 200 200"
      aria-hidden="true"
      animate={{ rotate: 360 }}
      transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
    >
      <defs><path id="stamp-ring" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" /></defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="#B99A70" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="90" fill="none" stroke="#B99A70" strokeWidth=".6" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="52" fill="none" stroke="#B99A70" strokeWidth="1" />
      <text fontFamily="'Barlow Condensed', sans-serif" fontWeight="700" fontSize="15" letterSpacing="5" fill="#B99A70">
        <textPath href="#stamp-ring">AMERICAN FRONTIER · TERRITORIAL RECORD · EST. 1899 ·</textPath>
      </text>
      <text x="100" y="116" textAnchor="middle" fontFamily="'IM Fell English', serif" fontSize="44" fill="#E9DFCE">1899</text>
    </motion.svg>
  )
}
