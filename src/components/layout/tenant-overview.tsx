import { Plus, Pencil, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TenantOverview() {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-base font-semibold">
          Tenant Overview
        </CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Plus className="size-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Pencil className="size-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="text-xs text-muted-foreground">Property</div>
            <div className="mt-1 text-sm font-semibold">Feiment Plaza</div>
            <div className="text-xs text-muted-foreground">
              comet23 • Unit 22
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs text-muted-foreground">NAICS</div>
                <div className="text-sm font-medium">
                  Hobby Toy & Game Stores
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="text-xs text-muted-foreground">
                  Sales Category
                </div>
                <div className="text-sm font-medium">
                  Electronics & Appliances
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="text-xs text-muted-foreground">Lease Type</div>
                <div className="text-sm font-medium">Retail • Net</div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="text-xs text-muted-foreground">Status</div>
                <Badge variant="secondary">Current</Badge>
              </div>
            </div>
          </div>

          <Card className="bg-muted/40">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">
                    Primary Contact
                  </div>
                  <div className="mt-1 truncate text-sm font-semibold">
                    Ruben Honsock
                  </div>
                  <div className="text-xs text-muted-foreground">Billing</div>
                </div>
                <div className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground text-sm font-semibold">
                  RH
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                <Button
                  variant="outline"
                  className="justify-start text-xs truncate min-w-0"
                >
                  <Mail className="mr-2 size-4 shrink-0" />
                  <span className="truncate">
                    yordi.demos+ruben.honsock@gmail.com
                  </span>
                </Button>
                <Button variant="outline" className="justify-start">
                  <Phone className="mr-2 size-4 shrink-0" />
                  None
                </Button>
                <Button>Open Contact Actions</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
