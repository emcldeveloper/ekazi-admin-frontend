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
  User,
} from "lucide-react";

const jobSeekers = [
  {
    id: 1,
    name: "John Michael",
    email: "johnmichael@gmail.com",
    plan: "Basic",
    amount: 5000,
    duration: "Monthly",
    profession: "Frontend Developer",
    startDate: "01 May 2026",
    expiryDate: "01 Jun 2026",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Joseph",
    email: "sarahjoseph@gmail.com",
    plan: "Professional",
    amount: 15000,
    duration: "Monthly",
    profession: "UI/UX Designer",
    startDate: "12 Apr 2026",
    expiryDate: "12 May 2026",
    status: "Expired",
  },
  {
    id: 3,
    name: "David Mushi",
    email: "davidmushi@gmail.com",
    plan: "Premium",
    amount: 30000,
    duration: "Yearly",
    profession: "Backend Developer",
    startDate: "10 Jan 2026",
    expiryDate: "10 Jan 2027",
    status: "Active",
  },
  {
    id: 4,
    name: "Neema Hassan",
    email: "neemahassan@gmail.com",
    plan: "Professional",
    amount: 15000,
    duration: "Monthly",
    profession: "Accountant",
    startDate: "05 May 2026",
    expiryDate: "05 Jun 2026",
    status: "Pending",
  },
  {
    id: 5,
    name: "Kelvin George",
    email: "kelvingeorge@gmail.com",
    plan: "Basic",
    amount: 5000,
    duration: "Monthly",
    profession: "Graphic Designer",
    startDate: "15 Apr 2026",
    expiryDate: "15 May 2026",
    status: "Expired",
  },
  {
    id: 6,
    name: "Amina Suleiman",
    email: "aminasuleiman@gmail.com",
    plan: "Premium",
    amount: 30000,
    duration: "Yearly",
    profession: "Data Analyst",
    startDate: "20 Feb 2026",
    expiryDate: "20 Feb 2027",
    status: "Active",
  },
  {
    id: 7,
    name: "Patrick William",
    email: "patrickwilliam@gmail.com",
    plan: "Professional",
    amount: 15000,
    duration: "Monthly",
    profession: "Mobile Developer",
    startDate: "08 May 2026",
    expiryDate: "08 Jun 2026",
    status: "Active",
  },
  {
    id: 8,
    name: "Janeth Paul",
    email: "janethpaul@gmail.com",
    plan: "Basic",
    amount: 5000,
    duration: "Monthly",
    profession: "Teacher",
    startDate: "22 Apr 2026",
    expiryDate: "22 May 2026",
    status: "Pending",
  },
  {
    id: 9,
    name: "Brian Lucas",
    email: "brianlucas@gmail.com",
    plan: "Premium",
    amount: 30000,
    duration: "Yearly",
    profession: "DevOps Engineer",
    startDate: "14 Mar 2026",
    expiryDate: "14 Mar 2027",
    status: "Active",
  },
  {
    id: 10,
    name: "Grace Andrew",
    email: "graceandrew@gmail.com",
    plan: "Professional",
    amount: 15000,
    duration: "Monthly",
    profession: "HR Manager",
    startDate: "01 May 2026",
    expiryDate: "01 Jun 2026",
    status: "Active",
  },
];

const JobsekeerSubscriptions = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold tracking-tight">
          Job Seeker Subscriptions
        </h2>

        <p className="text-sm text-muted-foreground">
          Manage job seekers subscribed to your platform.
        </p>
      </div>

      {/* Table */}
      <Card>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Seeker</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Profession</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {jobSeekers.map((jobSeeker) => (
                  <TableRow key={jobSeeker.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                          <User className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="font-medium">{jobSeeker.name}</p>

                          <p className="text-muted-foreground text-sm">
                            {jobSeeker.email}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge variant="secondary" className="rounded-full">
                        {jobSeeker.plan}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      TZS {jobSeeker.amount.toLocaleString()}
                    </TableCell>

                    <TableCell>{jobSeeker.profession}</TableCell>

                    <TableCell>{jobSeeker.duration}</TableCell>

                    <TableCell>{jobSeeker.expiryDate}</TableCell>

                    <TableCell>
                      {jobSeeker.status === "Active" && (
                        <Badge className="gap-1 rounded-full">
                          <CheckCircle2 className="h-3 w-3" />
                          Active
                        </Badge>
                      )}

                      {jobSeeker.status === "Expired" && (
                        <Badge variant="destructive" className="rounded-full">
                          Expired
                        </Badge>
                      )}

                      {jobSeeker.status === "Pending" && (
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

                {jobSeekers.length === 0 && (
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

export default JobsekeerSubscriptions;
