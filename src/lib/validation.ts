import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(100),
  email: z.string().trim().email('Enter a valid email').max(255),
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .or(z.literal('')),
  company: z.string().trim().max(150).optional().or(z.literal('')),
  service: z.string().trim().max(150).optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(10, 'Tell us a bit more (10+ characters)')
    .max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const leadSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(100),
  email: z.string().trim().email('Enter a valid email').max(255),
  phone: z.string().trim().min(6, 'Enter a valid phone').max(40),
  company: z.string().trim().max(150).optional().or(z.literal('')),
  notes: z.string().trim().max(2000).optional().or(z.literal('')),
});

export type LeadInput = z.infer<typeof leadSchema>;