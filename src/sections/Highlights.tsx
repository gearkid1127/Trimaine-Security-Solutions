import styles from './Highlights.module.css';

const highlights = [
  {
    id: 'professional',
    title: 'Professional Service',
    text: 'We bring a detail-oriented, professional approach to every engagement — ensuring you receive reliable guidance and dependable execution from start to finish.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: 'experienced',
    title: 'Experienced Guidance',
    text: 'Our team brings practical, real-world knowledge to every service — helping clients understand their options and move forward with confidence and clarity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="M16 3.5l1.5 1.5-4 4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'chicagoland',
    title: 'Serving Chicagoland',
    text: 'Proudly serving individuals and businesses throughout the greater Chicago metropolitan area, with a home base in Lisle, Illinois.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

export default function Highlights() {
  return (
    <section className={styles.section} aria-label="Our strengths">
      <div className="container">
        <ul className={styles.grid}>
          {highlights.map((item) => (
            <li key={item.id} className={styles.card}>
              <div className={styles.iconWrap}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
