import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const jobseekers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    profession: "Frontend Developer",
    verified: true,
    status: "Active",
    createdAt: "2026-05-10",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@gmail.com",
    profession: "UI/UX Designer",
    verified: true,
    status: "Active",
    createdAt: "2026-05-08",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@gmail.com",
    profession: "Backend Developer",
    verified: false,
    status: "Not Active",
    createdAt: "2026-04-30",
  },
  {
    id: 4,
    name: "Amina Yusuf",
    email: "amina.yusuf@gmail.com",
    profession: "Project Manager",
    verified: true,
    status: "Active",
    createdAt: "2026-04-25",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@gmail.com",
    profession: "Mobile Developer",
    verified: false,
    status: "Not Active",
    createdAt: "2026-04-20",
  },
  {
    id: 6,
    name: "Grace Kimaro",
    email: "grace.kimaro@gmail.com",
    profession: "Data Analyst",
    verified: true,
    status: "Active",
    createdAt: "2026-04-15",
  },
  {
    id: 7,
    name: "Peter Mwakyusa",
    email: "peter.m@gmail.com",
    profession: "DevOps Engineer",
    verified: true,
    status: "Active",
    createdAt: "2026-04-10",
  },
  {
    id: 8,
    name: "Linda George",
    email: "linda.george@gmail.com",
    profession: "QA Engineer",
    verified: false,
    status: "Not Active",
    createdAt: "2026-04-05",
  },
  {
    id: 9,
    name: "Brian Thomas",
    email: "brian.thomas@gmail.com",
    profession: "Cybersecurity Analyst",
    verified: true,
    status: "Active",
    createdAt: "2026-03-29",
  },
  {
    id: 10,
    name: "Neema Hassan",
    email: "neema.hassan@gmail.com",
    profession: "Fullstack Developer",
    verified: true,
    status: "Active",
    createdAt: "2026-03-20",
  },
];

const JobSeekersPage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [verifiedFilter, setVerifiedFilter] = useState("All");

  const navigate = useNavigate();

  const filteredJobseekers = useMemo(() => {
    return jobseekers.filter((jobseeker) => {
      const matchesSearch =
        jobseeker.name.toLowerCase().includes(search.toLowerCase()) ||
        jobseeker.profession.toLowerCase().includes(search.toLowerCase()) ||
        jobseeker.email.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || jobseeker.status === statusFilter;

      const matchesVerified =
        verifiedFilter === "All" ||
        (verifiedFilter === "Yes" && jobseeker.verified) ||
        (verifiedFilter === "No" && !jobseeker.verified);

      return matchesSearch && matchesStatus && matchesVerified;
    });
  }, [search, statusFilter, verifiedFilter]);

  const handleView = (id: number) => {
    navigate(`/job-seekers/${id}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Job Seekers</h2>
      </div>

      <Card>
        <CardContent className="space-y-4">
          {/* Search & Filters */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <InputGroup className="max-w-md">
              <InputGroupInput
                placeholder="Search jobseeker..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <InputGroupAddon>
                <Search className="h-4 w-4" />
              </InputGroupAddon>
            </InputGroup>

            <div className="flex flex-col gap-2 sm:flex-row">
              {/* Status Filter */}
              <Select
                value={statusFilter}
                onValueChange={(value) => setStatusFilter(value)}
              >
                <SelectTrigger className="w-full sm:w-44">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>

                    <SelectItem value="All">All Status</SelectItem>

                    <SelectItem value="Active">Active</SelectItem>

                    <SelectItem value="Not Active">Not Active</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Verified Filter */}
              <Select
                value={verifiedFilter}
                onValueChange={(value) => setVerifiedFilter(value)}
              >
                <SelectTrigger className="w-full sm:w-44">
                  <SelectValue placeholder="Verified" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Verified</SelectLabel>

                    <SelectItem value="All">All</SelectItem>

                    <SelectItem value="Yes">Yes</SelectItem>

                    <SelectItem value="No">No</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Profession</TableHead>
                <TableHead>Verified</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredJobseekers.length > 0 ? (
                filteredJobseekers.map((jobseeker) => (
                  <TableRow key={jobseeker.id}>
                    <TableCell>{jobseeker.name}</TableCell>

                    <TableCell>{jobseeker.email}</TableCell>

                    <TableCell>{jobseeker.profession}</TableCell>

                    <TableCell>{jobseeker.verified ? "Yes" : "No"}</TableCell>

                    <TableCell>{jobseeker.status}</TableCell>

                    <TableCell>{jobseeker.createdAt}</TableCell>

                    <TableCell className="text-right">
                      <Button
                        variant="link"
                        onClick={() => handleView(jobseeker.id)}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="py-6 text-center">
                    No jobseekers found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobSeekersPage;
