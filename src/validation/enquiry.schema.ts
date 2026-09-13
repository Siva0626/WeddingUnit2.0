import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Full Name is required').max(120),
  email: z.string().trim().email('Enter a valid email address').max(160),
  phone: z.string().trim().regex(/^[+]?[- ()0-9]{8,20}$/, 'Enter a valid phone number'),
  eventType: z.string().trim().min(1, 'Event Type is required').max(80),
  eventDate: z.string().date('Enter a valid event date').refine((value) => value > new Date().toISOString().slice(0, 10), 'Event Date must be in the future'),
  location: z.string().trim().min(2, 'Location / Venue is required').max(200),
  message: z.string().trim().max(3000).optional().or(z.literal('')),
  service: z.string().trim().max(100).optional().or(z.literal('')),
  packageName: z.string().trim().max(100).optional().or(z.literal('')),
  consent: z.literal(true, { error: 'Consent is required' })
});


