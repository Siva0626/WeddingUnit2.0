import { NextResponse } from 'next/server';
import { enquirySchema } from '@/validation/enquiry.schema';
import { createEnquiry } from '@/services/enquiry/enquiry.service';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, message: 'Please correct the highlighted fields.', errors: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const result = await createEnquiry(parsed.data);
    return NextResponse.json({ ok: true, message: 'Your enquiry has been received. We will get back to you soon.', id: result.id });
  } catch (error) {
    console.error('Enquiry API error:', error);
    return NextResponse.json({ ok: false, message: 'We could not send your enquiry right now. Please try again or use WhatsApp.' }, { status: 500 });
  }
}


