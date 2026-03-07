import { ReactNode } from "react";
import { Resend } from "resend";

export async function sendMail({
    template,
    subject,
    to,
}: {
    subject: string,
    to: string,
    template: string,
}) {
    return new Promise<void>(async (resolve, reject) => {
        try {

            const RESEND_API_KEY = process.env.RESEND_API_KEY;
            const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;

            if (!RESEND_API_KEY) {
                throw new Error("Please provide RESEND_API_KEY in .env");
            }

            if (!RESEND_FROM_EMAIL) {
                throw new Error("Please provide RESEND_FROM_EMAIL in .env");
            }

            const resend = new Resend(process.env.RESEND_API_KEY);

            const sendMail = await resend.emails.send({
                from: `Sknly <${RESEND_FROM_EMAIL}>`,
                to,
                subject,
                text: template,
            });

            if (sendMail.error) {
                throw new Error(`${sendMail.error.statusCode}: ${sendMail.error.name} - ${sendMail.error.message}`);
            }

            return resolve();

        } catch (err) {
            return reject(err);
        }
    })
}