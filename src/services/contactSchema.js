import { z } from 'zod'
import { sanitizeInput } from '../utils/text.js'

export const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.').max(80),
  email: z.email('Please enter a valid email address.'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number.')
    .max(18, 'Phone number is too long.')
    .regex(/^[0-9+\-\s()]+$/, 'Phone number can only include digits, spaces, +, -, and ().'),
  subject: z.string().min(3, 'Please add a subject.').max(120),
  budget: z.string().min(1, 'Please select a budget.'),
  projectType: z.string().min(1, 'Please select a project type.'),
  message: z.string().min(20, 'Please write at least 20 characters.').max(1200),
})

export function prepareContactPayload(values) {
  return Object.fromEntries(Object.entries(values).map(([key, value]) => [key, sanitizeInput(value)]))
}
