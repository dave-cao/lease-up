import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { TenantInfo } from "@/components/layout/tenant-info";

export default function LeaseProvisionsPage() {
  const nav = [
    { label: "Summary", href: "/" },
    { label: "Amendments", href: "/amendments" },
    { label: "Spaces", href: "/spaces" },
    { label: "Financial", href: "/financial" },
    { label: "Retail", href: "/retail" },
    { label: "Lease Provisions", href: "/lease-provisions", active: true },
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
          <h1 className="text-3xl font-bold tracking-tight">
            Lease Provisions
          </h1>
          <p className="text-muted-foreground mt-2">
            Review lease terms, clauses, and special provisions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Use & Permitted Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="text-sm font-medium mb-2">Permitted Use</div>
                <p className="text-sm text-muted-foreground">
                  Retail sale of hobby supplies, toys, games, and related
                  merchandise.
                </p>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">Exclusive Use</div>
                <Badge variant="secondary">Yes</Badge>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">Restrictions</div>
                <p className="text-sm text-muted-foreground">
                  No sale of firearms, ammunition, or age-restricted products.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Operating Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Monday - Saturday
                </span>
                <span className="text-sm font-medium">10:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Sunday</span>
                <span className="text-sm font-medium">11:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Holidays</span>
                <span className="text-sm font-medium">Per mall schedule</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Options & Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="text-sm font-medium mb-1">Renewal Options</div>
                <p className="text-sm text-muted-foreground">
                  Two (2) 5-year renewal options remaining
                </p>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">Expansion Rights</div>
                <p className="text-sm text-muted-foreground">
                  Right of first refusal on adjacent Unit 23
                </p>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">
                  Termination Rights
                </div>
                <p className="text-sm text-muted-foreground">
                  Early termination after Year 7 with 180 days notice
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Maintenance & Repairs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="text-sm font-medium mb-1">
                  Tenant Responsibility
                </div>
                <p className="text-sm text-muted-foreground">
                  Interior maintenance, HVAC filters, lighting
                </p>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">
                  Landlord Responsibility
                </div>
                <p className="text-sm text-muted-foreground">
                  Structural, roof, common areas, parking lot
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Insurance Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  General Liability
                </span>
                <span className="text-sm font-medium">$2,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Property Insurance
                </span>
                <span className="text-sm font-medium">Full Replacement</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Certificate Status
                </span>
                <Badge variant="secondary">Current</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Special Provisions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="text-sm font-medium mb-1">Signage Rights</div>
                <p className="text-sm text-muted-foreground">
                  One exterior storefront sign, monument sign participation
                </p>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">
                  Parking Allocation
                </div>
                <p className="text-sm text-muted-foreground">
                  3 reserved spaces plus shared customer parking
                </p>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">
                  Co-Tenancy Clause
                </div>
                <Badge>Active</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
