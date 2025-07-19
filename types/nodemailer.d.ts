declare module 'nodemailer' {
  interface TransportOptions {
    host: string;
    port: number;
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
  }

  interface MailOptions {
    from: string;
    to: string;
    subject: string;
    text: string;
  }

  interface Transporter {
    sendMail(mailOptions: MailOptions): Promise<unknown>;
    verify(): Promise<unknown>;
  }

  function createTransport(options: TransportOptions): Transporter;
}
