import { NextRequest, NextResponse } from 'next/server';
import { sendOTPEmail } from '../../lib/emailService';

export async function POST(request: NextRequest) {
  try {
    const { email, otp }: { email: string; otp: string } = await request.json();

    const result = await sendOTPEmail(email, otp);

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
