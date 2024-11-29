import nodemailer from "nodemailer";

interface EmailParams {
  to: string;
  name: string;
  subject: string;
  body: string;
}

export async function sendEmail({ to, name, subject, body }: EmailParams) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

  if (!SMTP_PASSWORD || !SMTP_EMAIL) {
    throw new Error("SMTP credentials are missing.");
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transport.verify();
  } catch (err) {
    console.error(`Error in email verification: ${err}`);
    throw new Error("Failed to verify transport");
  }

  try {
    await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log("Email sent successfully");
  } catch (err) {
    console.error(`Error sending email: ${err}`);
    throw new Error("Failed to send email");
  }
}
