import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: '3Line Gadgets',
  description: 'Production-ready foundation for 3Line Gadgets importation and retail e-commerce platform with Supabase integration, authentication architecture, and comprehensive database schema.',
  openGraph: {
    title: '3Line Gadgets',
    description: 'Production-ready foundation for 3Line Gadgets importation and retail e-commerce platform with Supabase integration, authentication architecture, and comprehensive database schema.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3Line Gadgets',
    description: 'Production-ready foundation for 3Line Gadgets importation and retail e-commerce platform with Supabase integration, authentication architecture, and comprehensive database schema.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
