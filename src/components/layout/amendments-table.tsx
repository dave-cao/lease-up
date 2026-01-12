import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Amendment = {
  type: string;
  description: string;
  term: string;
  dates: string;
  status: "Active" | "Superseded";
};

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

export function AmendmentsTable() {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-base font-semibold">Amendments</CardTitle>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          See all
        </Button>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="whitespace-nowrap">Term</TableHead>
                <TableHead className="whitespace-nowrap">Dates</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {amendments.map((a, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{a.type}</TableCell>
                  <TableCell>{a.description}</TableCell>
                  <TableCell>{a.term}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {a.dates}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={a.status === "Active" ? "default" : "secondary"}
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
  );
}
