import nodemailer from "nodemailer";

export async function sendEmail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try{
    const testTransport = await transport.verify();
    console.log(testTransport);
  }
  catch(err){
    console.log(`Error of Send Mail ${err}`);
    return
    
  }

  try{
    const sendResult = await transport.sendMail({
        from: SMTP_EMAIL,
        to,
        subject,
        html:body,
    })

    console.log(sendResult);
    
  }
  catch(err){
    console.log(`Error of Send Mail ${err}`);
    
  }
}
