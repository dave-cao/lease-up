import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { TenantInfo } from "@/components/layout/tenant-info";
import { AmendmentsTable } from "@/components/layout/amendments-table";

export default function AmendmentsPage() {
  const nav = [
    { label: "Summary", href: "/" },
    { label: "Amendments", href: "/amendments", active: true },
    { label: "Spaces", href: "/spaces" },
    { label: "Financial", href: "/financial" },
    { label: "Retail", href: "/retail" },
    { label: "Lease Provisions", href: "/lease-provisions" },
    { label: "Other Information", href: "/other-information" },
  ];

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)]">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1 space-y-6 px-4 py-6 md:px-6 lg:px-8 max-w-screen-2xl mx-auto w-full">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Amendments</h1>
          <p className="text-muted-foreground mt-2">
            View and manage all lease amendments and modifications.
          </p>
        </div>

        <AmendmentsTable />
      </main>
    </div>
  );
}
