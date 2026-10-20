import React from 'react';

interface RobotMascotProps {
  speechBubbleText?: string;
  size?: 'sm' | 'md' | 'lg';
  showBubble?: boolean;
}

export const RobotMascot: React.FC<RobotMascotProps> = ({
  speechBubbleText = "Hi! I'm Zoya from [Your Business]. Ask me anything!",
  size = 'md',
  showBubble = true,
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-28 h-28 sm:w-32 sm:h-32',
    lg: 'w-36 h-36 sm:w-44 sm:h-44',
  };

  return (
    <div className="relative inline-flex flex-col items-center select-none group">
      {/* Speech Bubble */}
      {showBubble && (
        <div className="mb-3 max-w-[240px] bg-white border border-purple-200 rounded-2xl p-3 shadow-[0_8px_24px_rgba(124,58,237,0.15)] text-left relative animate-bounce-subtle z-10">
          <p className="text-xs sm:text-sm text-[#0A0F1C] font-semibold leading-snug">
            {speechBubbleText}
          </p>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-purple-200 rotate-45" />
        </div>
      )}

      {/* Robot Body Container with Float Animation */}
      <div className={`relative ${sizeClasses[size]} animate-float`}>
        {/* Glow halo behind head */}
        <div className="absolute inset-0 rounded-full bg-[#3B6CFF]/25 blur-xl -z-10 group-hover:bg-[#F5C542]/30 transition-all duration-500" />

        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
          <defs>
            {/* White Sphere Gradient */}
            <radialGradient id="robotWhiteGradient" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="65%" stopColor="#E2E8F4" />
              <stop offset="100%" stopColor="#B4C2DC" />
            </radialGradient>

            {/* Dark Visor Gradient */}
            <linearGradient id="visorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0A0E2A" />
              <stop offset="100%" stopColor="#141838" />
            </linearGradient>

            {/* Blue Eye Glow */}
            <radialGradient id="blueEyeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#80B5FF" />
              <stop offset="50%" stopColor="#3B6CFF" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </radialGradient>

            {/* Gold Accents */}
            <linearGradient id="goldDetail" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD65C" />
              <stop offset="100%" stopColor="#E9A93F" />
            </linearGradient>
          </defs>

          {/* Antenna */}
          <line x1="100" y1="36" x2="100" y2="18" stroke="#A0AEC0" strokeWidth="4" strokeLinecap="round" />
          <circle cx="100" cy="15" r="7" fill="url(#goldDetail)" filter="drop-shadow(0 0 4px #F5C542)" />

          {/* Head */}
          <rect
            x="45"
            y="34"
            width="110"
            height="85"
            rx="42"
            fill="url(#robotWhiteGradient)"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />

          {/* Headset Band */}
          <path
            d="M 40 76 A 65 65 0 0 1 160 76"
            fill="none"
            stroke="#2B3252"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Earcups */}
          <rect x="35" y="65" width="12" height="24" rx="6" fill="url(#goldDetail)" />
          <rect x="153" y="65" width="12" height="24" rx="6" fill="url(#goldDetail)" />

          {/* Visor */}
          <rect
            x="58"
            y="52"
            width="84"
            height="46"
            rx="23"
            fill="url(#visorGradient)"
            stroke="#283058"
            strokeWidth="2"
          />

          {/* Glowing Blue Eyes */}
          <g className="eyes">
            <ellipse cx="80" cy="74" rx="9" ry="12" fill="url(#blueEyeGlow)">
              <animate
                attributeName="ry"
                values="12;12;1;12;12"
                keyTimes="0;0.92;0.95;0.98;1"
                dur="4s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse cx="120" cy="74" rx="9" ry="12" fill="url(#blueEyeGlow)">
              <animate
                attributeName="ry"
                values="12;12;1;12;12"
                keyTimes="0;0.92;0.95;0.98;1"
                dur="4s"
                repeatCount="indefinite"
              />
            </ellipse>
            {/* Eye Highlights */}
            <circle cx="83" cy="70" r="3" fill="#FFFFFF" />
            <circle cx="123" cy="70" r="3" fill="#FFFFFF" />
          </g>

          {/* Friendly Smile / Light bar on visor */}
          <path
            d="M 92 88 Q 100 93 108 88"
            stroke="#3B6CFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />

          {/* Floating Body */}
          <rect
            x="64"
            y="126"
            width="72"
            height="58"
            rx="28"
            fill="url(#robotWhiteGradient)"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />

          {/* Chest Core / Heart Indicator */}
          <circle cx="100" cy="152" r="10" fill="#0E1232" stroke="#2B3252" strokeWidth="1.5" />
          <circle cx="100" cy="152" r="6" fill="url(#blueEyeGlow)">
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Floating Hands */}
          <ellipse cx="44" cy="148" rx="11" ry="14" fill="url(#robotWhiteGradient)">
            <animate
              attributeName="cy"
              values="148;144;148"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="156" cy="148" rx="11" ry="14" fill="url(#robotWhiteGradient)">
            <animate
              attributeName="cy"
              values="148;144;148"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </ellipse>
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounceSubtle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
