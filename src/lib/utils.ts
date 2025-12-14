/**
 * Utility function to conditionally join class names.
 * Filters out falsy values and joins the rest with a space.
 *
 * @example cn('class1', undefined, 'class2', false, 'class3') // returns 'class1 class2 class3'
 * @param classes - An array of class names (strings) or falsy values.
 * @returns A single string with all truthy class names joined by a space.
 */
export const cn = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};
