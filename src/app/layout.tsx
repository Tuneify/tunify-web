import '@/styles/globals.css';

import { cn } from '@/lib/tailwind/utils';

import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Tunify',
  description:
    'Tunify is a music streaming service that allows you to listen to any song, anywhere, anytime.',
};

interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <>
      {/* Reducing hydration error. Reference : https://nextjs.org/docs/messages/react-hydration-error */}
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-primary-lightest antialiased font-outfit'
          )}
        >
          {children}
        </body>
      </html>
    </>
  );
}
