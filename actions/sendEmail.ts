// "use server";

// import React from "react";
// import { Resend } from "resend";
// import { validateString, getErrorMessage } from "@/lib/utils";
// import ContactFormEmail from "@/email/contact-form-email";

// const resend = new Resend('re_UTFTu3Zh_4tgFkbD5VVJNZZRR5QBwWs1gM');
// // const resend = new Resend('a7db7789-7571-4f3c-982f-8c1f71f806b8');

// export const sendEmail = async (formData: FormData) => {
//   const senderEmail = formData.get("senderEmail");
//   const message = formData.get("message");

//   // simple server-side validation
//   if (!validateString(senderEmail, 500)) {
//     return {
//       error: "Invalid sender email",
//     };
//   }
//   if (!validateString(message, 5000)) {
//     return {
//       error: "Invalid message",
//     };
//   }

//   let data;
//   try {
//     data = await resend.emails.send({
//       from: 'Contact Form <onboarding@resend.dev>',
//       to: 'nitiansjee.academy@gmail.com',
//       subject: 'Message from contact form',
//       reply_to: senderEmail,
//       react: React.createElement(ContactFormEmail, {
//         message: message,
//         senderEmail: senderEmail,
//       }),
//     });
//   } catch (error: unknown) {
//     return {
//       error: getErrorMessage(error),
//     };
//   }

//   return {
//     data,
//   };
// };

// // "use server";


// // import React from "react";
// // import { Resend } from "resend";
// // import { validateString, getErrorMessage } from "@/lib/utils";
// // import ContactFormEmail from "@/email/contact-form-email";

// // const resend = new Resend("re_UTFTu3Zh_4tgFkbD5VVJNZZRR5QBwWs1gM"); // Replace 'YOUR_API_KEY' with your actual Resend API key

// // export const sendEmail = async (formData: FormData) => {
// //   const senderEmail = formData.get("senderEmail");
// //   const message = formData.get("message");

// //   // Simple server-side validation
// //   if (!validateString(senderEmail, 500)) {
// //     return {
// //       error: "Invalid sender email",
// //     };
// //   }
// //   if (!validateString(message, 5000)) {
// //     return {
// //       error: "Invalid message",
// //     };
// //   }

// //   let data;
// //   try {
// //     data = await resend.emails.send({
// //       // from: "Contact Form <onboarding@resend.dev>",
// //       from:"onboarding@resend.dev",
// //       to: "nitiansjee.academy@gmail.com", // Change this to your desired recipient email
// //       subject: "Message from contact form",
// //       reply_to: senderEmail,
// //       react: React.createElement(ContactFormEmail, {
// //         message: message,
// //         senderEmail: senderEmail,
// //       }),
// //     });
// //   } catch (error) {
// //     return {
// //       error: getErrorMessage(error),
// //     };
// //   }

// //   return {
// //     data,
// //   };
// // };


"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// const resend = new Resend('re_UTFTu3Zh_4tgFkbD5VVJNZZRR5QBwWs1gM');
const resend = new Resend('re_Ec4PGQiF_LaWzqzrNqKctQdXd1TQC9SAM');
// resend.emails.get('a7db7789-7571-4f3c-982f-8c1f71f806b8');

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'nitiansjee.academy@gmail.com', // Update the recipient email address
      subject: 'Message from contact form',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
