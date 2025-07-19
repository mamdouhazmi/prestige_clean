import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'mamdouhazmi20@gmail.com', // Use Resend's default sender email or your verified domain
            to: 'steamclean092@gmail.com',
            subject: 'First message',
            html: '<h1>Hello from SteamCares</h1>'
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ message: 'Email sent successfully', id: data?.id }, { status: 200 });
    } catch (error) {
        // Log the error for debugging
        console.error('Failed to send email:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
