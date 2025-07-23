'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionView('Contact');

  return (
    // for "min()" css will pick the smaller of the values based on available viewport width
    // so if viewport width is less than 38rem, it will use 100% width
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 scroll-mt-28 sm:mb-28 w-[min(100%,38rem)]text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{' '}
        <a className="underline">exampleemail@gmail.com</a> or through my social
        media channels or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error.message);
            return;
          }
          toast.success('Email sent successfully');
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your Message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
