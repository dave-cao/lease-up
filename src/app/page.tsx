// app/page.tsx
// Requires: shadcn/ui + Tailwind
// Components used: Button, Card, Input, Badge, Separator, Table, DropdownMenu
// (and optionally Avatar)

import {
  Bell,
  Plus,
  Pencil,
  MoreHorizontal,
  Search,
  Mail,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavItem = { label: string; active?: boolean };
type Stat = { label: string; value: string; sub?: string };
type Amendment = {
  type: string;
  description: string;
  term: string;
  dates: string;
  status: "Active" | "Superseded";
};
type Contact = {
  name: string;
  role: string;
  tag?: string;
  initials: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function StatCard({ s }: { s: Stat }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground">{s.label}</div>
        <div className="mt-1 text-lg font-semibold tracking-tight">
          {s.value}
        </div>
        {s.sub ? (
          <div className="mt-0.5 text-xs text-muted-foreground">{s.sub}</div>
        ) : null}
      </CardContent>
    </Card>
  );
}

function SidebarNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <a
          key={item.label}
          href="#"
          className={cn(
            "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
            item.active
              ? "bg-primary text-primary-foreground"
              : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"
          )}
        >
          <span className={cn(item.active ? "font-medium" : "font-normal")}>
            {item.label}
          </span>
          {item.active ? (
            <span className="text-[10px] opacity-70">⌘</span>
          ) : null}
        </a>
      ))}
    </nav>
  );
}

export default function HomePage() {
  const nav: NavItem[] = [
    { label: "Summary", active: true },
    { label: "Amendments" },
    { label: "Spaces" },
    { label: "Financial" },
    { label: "Retail" },
    { label: "Lease Provisions" },
    { label: "Other Information" },
  ];

  const kpis: Stat[] = [
    { label: "Contracted Area", value: "1,766", sub: "sq ft" },
    { label: "Rent / sf", value: "$1,072.72", sub: "annualized" },
    { label: "Receivables", value: "$4,256.06", sub: "open balance" },
    { label: "Sales YTD", value: "$808.3K", sub: "USD" },
    { label: "Avg Sales", value: "$75.53K", sub: "USD" },
  ];

  const amendments: Amendment[] = [
    {
      type: "Renewal",
      description: "3rd Renewal",
      term: "46 Months",
      dates: "08/24/2024 – 08/11/2028",
      status: "Active",
    },
    {
      type: "Renewal",
      description: "2nd Renewal",
      term: "36 Months",
      dates: "08/24/2021 – 08/11/2024",
      status: "Superseded",
    },
    {
      type: "Modification",
      description: "Deferred Rent",
      term: "36 Months",
      dates: "09/24/2019 – 09/11/2021",
      status: "Superseded",
    },
    {
      type: "Renewal",
      description: "1st Renewal",
      term: "36 Months",
      dates: "09/24/2016 – 09/11/2019",
      status: "Superseded",
    },
    {
      type: "Original",
      description: "Original Term",
      term: "36 Months",
      dates: "08/01/2013 – 08/11/2016",
      status: "Superseded",
    },
  ];

  const contacts: Contact[] = [
    {
      initials: "RH",
      name: "Ruben Honsock",
      role: "Primary Billing",
      tag: "PRIMARY",
    },
    {
      initials: "RL",
      name: "Ryan Leon",
      role: "Tenant RM Leading BOW",
      tag: "SALES",
    },
    {
      initials: "SB",
      name: "Seon Becken",
      role: "Tenant Portal Private",
      tag: "OFFICE",
    },
    {
      initials: "VV",
      name: "Victorie Victorio",
      role: "Lease Administrator",
      tag: "OFFICE",
    },
    {
      initials: "SC",
      name: "Sophie Carven",
      role: "Tenant Portal Maintainer",
      tag: "OFFICE",
    },
  ];

  return (
    <div className="min-h-dvh bg-background">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-fullitems-center gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground">
              <span className="text-sm font-semibold">V</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Tenant Dashboard</div>
              <div className="text-xs text-muted-foreground">
                Home / Tenants / A-Game
              </div>
            </div>
          </div>

          <div className="ml-auto flex w-full max-w-2xl items-center gap-2">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-9"
                placeholder="Search tenants, contacts, leases..."
              />
            </div>

            <Button
              variant="outline"
              size="icon"
              className="hidden md:inline-flex"
            >
              <Bell className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden md:inline-flex"
            >
              <MoreHorizontal className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-full grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="rounded-lg border bg-card text-card-foreground shadow-sm lg:sticky lg:top-[72px] lg:h-[calc(100dvh-88px)]">
          <div className="p-4">
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

            <Separator className="my-4" />

            <SidebarNav items={nav} />

            <Separator className="my-4" />

            <Button className="w-full">
              <Plus className="mr-2 size-4" />
              New Action
            </Button>
            <p className="mt-2 text-xs text-muted-foreground">
              Quick-create tasks, work orders, notes, or emails for this tenant.
            </p>
          </div>
        </aside>

        {/* Main */}
        <main className="space-y-4">
          {/* KPI Row */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
            {kpis.map((s) => (
              <StatCard key={s.label} s={s} />
            ))}
          </div>

          {/* Top Panels */}
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm">Tenant Overview</CardTitle>
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
                    <div className="text-xs text-muted-foreground">
                      Property
                    </div>
                    <div className="mt-1 text-sm font-semibold">
                      Feiment Plaza
                    </div>
                    <div className="text-xs text-muted-foreground">
                      comet23 • Unit 22
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-xs text-muted-foreground">
                          NAICS
                        </div>
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
                        <div className="text-xs text-muted-foreground">
                          Lease Type
                        </div>
                        <div className="text-sm font-medium">Retail • Net</div>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div className="text-xs text-muted-foreground">
                          Status
                        </div>
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
                          <div className="text-xs text-muted-foreground">
                            Billing
                          </div>
                        </div>
                        <div className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground text-sm font-semibold">
                          RH
                        </div>
                      </div>

                      <div className="mt-4 grid gap-2">
                        <Button variant="outline" className="justify-start">
                          <Mail className="mr-2 size-4" />
                          yordi.demos+ruben.honsock@gmail.com
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Phone className="mr-2 size-4" />
                          None
                        </Button>
                        <Button>Open Contact Actions</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm">Tenant Summary</CardTitle>
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
                <div className="grid grid-cols-2 gap-3">
                  <Card>
                    <CardContent className="p-3">
                      <div className="text-xs text-muted-foreground">
                        Start Date
                      </div>
                      <div className="mt-1 text-sm font-semibold">
                        09/01/2015
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-3">
                      <div className="text-xs text-muted-foreground">
                        End Date
                      </div>
                      <div className="mt-1 text-sm font-semibold">
                        08/31/2026
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-3">
                      <div className="text-xs text-muted-foreground">Term</div>
                      <div className="mt-1 text-sm font-semibold">
                        156 Months
                      </div>
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
                      <div className="text-sm font-semibold">
                        Lease State Good
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        No active compliance issues. Monitoring renewals and
                        sales threshold.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-amber-200 bg-amber-50/50">
                    <CardContent className="p-4">
                      <div className="text-sm font-semibold">
                        Possible Renew Risk
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Review renewal window and evaluate collection status.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Panels */}
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.6fr_1fr]">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm">Amendments</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground"
                >
                  See all
                </Button>
              </CardHeader>

              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="whitespace-nowrap">
                          Type
                        </TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="whitespace-nowrap">
                          Term
                        </TableHead>
                        <TableHead className="whitespace-nowrap">
                          Dates
                        </TableHead>
                        <TableHead className="text-right">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {amendments.map((a, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">
                            {a.type}
                          </TableCell>
                          <TableCell>{a.description}</TableCell>
                          <TableCell>{a.term}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {a.dates}
                          </TableCell>
                          <TableCell className="text-right">
                            <Badge
                              variant={
                                a.status === "Active" ? "default" : "secondary"
                              }
                            >
                              {a.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm">Contacts</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground"
                >
                  See all
                </Button>
              </CardHeader>

              <CardContent className="space-y-3">
                {contacts.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-3 rounded-lg border bg-card p-3 shadow-sm"
                  >
                    <div className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground text-sm font-semibold">
                      {c.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <div className="truncate text-sm font-semibold">
                          {c.name}
                        </div>
                        {c.tag ? (
                          <Badge variant="secondary">{c.tag}</Badge>
                        ) : null}
                      </div>
                      <div className="truncate text-xs text-muted-foreground">
                        {c.role}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        <Mail className="size-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Phone className="size-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
