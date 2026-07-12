import styles from './Services.module.css';
import { services } from '@/data';

const icons: Record<string, React.ReactNode> = {
  'concealed-carry': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M12 2L3 6v8c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6L12 2z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  'first-aid-cpr': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="12" y1="8" x2="12" y2="16" strokeLinecap="round" />
      <line x1="8"  y1="12" x2="16" y2="12" strokeLinecap="round" />
    </svg>
  ),
  'process-serving': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" strokeLinecap="round" />
      <line x1="8" y1="17" x2="13" y2="17" strokeLinecap="round" />
    </svg>
  ),
  'private-investigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" strokeLinecap="round" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>What We Offer</span>
          <h2 id="services-heading" className={styles.heading}>
            Our Services
          </h2>
          <p className={styles.sub}>
            Trimaine Security Solutions offers a focused range of professional
            services designed to prepare, protect, and support our clients.
          </p>
        </div>

        <ul className={styles.grid}>
          {services.map((service) => (
            <li key={service.id} className={styles.card}>
              <div className={styles.iconWrap}>
                {icons[service.id]}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
