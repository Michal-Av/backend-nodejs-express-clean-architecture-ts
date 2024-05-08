import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'michalrht1@gmail.com',
    pass: 'doolatcdfgeipbxy',
  },
});

export async function sendResetPasswordEmail(email: string, resetToken: string): Promise<void> {
  try {
    const mailOptions = {
      from: 'noreply@hello.com',
      to: email,
      subject: 'Password Reset',
      html: `<h2>Please click on the link to reset your password:</h2>
      <p>${process.env.CLIENT_URL}/reset-password/${resetToken}</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Reset password email sent successfully');
  } catch (error) {
    console.error('Error sending reset password email:', error);
    throw error; // Rethrow the error to be handled by the caller
  }
}
