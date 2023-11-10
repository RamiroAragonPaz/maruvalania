
import { Email } from '../../components/Ecommerce/Email/Template/Email';
import { Resend } from 'resend';

const resend = new Resend('re_Xt7XqMdo_Mst2UBHX36hJMhnyT1aC4gUo');

export default async () => {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: Email(),
    });

    console.log(data);
  } catch (error) {
    console.log(error)
  }
};
