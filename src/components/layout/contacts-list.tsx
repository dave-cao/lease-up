import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Contact = {
  name: string;
  role: string;
  tag?: string;
  initials: string;
};

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

export function ContactsList() {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-base font-semibold">Contacts</CardTitle>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          See all
        </Button>
      </CardHeader>

      <CardContent className="space-y-3">
        {contacts.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-3 rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground text-sm font-semibold">
              {c.initials}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <div className="truncate text-sm font-semibold">{c.name}</div>
                {c.tag ? <Badge variant="secondary">{c.tag}</Badge> : null}
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
  );
}
