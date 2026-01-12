import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { TenantInfo } from "@/components/layout/tenant-info";

export default function FinancialPage() {
  const nav = [
    { label: "Summary", href: "/" },
    { label: "Amendments", href: "/amendments" },
    { label: "Spaces", href: "/spaces" },
    { label: "Financial", href: "/financial", active: true },
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
          <h1 className="text-3xl font-bold tracking-tight">Financial</h1>
          <p className="text-muted-foreground mt-2">
            Track rent payments, receivables, and financial obligations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Rent Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Base Rent</span>
                <span className="text-sm font-medium">$1,072.72/sq ft</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Annual Rent
                </span>
                <span className="text-sm font-medium">$1,894,482</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Monthly Rent
                </span>
                <span className="text-sm font-medium">$157,874</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Payment Terms
                </span>
                <span className="text-sm font-medium">Net 30</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Additional Charges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  CAM Charges
                </span>
                <span className="text-sm font-medium">$3,250/month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Property Tax
                </span>
                <span className="text-sm font-medium">$2,100/month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Insurance</span>
                <span className="text-sm font-medium">$850/month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Total Add. Charges
                </span>
                <span className="text-sm font-medium">$6,200/month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Receivables</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Current Balance
                </span>
                <span className="text-sm font-medium">$4,256.06</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">30 Days</span>
                <span className="text-sm font-medium">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">60 Days</span>
                <span className="text-sm font-medium">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">90+ Days</span>
                <span className="text-sm font-medium">$0.00</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Security Deposit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Amount</span>
                <span className="text-sm font-medium">$315,748</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Type</span>
                <span className="text-sm font-medium">Cash</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Date Received
                </span>
                <span className="text-sm font-medium">08/15/2015</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <span className="text-sm font-medium">Held</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
