import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MoreVertical,
  Eye,
  Pencil,
  Trash2,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const employers = [
  {
    id: 1,
    company: "Tech Solutions Ltd",
    email: "info@techsolutions.com",
    plan: "Professional",
    amount: 35000,
    duration: "Monthly",
    employees: 15,
    startDate: "12 May 2026",
    expiryDate: "12 Jun 2026",
    status: "Active",
  },
  {
    id: 2,
    company: "Smart Recruiters",
    email: "contact@smartrecruiters.co.tz",
    plan: "Enterprise",
    amount: 95000,
    duration: "Yearly",
    employees: 120,
    startDate: "01 Jan 2026",
    expiryDate: "01 Jan 2027",
    status: "Active",
  },
  {
    id: 3,
    company: "Build Africa Group",
    email: "hr@buildafrica.com",
    plan: "Basic",
    amount: 15000,
    duration: "Monthly",
    employees: 5,
    startDate: "20 Apr 2026",
    expiryDate: "20 May 2026",
    status: "Expired",
  },
  {
    id: 4,
    company: "Vision Media",
    email: "jobs@visionmedia.co.tz",
    plan: "Professional",
    amount: 35000,
    duration: "Monthly",
    employees: 20,
    startDate: "05 May 2026",
    expiryDate: "05 Jun 2026",
    status: "Active",
  },
  {
    id: 5,
    company: "Prime Logistics",
    email: "careers@primelogistics.com",
    plan: "Enterprise",
    amount: 95000,
    duration: "Yearly",
    employees: 80,
    startDate: "15 Feb 2026",
    expiryDate: "15 Feb 2027",
    status: "Pending",
  },
];

const EmployerSubscriptions = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold tracking-tight">
          Employer Subscriptions
        </h2>

        <p className="text-sm text-muted-foreground">
          Manage employers who subscribed to your services.
        </p>
      </div>

      {/* Table */}
      <Card>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Employees</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {employers.map((employer) => (
                  <TableRow key={employer.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{employer.company}</p>

                        <p className="text-muted-foreground text-sm">
                          {employer.email}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge variant="secondary" className="rounded-full">
                        {employer.plan}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      TZS {employer.amount.toLocaleString()}
                    </TableCell>

                    <TableCell>{employer.employees} Employees</TableCell>

                    <TableCell>{employer.startDate}</TableCell>

                    <TableCell>{employer.expiryDate}</TableCell>

                    <TableCell>
                      {employer.status === "Active" && (
                        <Badge className="gap-1 rounded-full">
                          <CheckCircle2 className="h-3 w-3" />
                          Active
                        </Badge>
                      )}

                      {employer.status === "Expired" && (
                        <Badge variant="destructive" className="rounded-full">
                          Expired
                        </Badge>
                      )}

                      {employer.status === "Pending" && (
                        <Badge
                          variant="secondary"
                          className="gap-1 rounded-full"
                        >
                          <Clock3 className="h-3 w-3" />
                          Pending
                        </Badge>
                      )}
                    </TableCell>

                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            <Eye className="h-4 w-4" />
                            View
                          </DropdownMenuItem>

                          <DropdownMenuItem className="gap-2">
                            <Pencil className="h-4 w-4" />
                            Edit
                          </DropdownMenuItem>

                          <DropdownMenuItem className="gap-2 text-red-500 focus:text-red-500">
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}

                {employers.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={8}
                      className="py-10 text-center text-muted-foreground"
                    >
                      No subscriptions found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployerSubscriptions;
