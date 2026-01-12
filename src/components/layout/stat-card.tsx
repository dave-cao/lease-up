import { Card, CardContent } from "@/components/ui/card";

type Stat = { label: string; value: string; sub?: string };

export function StatCard({ s }: { s: Stat }) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="p-4">
        <div className="text-xs font-medium text-muted-foreground">
          {s.label}
        </div>
        <div className="mt-2 text-2xl font-bold tracking-tight">{s.value}</div>
        {s.sub ? (
          <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
        ) : null}
      </CardContent>
    </Card>
  );
}
