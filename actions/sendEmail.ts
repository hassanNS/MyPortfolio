'use server';

import { validateString } from '@/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

// no need to create a whole separate api because you can run this server action
// in a client component
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  'use server';
  console.log('running on server');
  const senderEmail = formData.get('senderEmail') as string;
  const message = formData.get('message') as string;

  if (!validateString(senderEmail, 500)) {
    console.log('Invalid sender email:', senderEmail);
    return {
      error: 'Invalid sender email',
    };
  }

  if (!validateString(message, 5000)) {
    console.log('Invalid message:', message);
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'fantasygiga@yahoo.com',
      subject: 'Message from Portfolio Contact Form',
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        // need to do this because this is ts fie not tsx
        message,
        senderEmail,
      }),
    });

    console.log('Email sent successfully:', data);
  } catch (error: any) {
    console.error('Error sending email:', error);
    return {
      error: error.message,
    };
  }

  return {
    data,
  };
};
