import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { TenantInfo } from "@/components/layout/tenant-info";

export default function RetailPage() {
  const nav = [
    { label: "Summary", href: "/" },
    { label: "Amendments", href: "/amendments" },
    { label: "Spaces", href: "/spaces" },
    { label: "Financial", href: "/financial" },
    { label: "Retail", href: "/retail", active: true },
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
          <h1 className="text-3xl font-bold tracking-tight">Retail</h1>
          <p className="text-muted-foreground mt-2">
            Monitor sales performance, percentage rent, and retail metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">YTD Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$808.3K</div>
              <p className="text-sm text-muted-foreground mt-2">
                +12.5% from last year
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Average Monthly Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$75.53K</div>
              <p className="text-sm text-muted-foreground mt-2">
                Based on 11 months
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Sales per Sq Ft</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$457.73</div>
              <p className="text-sm text-muted-foreground mt-2">
                Annual average
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Percentage Rent</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-sm text-muted-foreground">Breakpoint</div>
                <div className="text-lg font-semibold mt-1">$1,500,000</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  Percentage Rate
                </div>
                <div className="text-lg font-semibold mt-1">6.5%</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  Sales Above Breakpoint
                </div>
                <div className="text-lg font-semibold mt-1">$0.00</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  Percentage Rent Due
                </div>
                <div className="text-lg font-semibold mt-1">$0.00</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Sales Reporting</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Reporting Frequency
              </span>
              <span className="text-sm font-medium">Monthly</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Due Date</span>
              <span className="text-sm font-medium">
                15th of following month
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Last Report Received
              </span>
              <span className="text-sm font-medium">12/15/2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <span className="text-sm font-medium text-green-600">
                Current
              </span>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
