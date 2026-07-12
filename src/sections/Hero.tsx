import styles from './Hero.module.css';

interface Props {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: Props) {
  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.inner}`}>
        {/* Content */}
        <div className={styles.content}>
          <span className={styles.badge}>Serving the Chicagoland Area</span>
          <h1 className={styles.heading}>
            Professional Security Training &amp; Investigation Services
          </h1>
          <p className={styles.sub}>
            Trimaine Security Solutions Inc. provides dependable training,
            professional process serving, and confidential investigative
            services for individuals and businesses throughout Chicagoland.
          </p>
          <div className={styles.actions}>
            <button className="btn-primary" onClick={onOpenModal}>
              Request Information
            </button>
            <a href="#services" className="btn-outline">
              View Services
            </a>
          </div>
        </div>

        {/* Shield Visual */}
        <div className={styles.visual} aria-hidden="true">
          <svg
            className={styles.shieldSvg}
            viewBox="0 0 280 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="shieldGrad"
                x1="140"
                y1="16"
                x2="140"
                y2="306"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#2563b8" />
                <stop offset="100%" stopColor="#0d1f3c" />
              </linearGradient>
              <linearGradient
                id="ringGrad"
                x1="0"
                y1="0"
                x2="280"
                y2="320"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="rgba(201,161,42,0.2)" />
                <stop offset="100%" stopColor="rgba(201,161,42,0.04)" />
              </linearGradient>
            </defs>

            {/* Outer decorative rings */}
            <circle
              cx="140"
              cy="152"
              r="132"
              stroke="url(#ringGrad)"
              strokeWidth="1"
            />
            <circle
              cx="140"
              cy="152"
              r="112"
              stroke="rgba(201,161,42,0.08)"
              strokeWidth="1"
            />

            {/* Accent dots */}
            <circle cx="30" cy="52"  r="3.5" fill="rgba(201,161,42,0.35)" />
            <circle cx="250" cy="52" r="3.5" fill="rgba(201,161,42,0.35)" />
            <circle cx="18"  cy="162" r="2.5" fill="rgba(201,161,42,0.25)" />
            <circle cx="262" cy="162" r="2.5" fill="rgba(201,161,42,0.25)" />
            <circle cx="48"  cy="272" r="2"   fill="rgba(201,161,42,0.2)"  />
            <circle cx="232" cy="272" r="2"   fill="rgba(201,161,42,0.2)"  />

            {/* Main shield */}
            <path
              d="M140 16L248 56V160C248 228 200 288 140 306C80 288 32 228 32 160V56L140 16Z"
              fill="url(#shieldGrad)"
              stroke="rgba(201,161,42,0.65)"
              strokeWidth="2"
            />

            {/* Inner shield border */}
            <path
              d="M140 44L228 78V160C228 218 188 268 140 284C92 268 52 218 52 160V78L140 44Z"
              fill="none"
              stroke="rgba(201,161,42,0.22)"
              strokeWidth="1.5"
            />

            {/* Horizontal accent line */}
            <line
              x1="52"
              y1="128"
              x2="228"
              y2="128"
              stroke="rgba(201,161,42,0.18)"
              strokeWidth="1"
            />

            {/* Top pin dot on shield */}
            <circle cx="140" cy="72" r="5" fill="rgba(201,161,42,0.55)" />
            <circle cx="92"  cy="100" r="3" fill="rgba(201,161,42,0.3)"  />
            <circle cx="188" cy="100" r="3" fill="rgba(201,161,42,0.3)"  />

            {/* Monogram */}
            <text
              x="140"
              y="186"
              fontFamily="system-ui, sans-serif"
              fontSize="40"
              fontWeight="700"
              fill="rgba(255,255,255,0.93)"
              textAnchor="middle"
              letterSpacing="6"
            >
              TSS
            </text>

            {/* Subtitle under monogram */}
            <text
              x="140"
              y="212"
              fontFamily="system-ui, sans-serif"
              fontSize="9.5"
              fontWeight="500"
              fill="rgba(201,161,42,0.75)"
              textAnchor="middle"
              letterSpacing="3.5"
            >
              SECURITY SOLUTIONS
            </text>
          </svg>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className={styles.divider} aria-hidden="true">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,40 C300,70 900,10 1200,40 L1200,60 L0,60 Z" fill="#f4f7fc" />
        </svg>
      </div>
    </section>
  );
}
