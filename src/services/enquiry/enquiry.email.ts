import type { EnquiryPayload } from '@/types/enquiry';

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (char) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      })[char] ?? char,
  );
}

export async function sendEnquiryEmail(enquiry: EnquiryPayload) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured.');
  }

  const from = 'The Wedding Unit Photography <enquiry@theweddingunitmail.com>';
  const to = 'theweddingunit@gmail.com';

  const subject = `New wedding enquiry — ${enquiry.name}`;

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
    `Message: ${enquiry.message || '—'}`,
  ].join('\n');

  const html = `
    <!doctype html>
    <html>
      <body style="margin:0;padding:24px;background:#f5f5f5;font-family:Arial,sans-serif;color:#111;">
        <div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #ddd;padding:32px;">
          <h2 style="margin:0 0 24px;font-size:24px;">
            ${escapeHtml(subject)}
          </h2>

          <table
            cellpadding="10"
            cellspacing="0"
            border="1"
            style="width:100%;border-collapse:collapse;border-color:#ddd;"
          >
            <tr>
              <td><strong>Name</strong></td>
              <td>${escapeHtml(enquiry.name)}</td>
            </tr>
            <tr>
              <td><strong>Email</strong></td>
              <td>${escapeHtml(enquiry.email)}</td>
            </tr>
            <tr>
              <td><strong>Phone</strong></td>
              <td>${escapeHtml(enquiry.phone)}</td>
            </tr>
            <tr>
              <td><strong>Event</strong></td>
              <td>${escapeHtml(enquiry.eventType)}</td>
            </tr>
            <tr>
              <td><strong>Date</strong></td>
              <td>${escapeHtml(enquiry.eventDate)}</td>
            </tr>
            <tr>
              <td><strong>Location</strong></td>
              <td>${escapeHtml(enquiry.location)}</td>
            </tr>
            <tr>
              <td><strong>Service</strong></td>
              <td>${escapeHtml(enquiry.service || 'Not specified')}</td>
            </tr>
            <tr>
              <td><strong>Package</strong></td>
              <td>${escapeHtml(enquiry.packageName || 'Not specified')}</td>
            </tr>
            <tr>
              <td><strong>Consent</strong></td>
              <td>${enquiry.consent ? 'Yes' : 'No'}</td>
            </tr>
          </table>

          <div style="margin-top:24px;">
            <p><strong>Message</strong></p>
            <p style="white-space:pre-wrap;">
              ${escapeHtml(enquiry.message || '—')}
            </p>
          </div>
        </div>
      </body>
    </html>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: enquiry.email,
      subject,
      html,
      text,
    }),
  });

  const result = (await response.json()) as {
    id?: string;
    message?: string;
  };

  if (!response.ok) {
    throw new Error(
      `Resend email failed with status ${response.status}: ${
        result.message || 'Unknown error'
      }`,
    );
  }

  if (!result.id) {
    throw new Error('Resend did not return an email ID.');
  }

  return {
    skipped: false as const,
    emailId: result.id,
  };
}


