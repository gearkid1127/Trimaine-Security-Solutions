'use client';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';
import Hero from '@/sections/Hero';
import Highlights from '@/sections/Highlights';
import Services from '@/sections/Services';
import About from '@/sections/About';
import ContactCTA from '@/sections/ContactCTA';

export default function SiteShell() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Highlights />
        <Services />
        <About />
        <ContactCTA onOpenModal={openModal} />
      </main>
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
