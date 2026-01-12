import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TenantSummary() {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-base font-semibold">
          Tenant Summary
        </CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Lease State: Good</Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View lease</DropdownMenuItem>
              <DropdownMenuItem>View receivables</DropdownMenuItem>
              <DropdownMenuItem>Create work order</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-3">
              <div className="text-xs text-muted-foreground">Start Date</div>
              <div className="mt-1 text-sm font-semibold">09/01/2015</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3">
              <div className="text-xs text-muted-foreground">End Date</div>
              <div className="mt-1 text-sm font-semibold">08/31/2026</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3">
              <div className="text-xs text-muted-foreground">Term</div>
              <div className="mt-1 text-sm font-semibold">156 Months</div>
              <div className="text-xs text-muted-foreground">
                (36 months from today)
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3">
              <div className="text-xs text-muted-foreground">
                Open Work Orders
              </div>
              <div className="mt-1 text-sm font-semibold">0</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Card className="border-emerald-200 bg-emerald-50/50">
            <CardContent className="p-4">
              <div className="text-sm font-semibold">Lease State Good</div>
              <p className="mt-1 text-sm text-muted-foreground">
                No active compliance issues. Monitoring renewals and sales
                threshold.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50/50">
            <CardContent className="p-4">
              <div className="text-sm font-semibold">Possible Renew Risk</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Review renewal window and evaluate collection status.
              </p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
