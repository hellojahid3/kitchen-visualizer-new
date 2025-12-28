import { z } from 'zod';

/**
 * Schema for validating user data
 */
export const userDataSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.email('Enter a valid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  zipCode: z.string().min(1, 'Zip code is required'),
});
