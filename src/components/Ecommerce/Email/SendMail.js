import { Resend } from 'resend';
import Email from './Email';

const resend = new Resend(process.env.RESEND_API);

export async function POST() {

    await resend.sendEmail({
        from: 'onboarding@resend.dev',
        to: 'ramiroaragonpaz@gmail.com',
        subject: 'Llego tu compra',
        react: Email(),
        attachments: [
            {
              filename: 'guiaAlimentaria.pdf',
            },
        ]
    });
}
