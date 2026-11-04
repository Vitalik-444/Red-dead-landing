import { useId, useMemo } from 'react'
import type { SceneKind, Tone } from '../types'

interface Props {
  kind: SceneKind
  tone: Tone
  seed?: number
  className?: string
}

interface Palette { sky: [string, string, string]; sun: string; far: string; mid: string; near: string; ink: string }

const TONES: Record<Tone, Palette> = {
  dusk: { sky: ['#2a1b1a', '#8a3b2a', '#e0a263'], sun: '#f3d29a', far: '#6d3a30', mid: '#42261f', near: '#1f1511', ink: '#120d0a' },
  dawn: { sky: ['#3b3a45', '#b98a77', '#f0cfa0'], sun: '#fbe7c0', far: '#7b6670', mid: '#4f4350', near: '#271f24', ink: '#15111a' },
  night: { sky: ['#07090d', '#15202b', '#2c3a45'], sun: '#cfd8dc', far: '#1b2630', mid: '#111a22', near: '#0a1015', ink: '#05080b' },
  snow: { sky: ['#56677a', '#a3b2bd', '#e3e6df'], sun: '#ffffff', far: '#8c9aa6', mid: '#5b6b78', near: '#2f3a43', ink: '#1b2128' },
  noon: { sky: ['#4f7a8c', '#9db7b0', '#d9d3b0'], sun: '#fff3c4', far: '#6e8c7c', mid: '#4a6552', near: '#25352b', ink: '#121c15' },
  swamp: { sky: ['#26301f', '#58633a', '#a9a56a'], sun: '#d9d08a', far: '#44502f', mid: '#2d3921', near: '#161e11', ink: '#0c120a' },
  desert: { sky: ['#7a3d26', '#d1823f', '#f2c67b'], sun: '#fff0c0', far: '#a8573a', mid: '#7d3e2a', near: '#3f1f16', ink: '#241009' },
}

function rng(seed: number) {
  let a = (seed >>> 0) || 1
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Closed ridge path across the 800×600 canvas. */
function ridge(r: () => number, base: number, amp: number, n: number, smooth = false) {
  const p: [number, number][] = []
  for (let i = 0; i <= n; i++) p.push([+((i * 800) / n).toFixed(1), +(base - r() * amp).toFixed(1)])
  let d = `M0,600 L${p[0][0]},${p[0][1]}`
  for (let i = 1; i < p.length; i++) {
    const [x0, y0] = p[i - 1]
    const [x1, y1] = p[i]
    d += smooth ? ` Q${x0},${y0} ${((x0 + x1) / 2).toFixed(1)},${((y0 + y1) / 2).toFixed(1)}` : ` L${x1},${y1}`
  }
  return `${d} L800,600 Z`
}

function pines(r: () => number, count: number, baseY: number, size: number) {
  return Array.from({ length: count }, () => {
    const x = r() * 840 - 20
    const h = size * (0.7 + r() * 0.8)
    const w = h * 0.38
    const y = baseY + r() * 30
    const tiers = [0, 1, 2].map((t) => {
      const ty = y - h * (0.28 * t)
      const tw = w * (1 - t * 0.28)
      return `${(x - tw).toFixed(0)},${ty.toFixed(0)} ${x.toFixed(0)},${(ty - h * 0.42).toFixed(0)} ${(x + tw).toFixed(0)},${ty.toFixed(0)}`
    })
    return tiers
  })
}

export default function SceneArt({ kind, tone, seed = 1, className }: Props) {
  const uid = useId().replace(/:/g, '')
  const c = TONES[tone]

  const layers = useMemo(() => {
    const r = rng(seed * 97 + kind.length)
    const sunX = 120 + r() * 560
    const sunY = 250 + r() * 70
    const sun = <circle cx={sunX} cy={sunY} r={46 + r() * 20} fill={c.sun} opacity=".85" />
    const glow = <circle cx={sunX} cy={sunY} r="190" fill={`url(#${uid}g)`} />

    switch (kind) {
      case 'ridges': {
        const snowy = tone === 'snow'
        return (
          <>
            {sun}{glow}
            <path d={ridge(r, 360, 190, 9)} fill={c.far} />
            {snowy && <path d={ridge(r, 330, 150, 9)} fill="#f2f2ee" opacity=".35" />}
            <path d={ridge(r, 440, 140, 13)} fill={c.mid} />
            <path d={ridge(r, 520, 90, 18, true)} fill={c.near} />
          </>
        )
      }
      case 'plains':
        return (
          <>
            {sun}{glow}
            <path d={ridge(r, 400, 70, 6, true)} fill={c.far} />
            <path d={ridge(r, 450, 60, 7, true)} fill={c.mid} />
            <path d={ridge(r, 520, 50, 8, true)} fill={c.near} />
            {Array.from({ length: 28 }, (_, i) => (
              <path key={i} d={`M${r() * 800},600 l${r() * 6 - 3},-${20 + r() * 40}`} stroke={c.ink} strokeWidth="2" opacity=".6" />
            ))}
          </>
        )
      case 'forest': {
        const rows = [pines(r, 22, 400, 150), pines(r, 18, 470, 210), pines(r, 14, 560, 290)]
        const fills = [c.far, c.mid, c.near]
        return (
          <>
            {sun}{glow}
            {rows.map((row, i) => (
              <g key={i} fill={fills[i]} opacity={i === 0 ? 0.9 : 1}>
                {row.map((tiers, j) => tiers.map((pts, k) => <polygon key={`${j}${k}`} points={pts} />))}
              </g>
            ))}
            <rect x="0" y="380" width="800" height="120" fill={c.sky[2]} opacity=".12" />
          </>
        )
      }
      case 'camp': {
        const side = [...pines(r, 8, 560, 330).map((t) => t), ...pines(r, 8, 580, 260)]
        return (
          <>
            {Array.from({ length: 60 }, (_, i) => (
              <circle key={i} cx={r() * 800} cy={r() * 320} r={r() * 1.4 + 0.3} fill="#fff" opacity={0.3 + r() * 0.6} />
            ))}
            <path d={ridge(r, 420, 110, 10)} fill={c.far} />
            <rect x="0" y="470" width="800" height="130" fill={c.near} />
            <g fill={c.ink}>{side.map((tiers, j) => tiers.map((pts, k) => <polygon key={`${j}${k}`} points={pts} />))}</g>
            <polygon points="130,520 210,400 290,520" fill={c.mid} /><polygon points="560,520 640,410 720,520" fill={c.mid} />
            <circle cx="410" cy="500" r="260" fill={`url(#${uid}f)`} />
            <polygon points="392,505 410,440 428,505" fill="#f0a23a" /><polygon points="400,505 411,470 421,505" fill="#ffe29a" />
            <rect x="380" y="505" width="60" height="8" rx="3" fill={c.ink} />
          </>
        )
      }
      case 'town': {
        let x = -20
        const blocks: JSX.Element[] = []
        while (x < 820) {
          const w = 90 + r() * 70
          const h = 120 + r() * 120
          const top = 470 - h
          blocks.push(
            <g key={x}>
              <polygon points={`${x},470 ${x},${top + 20} ${x + w * 0.5},${top - 14} ${x + w},${top + 20} ${x + w},470`} fill={c.mid} />
              <rect x={x} y={top + 20} width={w} height="8" fill={c.ink} opacity=".5" />
              {[0, 1].map((i) => <rect key={i} x={x + 14 + i * (w * 0.45)} y={top + 50} width="16" height="26" fill="#f2c27a" opacity={r() > 0.4 ? 0.85 : 0.1} />)}
            </g>,
          )
          x += w + 8
        }
        return (
          <>
            {sun}{glow}
            <path d={ridge(r, 380, 100, 8)} fill={c.far} />
            {blocks}
            <rect x="0" y="470" width="800" height="130" fill={c.near} />
            <polygon points="330,600 470,600 430,470 370,470" fill={c.mid} opacity=".6" />
          </>
        )
      }
      case 'rider': {
        const rx = 470, ry = 438
        return (
          <>
            {sun}{glow}
            <path d={ridge(r, 380, 160, 9)} fill={c.far} />
            <path d={ridge(r, 450, 100, 12, true)} fill={c.mid} />
            <path d="M0,600 L0,480 Q260,420 520,448 T800,430 L800,600 Z" fill={c.near} />
            <g transform={`translate(${rx} ${ry}) scale(1.35)`} fill={c.ink} stroke={c.ink}>
              <ellipse cx="0" cy="0" rx="58" ry="22" />
              <polygon points="42,-8 70,-52 86,-46 62,2" />
              <polygon points="70,-52 100,-34 96,-26 80,-36" />
              {[[-40, 12], [-24, 18], [28, 18], [44, 12]].map(([lx, ly], i) => (
                <line key={i} x1={lx} y1={ly} x2={lx + (i % 2 ? 4 : -4)} y2="58" strokeWidth="7" strokeLinecap="round" />
              ))}
              <path d="M-56,-6 Q-84,10 -76,44" fill="none" strokeWidth="8" strokeLinecap="round" />
              <ellipse cx="2" cy="-44" rx="11" ry="23" stroke="none" />
              <circle cx="4" cy="-76" r="8" stroke="none" />
              <ellipse cx="4" cy="-82" rx="18" ry="3.5" stroke="none" />
              <path d="M-6,-83 Q4,-102 14,-83 Z" stroke="none" />
            </g>
          </>
        )
      }
      case 'swamp':
        return (
          <>
            {sun}{glow}
            <path d={ridge(r, 400, 40, 10, true)} fill={c.far} />
            <rect x="0" y="430" width="800" height="170" fill={c.mid} />
            {Array.from({ length: 10 }, (_, i) => <rect key={i} x="0" y={440 + i * 16} width="800" height="2" fill={c.sky[2]} opacity={0.08} />)}
            {Array.from({ length: 9 }, (_, i) => {
              const x = 30 + i * 95 + r() * 40
              const h = 280 + r() * 160
              return (
                <g key={i} fill={c.ink}>
                  <polygon points={`${x - 28},520 ${x - 6},${520 - h} ${x + 6},${520 - h} ${x + 28},520`} />
                  {Array.from({ length: 5 }, (_, k) => <line key={k} x1={x + (k - 2) * 12} y1={520 - h + 20} x2={x + (k - 2) * 14} y2={520 - h + 90 + r() * 70} stroke={c.ink} strokeWidth="1.5" opacity=".7" />)}
                </g>
              )
            })}
          </>
        )
      case 'desert':
        return (
          <>
            {sun}{glow}
            {[0, 1, 2].map((i) => {
              const x = 80 + i * 260 + r() * 60
              const w = 120 + r() * 80
              const h = 100 + r() * 90
              return <polygon key={i} points={`${x},470 ${x + 14},${470 - h} ${x + w - 14},${470 - h} ${x + w},470`} fill={i % 2 ? c.mid : c.far} />
            })}
            <rect x="0" y="470" width="800" height="130" fill={c.near} />
            {Array.from({ length: 5 }, (_, i) => {
              const x = 60 + i * 170 + r() * 60
              const h = 40 + r() * 40
              return (
                <g key={i} stroke={c.ink} strokeWidth="9" strokeLinecap="round" fill="none">
                  <line x1={x} y1="540" x2={x} y2={540 - h} />
                  <path d={`M${x},${540 - h * 0.4} q-16,0 -16,-${h * 0.35}`} />
                  <path d={`M${x},${540 - h * 0.55} q16,0 16,-${h * 0.3}`} />
                </g>
              )
            })}
          </>
        )
      case 'portrait': {
        const v = seed % 3
        return (
          <>
            <path d={ridge(r, 480, 120, 9)} fill={c.far} opacity=".55" />
            <g fill={`url(#${uid}b)`}>
              <path d="M110,600 C130,470 260,440 400,440 C540,440 670,470 690,600 Z" />
              <rect x="362" y="370" width="76" height="90" />
              <ellipse cx="400" cy="320" rx="68" ry="84" />
              {v === 0 && (<><ellipse cx="400" cy="262" rx="140" ry="22" /><path d="M318,262 C318,160 482,160 482,262 Z" /></>)}
              {v === 1 && (<><ellipse cx="400" cy="256" rx="96" ry="16" /><path d="M330,256 C330,196 470,196 470,256 Z" /></>)}
              {v === 2 && <path d="M326,330 C300,200 500,200 474,330 C490,400 470,440 440,460 L360,460 C330,440 310,400 326,330 Z" />}
            </g>
            {v === 0 && <rect x="320" y="240" width="160" height="12" fill={c.ink} opacity=".6" />}
            <path d="M110,600 C130,470 260,440 400,440" fill="none" stroke={c.sky[2]} strokeWidth="2" opacity=".5" />
            <path d="M334,300 C334,230 400,210 460,250" fill="none" stroke={c.sky[2]} strokeWidth="2" opacity=".35" />
          </>
        )
      }
    }
  }, [kind, tone, seed, c, uid])

  return (
    <svg className={className} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}s`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c.sky[0]} /><stop offset=".55" stopColor={c.sky[1]} /><stop offset="1" stopColor={c.sky[2]} />
        </linearGradient>
        <radialGradient id={`${uid}g`}><stop offset="0" stopColor={c.sun} stopOpacity=".5" /><stop offset="1" stopColor={c.sun} stopOpacity="0" /></radialGradient>
        <radialGradient id={`${uid}f`}><stop offset="0" stopColor="#f0a23a" stopOpacity=".55" /><stop offset="1" stopColor="#f0a23a" stopOpacity="0" /></radialGradient>
        <linearGradient id={`${uid}b`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={c.mid} /><stop offset="1" stopColor={c.ink} /></linearGradient>
        <radialGradient id={`${uid}v`} cx=".5" cy=".5" r=".75"><stop offset=".45" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".6" /></radialGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#${uid}s)`} />
      {layers}
      <rect width="800" height="600" fill={`url(#${uid}v)`} />
    </svg>
  )
}
