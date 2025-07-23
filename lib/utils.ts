import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateString = (value: string, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    console.log(value);
    console.log(value.length);
    return false;
  }
  return true;
};
