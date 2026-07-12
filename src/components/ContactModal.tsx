'use client';

import { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';
import styles from './ContactModal.module.css';
import { services } from '@/data';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const emptyForm: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  /* Body scroll lock */
  useEffect(() => {
    document.body.classList.toggle('modal-open', isOpen);
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  /* Escape to close */
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  /* Reset state and focus first field each time the modal opens */
  useEffect(() => {
    if (!isOpen) return;
    const resetTimer = setTimeout(() => {
      setSubmitted(false);
      setForm(emptyForm);
    }, 0);
    const focusTimer = setTimeout(() => firstInputRef.current?.focus(), 60);
    return () => {
      clearTimeout(resetTimer);
      clearTimeout(focusTimer);
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.dialog}>
        {/* Header */}
        <div className={styles.dialogHeader}>
          <div className={styles.headerLeft}>
            <svg
              className={styles.headerIcon}
              viewBox="0 0 24 28"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 2L3 6v8c0 5.8 3.9 11.2 9 12.7C17.1 25.2 21 19.8 21 14V6L12 2z"
                fill="var(--color-gold)"
              />
            </svg>
            <h2 id="modal-title" className={styles.dialogTitle}>
              Request Information
            </h2>
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close dialog"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className={styles.dialogBody}>
          {submitted ? (
            <div className={styles.success} role="alert">
              <div className={styles.successIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className={styles.successTitle}>Request Received</h3>
              <p className={styles.successText}>
                Thank you for reaching out. A member of our team will follow up
                with you shortly.
              </p>
              <button className="btn-primary" onClick={onClose}>
                Close
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="modal-name" className={styles.label}>
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="modal-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  ref={firstInputRef}
                  className={styles.input}
                  autoComplete="name"
                  placeholder="Jane Smith"
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="modal-email" className={styles.label}>
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={styles.input}
                    autoComplete="email"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="modal-phone" className={styles.label}>
                    Phone Number
                  </label>
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={styles.input}
                    autoComplete="tel"
                    placeholder="(708) 000-0000"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="modal-service" className={styles.label}>
                  Service of Interest
                </label>
                <select
                  id="modal-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="modal-message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Tell us how we can help you…"
                />
              </div>

              <p className={styles.required}>
                Fields marked <span aria-hidden="true">*</span> are required.
              </p>

              <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
