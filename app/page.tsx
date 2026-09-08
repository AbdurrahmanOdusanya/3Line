// ==============================================================================
// 3LINE GADGETS — FEATURE 1 FOUNDATION DASHBOARD
// app/page.tsx
// ==============================================================================

import Link from 'next/link';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SupabaseHealthCheck } from '@/components/shared/SupabaseHealthCheck';
import {
  Layers,
  Database,
  ShieldCheck,
  Key,
  Server,
  Lock,
  ArrowRight,
  Check,
  CheckCircle2,
  Table,
  FileCode,
  Smartphone,
  Laptop,
  Headphones,
  Zap,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Brand Hero & Technical Status */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950 p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10">
                Feature 1 Completed
              </Badge>
              <Badge variant="secondary">
                Production-Ready Foundation
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              3Line Gadgets
              <span className="block text-xl sm:text-2xl font-normal text-slate-400 mt-2">
                Importation &amp; Retail E-Commerce Infrastructure
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Clean, scalable technical foundation established: Supabase PostgreSQL database architecture with 21 relational tables, strict Row Level Security (RLS), Supabase SSR authentication with cookie session rotation, and Next.js 15 App Router structure.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/auth/login"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-all shadow-md shadow-cyan-950/40 cursor-pointer"
              >
                <span>Test Auth Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/account"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 text-sm font-medium transition-colors cursor-pointer"
              >
                <Lock className="w-4 h-4 text-cyan-400" />
                <span>Test Protected Account Route</span>
              </Link>
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-sm font-medium transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Test Protected Admin Route</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Diagnostic & Verification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Diagnostic Card 1: Supabase Connection */}
          <div className="lg:col-span-1">
            <Card className="h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-400" />
                  Live Connection Test
                </CardTitle>
                <CardDescription>
                  Client-side Supabase health check against configured credentials.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <SupabaseHealthCheck />
              </CardContent>
            </Card>
          </div>

          {/* Diagnostic Card 2: Schema Blueprint */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Table className="w-4 h-4 text-cyan-400" />
                    Database Schema Architecture (21 Tables)
                  </CardTitle>
                  <Badge variant="success">001_initial_schema.sql</Badge>
                </div>
                <CardDescription>
                  Comprehensive relational database schema designed for high-integrity Nigerian e-commerce operations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                  {[
                    { name: 'profiles', desc: 'Auth-linked customer profiles' },
                    { name: 'addresses', desc: 'Shipping & billing address book' },
                    { name: 'categories', desc: 'Hierarchical product categories' },
                    { name: 'brands', desc: 'Manufacturers & brand partners' },
                    { name: 'products', desc: 'Catalog items & specifications' },
                    { name: 'product_variants', desc: 'SKUs, inventory & pricing' },
                    { name: 'product_images', desc: 'Storage image metadata' },
                    { name: 'inventory_transactions', desc: 'Audit trail for stock' },
                    { name: 'carts', desc: 'Active & converted user carts' },
                    { name: 'cart_items', desc: 'Line items with variant lock' },
                    { name: 'wishlists', desc: 'Saved customer favorites' },
                    { name: 'wishlist_items', desc: 'Unique wishlist products' },
                    { name: 'orders', desc: 'Full snapshot order records' },
                    { name: 'order_items', desc: 'Immutable historical items' },
                    { name: 'order_status_history', desc: 'Order tracking timeline' },
                    { name: 'shipments', desc: 'Multi-carrier package logs' },
                    { name: 'payments', desc: 'Multi-provider ledger (Paystack)' },
                    { name: 'payment_events', desc: 'Idempotent webhook ledger' },
                    { name: 'coupons', desc: 'Discount codes & restrictions' },
                    { name: 'coupon_usages', desc: 'Redemption tracking' },
                    { name: 'admin_activity_logs', desc: 'Administrative audit logs' },
                  ].map((table) => (
                    <div
                      key={table.name}
                      className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between"
                    >
                      <code className="font-mono font-semibold text-cyan-300">{table.name}</code>
                      <span className="text-slate-400 text-[11px] mt-1">{table.desc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Security & Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-1">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <CardTitle className="text-base">Row Level Security (RLS)</CardTitle>
              <CardDescription>
                Strict PostgreSQL security policies enabled on all 21 tables.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Customers can only access their own profiles, carts, addresses, and orders.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Public users can browse only active catalog items, variants, and categories.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Role tampering blocked via database trigger (<code>protect_profile_role</code>).</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-1">
                <Server className="w-5 h-5" />
              </div>
              <CardTitle className="text-base">Client/Server Isolation</CardTitle>
              <CardDescription>
                Zero leakage of privileged service role keys to the browser.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span><code>lib/supabase/client.ts</code> for browser with anonymous key.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span><code>lib/supabase/server.ts</code> for Server Actions &amp; Components with cookies.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span><code>lib/supabase/admin.ts</code> strictly server-only with runtime guard.</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-1">
                <Lock className="w-5 h-5" />
              </div>
              <CardTitle className="text-base">SSR Auth &amp; Middleware</CardTitle>
              <CardDescription>
                Full cookie session persistence with automated token refreshes.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Root <code>middleware.ts</code> calls <code>updateSession</code> on navigation.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Server-side guards <code>requireAuth()</code> &amp; <code>requireAdmin()</code>.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Safe order number generator (<code>3LG-YYYYMMDD-XXXXXX</code>) sequence.</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sample Seeded Catalog Metadata Preview (No fake data; matches seed.sql) */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                Seeded Catalog Schema Preview
              </CardTitle>
              <Badge variant="secondary">supabase/seed.sql</Badge>
            </div>
            <CardDescription>
              Safe development and demo records defined for initial gadget categories and flagship devices.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">Flagship Smartphone</div>
                <div className="font-semibold text-white text-sm">iPhone 16 Pro Max</div>
                <div className="text-xs text-cyan-400 font-mono mt-1">&#8358;1,950,000.00</div>
                <div className="text-[11px] text-slate-500 mt-0.5">SKU: 3LG-IP16PM-NT-256</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">Creator Computing</div>
                <div className="font-semibold text-white text-sm">MacBook Pro 16&quot; M3 Max</div>
                <div className="text-xs text-cyan-400 font-mono mt-1">&#8358;3,850,000.00</div>
                <div className="text-[11px] text-slate-500 mt-0.5">SKU: 3LG-MBP16-M3M-1TB</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">Noise-Canceling Audio</div>
                <div className="font-semibold text-white text-sm">Sony WH-1000XM5</div>
                <div className="text-xs text-cyan-400 font-mono mt-1">&#8358;520,000.00</div>
                <div className="text-[11px] text-slate-500 mt-0.5">SKU: 3LG-SONY-XM5-BLK</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">Charging &amp; GaN Power</div>
                <div className="font-semibold text-white text-sm">Anker Prime 250W Bank</div>
                <div className="text-xs text-cyan-400 font-mono mt-1">&#8358;240,000.00</div>
                <div className="text-[11px] text-slate-500 mt-0.5">SKU: 3LG-ANKER-P250W-BLK</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
