import React, { useState, useEffect } from 'react'

/**
 * Sentient Cybernetic Digital Face (PAIJO Core Visor)
 * Ekspresi mata digital holografik yang menyala terang benderang.
 */
const SentientCyberEyes = ({
  mood = 'neutral',
  status = 'idle',
  intensity = 0,
  colorHex = '#ffb700'
}) => {
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    let blinkTimeout
    const triggerBlink = () => {
      setIsBlinking(true)
      setTimeout(() => {
        setIsBlinking(false)
        const nextDelay = 3500 + Math.random() * 2500
        blinkTimeout = setTimeout(triggerBlink, nextDelay)
      }, 160)
    }

    const initialDelay = 2000 + Math.random() * 2000
    blinkTimeout = setTimeout(triggerBlink, initialDelay)

    return () => clearTimeout(blinkTimeout)
  }, [])

  const voiceScale = status === 'speaking' ? 1 + intensity * 0.4 : 1

  return (
    <div
      className="relative w-32 h-20 flex flex-col items-center justify-center pointer-events-none select-none"
      style={{
        transform: `scale(${voiceScale})`,
        transition: 'transform 75ms ease-out'
      }}
    >
      <svg
        viewBox="0 0 120 60"
        className="w-full h-full drop-shadow-[0_0_25px_currentColor] drop-shadow-[0_0_10px_currentColor]"
        style={{ color: colorHex }}
      >
        <defs>
          <filter id="jarvis-core-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur1" />
            <feGaussianBlur stdDeviation="5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {isBlinking ? (
          <g stroke="currentColor" strokeWidth="5" strokeLinecap="round" filter="url(#jarvis-core-glow)">
            <line x1="20" y1="30" x2="48" y2="30" />
            <line x1="72" y1="30" x2="100" y2="30" />
          </g>
        ) : (
          <g filter="url(#jarvis-core-glow)">
            {mood === 'joy' && (
              <>
                <path
                  d="M 20 34 Q 34 12 48 34"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M 72 34 Q 86 12 100 34"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <circle cx="34" cy="38" r="3.5" fill="#ffffff" />
                <circle cx="86" cy="38" r="3.5" fill="#ffffff" />
              </>
            )}

            {mood === 'anger' && (
              <>
                <polygon
                  points="18,16 50,32 50,38 18,24"
                  fill="currentColor"
                  className="animate-pulse"
                />
                <polygon
                  points="102,16 70,32 70,38 102,24"
                  fill="currentColor"
                  className="animate-pulse"
                />
              </>
            )}

            {mood === 'sadness' && (
              <>
                <path
                  d="M 20 22 Q 34 42 48 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M 72 22 Q 86 42 100 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </>
            )}

            {mood === 'fear' && (
              <>
                <ellipse cx="34" cy="30" rx="15" ry="19" fill="none" stroke="currentColor" strokeWidth="5" />
                <circle cx="34" cy="30" r="5" fill="#ffffff" />
                <ellipse cx="86" cy="30" rx="15" ry="19" fill="none" stroke="currentColor" strokeWidth="5" />
                <circle cx="86" cy="30" r="5" fill="#ffffff" />
              </>
            )}

            {mood === 'disgust' && (
              <>
                <path d="M 20 28 Q 34 18 48 28" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <path d="M 72 32 Q 86 22 100 32" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </>
            )}

            {mood === 'anxiety' && (
              <>
                <ellipse cx="34" cy="30" rx="13" ry="13" fill="none" stroke="currentColor" strokeWidth="4.5" />
                <ellipse cx="86" cy="30" rx="13" ry="13" fill="none" stroke="currentColor" strokeWidth="4.5" />
                <circle cx="34" cy="30" r="4.5" fill="#ffffff" />
                <circle cx="86" cy="30" r="4.5" fill="#ffffff" />
              </>
            )}

            {mood === 'envy' && (
              <>
                <path d="M 18 24 L 48 30 L 48 36 L 18 30 Z" fill="currentColor" />
                <path d="M 102 24 L 72 30 L 72 36 L 102 30 Z" fill="currentColor" />
              </>
            )}

            {mood === 'embarrassment' && (
              <>
                <line x1="20" y1="32" x2="48" y2="32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <line x1="72" y1="32" x2="100" y2="32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </>
            )}

            {mood === 'ennui' && (
              <>
                <line x1="20" y1="34" x2="48" y2="34" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <line x1="72" y1="34" x2="100" y2="34" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </>
            )}

            {mood === 'neutral' && (
              <>
                <rect x="20" y="23" width="28" height="15" rx="5" fill="currentColor" opacity="1" />
                <circle cx="34" cy="30" r="3.5" fill="#ffffff" />
                <rect x="72" y="23" width="28" height="15" rx="5" fill="currentColor" opacity="1" />
                <circle cx="86" cy="30" r="3.5" fill="#ffffff" />
              </>
            )}
          </g>
        )}
      </svg>

      {/* Voice Waveform Activity */}
      {status === 'speaking' && (
        <div className="flex items-center gap-1 mt-1.5 h-3.5">
          <span className="w-1.5 bg-current rounded-full animate-bounce shadow-[0_0_8px_currentColor]" style={{ height: `${Math.max(4, intensity * 16)}px`, color: colorHex }} />
          <span className="w-1.5 bg-current rounded-full animate-bounce [animation-delay:100ms] shadow-[0_0_8px_currentColor]" style={{ height: `${Math.max(7, intensity * 24)}px`, color: colorHex }} />
          <span className="w-1.5 bg-current rounded-full animate-bounce [animation-delay:200ms] shadow-[0_0_8px_currentColor]" style={{ height: `${Math.max(10, intensity * 32)}px`, color: colorHex }} />
          <span className="w-1.5 bg-current rounded-full animate-bounce [animation-delay:300ms] shadow-[0_0_8px_currentColor]" style={{ height: `${Math.max(7, intensity * 24)}px`, color: colorHex }} />
          <span className="w-1.5 bg-current rounded-full animate-bounce [animation-delay:400ms] shadow-[0_0_8px_currentColor]" style={{ height: `${Math.max(4, intensity * 16)}px`, color: colorHex }} />
        </div>
      )}
    </div>
  )
}

/**
 * Iron Man J.A.R.V.I.S Holographic Sphere HUD Visualizer (Ultra-Luminous High-Glow Edition)
 * Tampilan holografik menyala terang benderang dengan multi-tier neon arc rings dan laser bloom.
 */
const CubeVisualizer = ({ status = 'idle', intensity = 0, mood = 'neutral' }) => {
  const [colorHex, setColorHex] = useState('#ffb700') // Ultra-Bright Radiant Gold-Amber
  const [glowClass, setGlowClass] = useState('bg-amber-400/80')

  useEffect(() => {
    if (status === 'error') {
      setColorHex('#ff3344')
      setGlowClass('bg-red-500/80')
    } else {
      switch (mood) {
        case 'joy':
          setColorHex('#ffea00') // Electric Sun Yellow
          setGlowClass('bg-yellow-300/85')
          break
        case 'sadness':
          setColorHex('#00e5ff') // Radiant Neon Cyan
          setGlowClass('bg-cyan-400/80')
          break
        case 'fear':
          setColorHex('#d946ef') // High-Energy Neon Purple
          setGlowClass('bg-fuchsia-400/80')
          break
        case 'anger':
          setColorHex('#ff1744') // Intense Neon Crimson
          setGlowClass('bg-red-500/85')
          break
        case 'disgust':
          setColorHex('#a3e635') // Vivid Neon Lime
          setGlowClass('bg-lime-400/80')
          break
        case 'anxiety':
          setColorHex('#ff6d00') // Blaze Orange
          setGlowClass('bg-orange-400/85')
          break
        case 'envy':
          setColorHex('#00f5d4') // Radiant Aqua Teal
          setGlowClass('bg-teal-300/80')
          break
        case 'embarrassment':
          setColorHex('#ff4081') // Hot Pink
          setGlowClass('bg-pink-400/80')
          break
        case 'ennui':
          setColorHex('#cbd5e1') // Platinum Silver
          setGlowClass('bg-slate-300/70')
          break
        default: // neutral (Iconic Ultra-Bright Iron Man Arc Reactor Gold)
          setColorHex('#ffb700')
          setGlowClass('bg-amber-400/85')
          break
      }
    }
  }, [mood, status])

  let targetScale = 1
  if (status === 'thinking') targetScale = 1.15
  else if (status === 'nudge') targetScale = 1.06
  else if (status === 'speaking') targetScale = 1 + intensity * 0.38
  else targetScale = 1

  return (
    <>
      <style>
        {`
          @keyframes jarvis-spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes jarvis-spin-reverse {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }
          @keyframes jarvis-spin-fast {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes jarvis-pulse-glow {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
          @keyframes jarvis-filament-spin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.05); }
            100% { transform: rotate(360deg) scale(1); }
          }
        `}
      </style>

      {/* Holographic JARVIS Container Frame */}
      <div className="relative shrink-0 w-80 h-80 flex items-center justify-center my-4 select-none">
        {/* Outer HUD Corner Bracket Frame */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-1.5 opacity-90">
          {/* Top HUD Telemetry Bar */}
          <div
            className="flex justify-between items-center w-full text-[10px] font-mono font-bold tracking-widest drop-shadow-[0_0_8px_currentColor]"
            style={{ color: colorHex }}
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-xs bg-current shadow-[0_0_8px_currentColor] animate-ping" />
              <span>SYS.ONLINE // P.A.I.J.O.</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-2 w-6 bg-current opacity-60 rounded-xs shadow-[0_0_6px_currentColor]" />
              <span className="h-2 w-3 bg-current opacity-90 rounded-xs shadow-[0_0_8px_currentColor]" />
              <span className="h-2 w-8 bg-current rounded-xs shadow-[0_0_12px_currentColor]" />
            </div>
          </div>

          {/* Bottom HUD Telemetry & Coordinates */}
          <div
            className="flex justify-between items-end w-full text-[10px] font-mono font-bold tracking-widest drop-shadow-[0_0_8px_currentColor]"
            style={{ color: colorHex }}
          >
            <span className="opacity-80">VSI 42834 // RADAR</span>
            <div className="flex items-center gap-1.5">
              <span className="opacity-95">ARC.REACTOR [ACTIVE]</span>
              <span className="w-2.5 h-2.5 border-2 border-current rounded-full inline-block animate-spin shadow-[0_0_8px_currentColor]" />
            </div>
          </div>

          {/* Corner Angles */}
          <div className="absolute top-1 left-1 w-5 h-5 border-t-2 border-l-2 drop-shadow-[0_0_10px_currentColor]" style={{ borderColor: colorHex, color: colorHex }} />
          <div className="absolute top-1 right-1 w-5 h-5 border-t-2 border-r-2 drop-shadow-[0_0_10px_currentColor]" style={{ borderColor: colorHex, color: colorHex }} />
          <div className="absolute bottom-1 left-1 w-5 h-5 border-b-2 border-l-2 drop-shadow-[0_0_10px_currentColor]" style={{ borderColor: colorHex, color: colorHex }} />
          <div className="absolute bottom-1 right-1 w-5 h-5 border-b-2 border-r-2 drop-shadow-[0_0_10px_currentColor]" style={{ borderColor: colorHex, color: colorHex }} />
        </div>

        {/* Dynamic State Scaler */}
        <div
          className="relative w-full h-full flex items-center justify-center ease-out will-change-transform"
          style={{
            transitionProperty: 'transform',
            transitionDuration: status === 'speaking' ? '75ms' : '500ms',
            transform: `scale(${targetScale})`
          }}
        >
          {/* Multi-layered Intense Reactor Aura Bloom */}
          <div
            className={`absolute inset-0 m-auto w-64 h-64 rounded-full ${glowClass} blur-[50px] will-change-transform animate-[jarvis-pulse-glow_3.5s_ease-in-out_infinite]`}
          />
          <div
            className="absolute inset-0 m-auto w-40 h-40 rounded-full bg-white/40 blur-[30px] will-change-transform pointer-events-none"
          />

          {/* Layer 1: Outer Holographic Technical Dial (Rotates Slow) */}
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 w-full h-full pointer-events-none animate-[jarvis-spin-slow_35s_linear_infinite] drop-shadow-[0_0_12px_currentColor]"
            style={{ color: colorHex }}
          >
            {/* Outer segmented gauge */}
            <circle
              cx="200"
              cy="200"
              r="186"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 8"
              opacity="0.8"
            />
            <circle
              cx="200"
              cy="200"
              r="176"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="90 30 20 30"
              opacity="0.95"
            />
            {/* Degree Tick marks */}
            {[...Array(24)].map((_, i) => (
              <line
                key={i}
                x1="200"
                y1="14"
                x2="200"
                y2={i % 6 === 0 ? "28" : "22"}
                stroke="currentColor"
                strokeWidth={i % 6 === 0 ? "3" : "1.8"}
                opacity={i % 6 === 0 ? "1" : "0.75"}
                transform={`rotate(${i * 15} 200 200)`}
              />
            ))}
          </svg>

          {/* Layer 2: Middle Counter-Rotating Filament & Arc Cluster */}
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 w-full h-full pointer-events-none animate-[jarvis-spin-reverse_20s_linear_infinite] drop-shadow-[0_0_14px_currentColor]"
            style={{ color: colorHex }}
          >
            {/* Slotted Concentric Arc Filaments */}
            <circle
              cx="200"
              cy="200"
              r="150"
              fill="none"
              stroke="currentColor"
              strokeWidth="4.5"
              strokeDasharray="140 40 40 40"
              opacity="1"
              strokeLinecap="round"
            />
            <circle
              cx="200"
              cy="200"
              r="138"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeDasharray="10 8"
              opacity="0.75"
            />
            <circle
              cx="200"
              cy="200"
              r="126"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeDasharray="70 25 80 25"
              opacity="0.9"
            />
            {/* Technical Node Satellites */}
            <circle cx="200" cy="50" r="5" fill="currentColor" opacity="1" className="shadow-[0_0_10px_currentColor]" />
            <circle cx="200" cy="350" r="5" fill="currentColor" opacity="1" className="shadow-[0_0_10px_currentColor]" />
            <circle cx="50" cy="200" r="5" fill="currentColor" opacity="1" className="shadow-[0_0_10px_currentColor]" />
            <circle cx="350" cy="200" r="5" fill="currentColor" opacity="1" className="shadow-[0_0_10px_currentColor]" />
          </svg>

          {/* Layer 3: High-Speed Holographic Energy Sphere Vortex (Tilted 3D Effect) */}
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 w-full h-full pointer-events-none animate-[jarvis-filament-spin_12s_ease-in-out_infinite] drop-shadow-[0_0_16px_currentColor]"
            style={{ color: colorHex }}
          >
            {/* Tilted orbital ellipses representing 3D holographic sphere depth */}
            <ellipse
              cx="200"
              cy="200"
              rx="118"
              ry="62"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="35 15 55 15"
              opacity="0.95"
              transform="rotate(35 200 200)"
            />
            <ellipse
              cx="200"
              cy="200"
              rx="118"
              ry="62"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="45 12 25 12"
              opacity="0.95"
              transform="rotate(-40 200 200)"
            />
            <ellipse
              cx="200"
              cy="200"
              rx="108"
              ry="98"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="85 30"
              opacity="1"
            />
          </svg>

          {/* Layer 4: Inner Arc Reactor Core Ring */}
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 w-full h-full pointer-events-none animate-[jarvis-spin-fast_7s_linear_infinite] drop-shadow-[0_0_20px_currentColor]"
            style={{ color: colorHex }}
          >
            <circle
              cx="200"
              cy="200"
              r="86"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray="40 15 15 15"
              opacity="1"
              strokeLinecap="round"
            />
            <circle
              cx="200"
              cy="200"
              r="74"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 6"
              opacity="0.8"
            />
          </svg>

          {/* Central Reactor Eye / Sentient Core Visor (Crystal Neon Core) */}
          <div className="relative z-20 flex items-center justify-center p-3 rounded-full bg-amber-500/20 backdrop-blur-md border-2 border-amber-300/80 shadow-[0_0_40px_rgba(255,183,0,0.8),inset_0_0_20px_rgba(255,200,0,0.5)]">
            <SentientCyberEyes
              mood={mood}
              status={status}
              intensity={intensity}
              colorHex={colorHex}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CubeVisualizer
