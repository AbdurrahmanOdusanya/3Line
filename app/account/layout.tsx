// ==============================================================================
// 3LINE GADGETS — CUSTOMER ACCOUNT AREA LAYOUT
// app/account/layout.tsx
// ==============================================================================

import { requireAuth } from '@/lib/auth/session';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side authentication guard
  // Redirects unauthenticated users to /auth/login before rendering
  await requireAuth('/account');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Header />
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
      <Footer />
    </div>
  );
}
