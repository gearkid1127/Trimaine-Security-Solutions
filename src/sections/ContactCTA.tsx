import styles from './ContactCTA.module.css';

interface Props {
  onOpenModal: () => void;
}

export default function ContactCTA({ onOpenModal }: Props) {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Left: CTA text */}
          <div className={styles.text}>
            <span className={styles.eyebrow}>Get in Touch</span>
            <h2 id="contact-heading" className={styles.heading}>
              Have Questions About Our Classes or Services?
            </h2>
            <p className={styles.sub}>
              We are happy to provide information about scheduling, requirements,
              or any of our professional services. Reach out and we will get back
              to you promptly.
            </p>
            <button className="btn-primary" onClick={onOpenModal}>
              Request Information
            </button>
          </div>

          {/* Right: Contact details */}
          <div className={styles.details}>
            <div className={styles.card}>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.73 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16z" />
                  </svg>
                </div>
                <div>
                  <p className={styles.detailLabel}>Phone</p>
                  <a href="tel:+17082281963" className={styles.detailValue}>
                    (708) 228-1963
                  </a>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className={styles.detailLabel}>Address</p>
                  <address className={styles.detailValue} style={{ fontStyle: 'normal' }}>
                    3333 Warrenville Road, Suite 200
                    <br />
                    Lisle, IL 60532
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
