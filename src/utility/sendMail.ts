import { createTransport } from "nodemailer";

export const sendMail = async function (
  name: string,
  email: string | "SELF",
  subject: string,
  message: string,
): Promise<{ status: number; message: string }> {
  const user = process.env.NODEMAILER_USER;
  const pass = process.env.NODEMAILER_PASS?.replace(/\s+/g, "");

  if (!user || !pass) {
    return new Promise((resolve) =>
      resolve({ status: 500, message: "Internal server error" }),
    );
  }

  const transporter = createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: "girish.yandigeri4@gmail.com",
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <h2>New message from your portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  };

  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Nodemailer error:", error);
        resolve({
          status: 500,
          message: error.message ?? "Failed to send mail",
        });
      } else {
        resolve({ status: 200, message: "Mail send successfully" });
      }
    });
  });
};
