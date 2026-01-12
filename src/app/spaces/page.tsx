import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { TenantInfo } from "@/components/layout/tenant-info";

export default function SpacesPage() {
  const nav = [
    { label: "Summary", href: "/" },
    { label: "Amendments", href: "/amendments" },
    { label: "Spaces", href: "/spaces", active: true },
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
          <h1 className="text-3xl font-bold tracking-tight">Spaces</h1>
          <p className="text-muted-foreground mt-2">
            Manage tenant space details, floor plans, and area measurements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Unit 22</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Area</span>
                  <span className="font-medium">1,766 sq ft</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Usable Area</span>
                  <span className="font-medium">1,650 sq ft</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Floor</span>
                  <span className="font-medium">Ground Floor</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="secondary">Occupied</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Storage A-1</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Area</span>
                  <span className="font-medium">250 sq ft</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Usable Area</span>
                  <span className="font-medium">240 sq ft</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Floor</span>
                  <span className="font-medium">Basement</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="secondary">Occupied</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Parking Spaces</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Reserved</span>
                  <span className="font-medium">3 spaces</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">Lot B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-medium">Surface</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
