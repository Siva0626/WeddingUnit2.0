import type { EnquiryPayload } from '@/types/enquiry';

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char] ?? char));
}

export async function sendEnquiryEmail(enquiry: EnquiryPayload) {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;
  const from = process.env.CLOUDFLARE_FROM_EMAIL;
  const fromName = process.env.CLOUDFLARE_FROM_NAME || 'The Wedding Unit Photography';
  const to = process.env.CLOUDFLARE_TO_EMAIL;

  if (!accountId || !apiToken || !from || !to) return { skipped: true } as const;

  const endpoint = `https://api.cloudflare.com/client/v4/accounts/${accountId}/email/sending/send`;
  const subject = `New wedding enquiry â€” ${enquiry.name}`;
  const text = [
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone}`,
    `Event: ${enquiry.eventType}`,
    `Date: ${enquiry.eventDate}`,
    `Location: ${enquiry.location}`,
    `Service: ${enquiry.service || 'Not specified'}`,
    `Package: ${enquiry.packageName || 'Not specified'}`,
    `Consent: ${enquiry.consent ? 'Yes' : 'No'}`,
    `Message: ${enquiry.message || 'â€”'}`
  ].join('\n');

  const html = `<!doctype html><html><body style="font-family:Arial,sans-serif;color:#111"><h2>${escapeHtml(subject)}</h2><table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse"><tr><td><strong>Name</strong></td><td>${escapeHtml(enquiry.name)}</td></tr><tr><td><strong>Email</strong></td><td>${escapeHtml(enquiry.email)}</td></tr><tr><td><strong>Phone</strong></td><td>${escapeHtml(enquiry.phone)}</td></tr><tr><td><strong>Event</strong></td><td>${escapeHtml(enquiry.eventType)}</td></tr><tr><td><strong>Date</strong></td><td>${escapeHtml(enquiry.eventDate)}</td></tr><tr><td><strong>Location</strong></td><td>${escapeHtml(enquiry.location)}</td></tr><tr><td><strong>Service</strong></td><td>${escapeHtml(enquiry.service || 'Not specified')}</td></tr><tr><td><strong>Package</strong></td><td>${escapeHtml(enquiry.packageName || 'Not specified')}</td></tr></table><p><strong>Message</strong></p><p>${escapeHtml(enquiry.message || 'â€”').replace(/\n/g, '<br />')}</p></body></html>`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to,
      from: { address: from, name: fromName },
      reply_to: { address: enquiry.email, name: enquiry.name },
      subject,
      html,
      text
    })
  });

  if (!response.ok) throw new Error(`Cloudflare email failed with status ${response.status}.`);
  const result = await response.json() as { success?: boolean };
  if (!result.success) throw new Error('Cloudflare email service rejected the message.');
  return { skipped: false } as const;
}


