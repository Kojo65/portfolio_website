import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema, type ContactResponse } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Register all our API routes
export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate incoming data
      const validatedData = contactMessageSchema.parse(req.body);
      
      // Store the message
      await storage.saveContactMessage(validatedData);
      
      // Setup email transport
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || process.env.GMAIL_USER || 'your-email@gmail.com',
          pass: process.env.EMAIL_PASS || process.env.GMAIL_PASS || 'your-app-password'
        }
      });
      
      // Prepare email content
      const mailOptions = {
        from: process.env.EMAIL_USER || process.env.GMAIL_USER || 'your-email@gmail.com',
        to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER || process.env.GMAIL_USER || 'your-email@gmail.com',
        subject: `Portfolio Contact: Message from ${validatedData.name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `
      };
      
      // Try to send the email
      try {
        await transporter.sendMail(mailOptions);
        
        const response: ContactResponse = {
          success: true,
          message: "Thank you for your message! I'll get back to you soon."
        };
        
        res.json(response);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        
        // Still respond successfully since we saved the message
        const response: ContactResponse = {
          success: true,
          message: "Your message has been received! I'll get back to you soon."
        };
        
        res.json(response);
      }
      
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Please check your form data and try again.",
          errors: error.errors
        });
      } else {
        // Handle other errors
        console.error('Contact form error:', error);
        res.status(500).json({
          success: false,
          message: "An error occurred while sending your message. Please try again."
        });
      }
    }
  });

  // Create and return the HTTP server
  const httpServer = createServer(app);
  return httpServer;
}