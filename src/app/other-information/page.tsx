import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { TenantInfo } from "@/components/layout/tenant-info";

export default function OtherInformationPage() {
  const nav = [
    { label: "Summary", href: "/" },
    { label: "Amendments", href: "/amendments" },
    { label: "Spaces", href: "/spaces" },
    { label: "Financial", href: "/financial" },
    { label: "Retail", href: "/retail" },
    { label: "Lease Provisions", href: "/lease-provisions" },
    { label: "Other Information", href: "/other-information", active: true },
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
            Other Information
          </h1>
          <p className="text-muted-foreground mt-2">
            Additional details, documents, and miscellaneous information.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <div className="text-sm font-medium">
                    Original Lease Agreement
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Signed 08/01/2013
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <div className="text-sm font-medium">3rd Amendment</div>
                  <div className="text-xs text-muted-foreground">
                    Signed 08/24/2024
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <div className="text-sm font-medium">
                    Certificate of Insurance
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Valid until 12/31/2026
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <div className="text-sm font-medium">
                    Security Deposit Receipt
                  </div>
                  <div className="text-xs text-muted-foreground">
                    08/15/2015
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Important Dates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Lease Commencement
                </span>
                <span className="text-sm font-medium">09/01/2015</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Lease Expiration
                </span>
                <span className="text-sm font-medium">08/31/2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Option Notice Deadline
                </span>
                <span className="text-sm font-medium">02/28/2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Next Rent Increase
                </span>
                <span className="text-sm font-medium">09/01/2026</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Notes & Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="text-sm font-medium text-amber-900">
                  Renewal Discussion Needed
                </div>
                <p className="text-xs text-amber-800 mt-1">
                  Schedule meeting to discuss renewal terms before option
                  deadline.
                </p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="text-sm font-medium text-blue-900">
                  Sales Reporting Due
                </div>
                <p className="text-xs text-blue-800 mt-1">
                  Monthly sales report due by January 15th.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Property Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="text-sm font-medium mb-1">Property Manager</div>
                <p className="text-sm text-muted-foreground">Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">
                  sjohnson@property.com
                </p>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">Leasing Agent</div>
                <p className="text-sm text-muted-foreground">Michael Chen</p>
                <p className="text-xs text-muted-foreground">
                  mchen@property.com
                </p>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">
                  Maintenance Coordinator
                </div>
                <p className="text-sm text-muted-foreground">James Wilson</p>
                <p className="text-xs text-muted-foreground">
                  jwilson@property.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
