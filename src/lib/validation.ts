import { z } from 'zod';

/**
 * Schema for validating individual selection items
 */
export const selectionSchema = z.object({
  category: z.string().min(1, 'Category is required'),
  name: z.string().min(1, 'Name is required'),
});

/**
 * Schema for validating project data
 */
export const projectSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.email('Enter a valid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  zipCode: z.string().min(1, 'Zip code is required'),
  image: z.instanceof(File),
  selections: z.array(selectionSchema),
});
