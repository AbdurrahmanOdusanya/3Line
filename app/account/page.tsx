// ==============================================================================
// 3LINE GADGETS — CUSTOMER ACCOUNT PORTAL
// app/account/page.tsx
// ==============================================================================

import { requireAuth } from '@/lib/auth/session';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SignOutButton } from '@/components/auth/SignOutButton';
import { User, Mail, MapPin, ShoppingBag, Heart, ShieldCheck } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AccountPage() {
  const { user, profile } = await requireAuth('/account');

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Account Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              My Customer Portal
            </h1>
            <Badge variant="secondary">{profile.role}</Badge>
          </div>
          <p className="text-sm text-slate-400">
            Manage your personal profile, addresses, and track order deliveries.
          </p>
        </div>
        <SignOutButton />
      </div>

      {/* Profile Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <User className="w-4 h-4 text-cyan-400" />
            Profile Information
          </CardTitle>
          <CardDescription>
            Personal identity authenticated via Supabase Auth &amp; PostgreSQL RLS.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <span className="text-xs text-slate-400 block mb-1">Full Name</span>
            <span className="font-medium text-slate-200">
              {profile.full_name || 'Not provided'}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <span className="text-xs text-slate-400 block mb-1">Email Address</span>
            <span className="font-medium text-slate-200">
              {user.email || 'No email attached'}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <span className="text-xs text-slate-400 block mb-1">Phone Number</span>
            <span className="font-medium text-slate-200">
              {profile.phone || 'Not provided'}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <span className="text-xs text-slate-400 block mb-1">Account Status</span>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-medium">Active Customer</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Sections Placeholders (Addresses, Orders, Wishlist) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-dashed">
          <CardHeader className="p-4">
            <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Saved Addresses</span>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 text-xs text-slate-400">
            <code>addresses</code> table ready. Address book UI will be activated in upcoming feature.
          </CardContent>
        </Card>

        <Card className="border-dashed">
          <CardHeader className="p-4">
            <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>Orders &amp; Shipments</span>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 text-xs text-slate-400">
            <code>orders</code> &amp; <code>shipments</code> schema ready. Order history will activate upon checkout release.
          </CardContent>
        </Card>

        <Card className="border-dashed">
          <CardHeader className="p-4">
            <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
              <Heart className="w-4 h-4 text-rose-400" />
              <span>Wishlist</span>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 text-xs text-slate-400">
            <code>wishlists</code> &amp; <code>wishlist_items</code> tables ready with unique user constraint.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
