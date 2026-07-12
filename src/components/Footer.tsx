import styles from './Footer.module.css';
import { navLinks } from '@/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg
                className={styles.logoIcon}
                viewBox="0 0 24 28"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 2L3 6v8c0 5.8 3.9 11.2 9 12.7C17.1 25.2 21 19.8 21 14V6L12 2z"
                  fill="#c9a12a"
                />
                <path
                  d="M12 7L7.5 9.2v4.5c0 2.7 1.7 5 4.5 6 2.8-1 4.5-3.3 4.5-6V9.2L12 7z"
                  fill="rgba(7, 15, 30, 0.5)"
                />
              </svg>
              <div>
                <p className={styles.logoName}>Trimaine Security Solutions Inc.</p>
              </div>
            </div>
            <p className={styles.tagline}>
              Professional security training, process serving, and
              investigative services — serving Chicagoland with integrity.
            </p>
          </div>

          {/* Nav links */}
          <nav className={styles.nav} aria-label="Footer navigation">
            <p className={styles.navHeading}>Navigation</p>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact info */}
          <div className={styles.contact}>
            <p className={styles.navHeading}>Contact</p>
            <ul className={styles.contactList}>
              <li>
                <a href="tel:+17082281963" className={styles.contactLink}>
                  (708) 228-1963
                </a>
              </li>
              <li>
                <address className={styles.address}>
                  3333 Warrenville Road, Suite 200
                  <br />
                  Lisle, IL 60532
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} Trimaine Security Solutions Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
