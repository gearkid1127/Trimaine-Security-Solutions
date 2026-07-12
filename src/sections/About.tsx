import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Decorative left column */}
          <div className={styles.accent} aria-hidden="true">
            <div className={styles.accentLine} />
            <div className={styles.accentShield}>
              <svg viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 4L6 11v16c0 11.6 7.6 22.4 18 25.4C34.4 49.4 42 38.6 42 27V11L24 4Z"
                  fill="none"
                  stroke="rgba(201,161,42,0.5)"
                  strokeWidth="1.5"
                />
                <path
                  d="M24 12L12 16.5V27c0 7.2 4.8 14 12 16.2C31.2 41 36 34.2 36 27V16.5L24 12Z"
                  fill="none"
                  stroke="rgba(201,161,42,0.25)"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>

          {/* Text content */}
          <div className={styles.content}>
            <span className={styles.eyebrow}>About Us</span>
            <h2 id="about-heading" className={styles.heading}>
              Committed to Professionalism &amp; Preparation
            </h2>
            <div className={styles.body}>
              <p>
                Trimaine Security Solutions Inc. is a professional services firm
                based in Lisle, Illinois, dedicated to helping individuals and
                organizations in the Chicagoland area stay informed, prepared, and
                protected. We combine hands-on training with confidential
                investigative services — all delivered with the care and integrity
                our clients deserve.
              </p>
              <p>
                Our approach is rooted in professionalism, discretion, and a
                commitment to clear communication. Whether you are seeking
                training, legal document services, or investigative support, you
                can expect a dedicated team that treats every client relationship
                with respect and seriousness.
              </p>
              <p>
                We are proud to serve communities across Chicagoland and look
                forward to discussing how we can assist you.{' '}
                <em>More information about our background and team will be
                shared here soon.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
