import { getSupabaseAdmin } from '@/lib/supabase/server';
import type { EnquiryPayload } from '@/types/enquiry';
import { sendEnquiryEmail } from './enquiry.email';

export async function createEnquiry(enquiry: EnquiryPayload) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from('enquiries').insert({
    name: enquiry.name,
    email: enquiry.email,
    phone: enquiry.phone,
    event_type: enquiry.eventType,
    event_date: enquiry.eventDate,
    location: enquiry.location,
    message: enquiry.message || null,
    service: enquiry.service || null,
    package_name: enquiry.packageName || null,
    consent: enquiry.consent,
    status: 'new'
  }).select('id').single();

  if (error) throw new Error(`Supabase enquiry insert failed: ${error.message}`);

  let emailSent = false;
  try {
    const emailResult = await sendEnquiryEmail(enquiry);
    emailSent = !emailResult.skipped;
  } catch (error) {
    console.error('Enquiry email notification failed:', error);
  }

  return { id: data.id, emailSent };
}



