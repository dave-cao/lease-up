import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StatCard } from "@/components/layout/stat-card";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { TenantInfo } from "@/components/layout/tenant-info";
import { TenantOverview } from "@/components/layout/tenant-overview";
import { TenantSummary } from "@/components/layout/tenant-summary";
import { AmendmentsTable } from "@/components/layout/amendments-table";
import { ContactsList } from "@/components/layout/contacts-list";

type NavItem = { label: string; active?: boolean; href: string };
type Stat = { label: string; value: string; sub?: string };

export default function HomePage() {
  const nav: NavItem[] = [
    { label: "Summary", href: "/", active: true },
    { label: "Amendments", href: "/amendments" },
    { label: "Spaces", href: "/spaces" },
    { label: "Financial", href: "/financial" },
    { label: "Retail", href: "/retail" },
    { label: "Lease Provisions", href: "/lease-provisions" },
    { label: "Other Information", href: "/other-information" },
  ];

  const kpis: Stat[] = [
    { label: "Contracted Area", value: "1,766", sub: "sq ft" },
    { label: "Rent / sf", value: "$1,072.72", sub: "annualized" },
    { label: "Receivables", value: "$4,256.06", sub: "open balance" },
    { label: "Sales YTD", value: "$808.3K", sub: "USD" },
    { label: "Avg Sales", value: "$75.53K", sub: "USD" },
  ];

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)]">
      {/* Sidebar - Flush Left */}
      <aside className="w-[280px] border-r bg-card text-card-foreground lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] lg:overflow-y-auto shrink-0">
        <div className="p-5 space-y-4">
          <TenantInfo />

          <Separator />

          <SidebarNav items={nav} />

          <Separator />

          <div className="space-y-3">
            <Button className="w-full">
              <Plus className="mr-2 size-4" />
              New Action
            </Button>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Quick-create tasks, work orders, notes, or emails for this tenant.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content with Margins */}
      <main className="flex-1 space-y-6 px-4 py-6 md:px-6 lg:px-8 max-w-screen-2xl mx-auto w-full">
        {/* KPI Row */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
          {kpis.map((s) => (
            <StatCard key={s.label} s={s} />
          ))}
        </div>

        {/* Top Panels */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <TenantOverview />
          <TenantSummary />
        </div>

        {/* Bottom Panels */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
          <AmendmentsTable />
          <ContactsList />
        </div>
      </main>
    </div>
  );
}
