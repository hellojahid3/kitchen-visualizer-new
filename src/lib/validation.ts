import { z } from 'zod';

export const selectionSchema = z.object({
  category: z.string().min(1, 'Category is required'),
  name: z.string().min(1, 'Name is required'),
});

export const projectSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email(),
  phone: z.string(),
  zipCode: z.string(),
  image: z.instanceof(File),
  selections: z.array(selectionSchema),
});
