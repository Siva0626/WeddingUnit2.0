import { Header } from '@/components/Header/Header';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';
import { WhatsAppButton } from '@/components/WhatsApp/WhatsAppButton';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact & Booking' };

export default function ContactPage() {
  return <><Header /><main style={{ paddingTop: 78 }}><Contact /></main><Footer /><WhatsAppButton /></>;
}



