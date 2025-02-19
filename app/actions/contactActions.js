"use server";

import nodemailer from "nodemailer";

export async function submitForm(data) {
  const { fullName, email, phoneNumber, subject, budget, message } =
    Object.fromEntries(data);

  // Validate required fields
  if (!fullName || !email || !subject) {
    throw new Error("Please fill all required fields.");
  }

  try {
    // Create a transporter object
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Use your SMTP host (e.g., Gmail, Outlook)
      port: 587, // Port number (587 for TLS)
      secure: false, // Set to true for port 465, false for port 587
      auth: {
        user: "siddhantthakur43@gmail.com", // Replace with your email
        pass: "tdde adml uabb tmoo", // Replace with your email password or app-specific password
      },
    });

    // Compose the email
    const mailOptions = {
      from: `"${fullName}" <${email}>`, // Sender info
      to: "siddhantthakur43@gmail.com", // Replace with the destination email
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        You have received a new message from your website contact form:

        Name: ${fullName}
        Email: ${email}
        Phone: ${phoneNumber || "Not provided"}
        Subject: ${subject || "Not provided"}
        Message: ${message}
      `,
      html: `
        <h3>You have received a new message from your website contact form:</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject || "Not provided"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return { success: true, message: "Your message was sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send your message. Please try again later.");
  }
}
