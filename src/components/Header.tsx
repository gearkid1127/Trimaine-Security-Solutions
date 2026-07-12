'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { navLinks } from '@/data';

interface Props {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={closeMenu}>
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
          <span className={styles.logoText}>
            <span className={styles.logoName}>Trimaine Security</span>
            <span className={styles.logoSub}>Solutions Inc.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Main navigation">
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

        {/* Desktop CTA */}
        <button
          className={`btn-primary ${styles.ctaBtn}`}
          onClick={onOpenModal}
        >
          Request Information
        </button>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span
            className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`}
          />
          <span
            className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`}
          />
          <span
            className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-nav"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className={styles.mobileCta}>
              <button
                className="btn-primary"
                style={{ width: '100%' }}
                onClick={() => {
                  closeMenu();
                  onOpenModal();
                }}
              >
                Request Information
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
