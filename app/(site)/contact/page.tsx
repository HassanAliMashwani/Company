'use client';

import React from 'react';
import { ContactForm } from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="pt-20 pb-16 min-h-screen">
      <ContactForm className="border-t-0 py-8" />
    </div>
  );
}
