import { Badge } from "@/components/ui/badge";

export function TenantInfo() {
  return (
    <div>
      <div className="text-xs text-muted-foreground">Tenant</div>
      <div className="mt-1 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">A-Game</div>
          <div className="truncate text-xs text-muted-foreground">
            Feiment Plaza • Unit 22
          </div>
        </div>
        <Badge variant="secondary">Current</Badge>
      </div>
    </div>
  );
}
