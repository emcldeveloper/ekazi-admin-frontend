import { Plus, MoreVertical, Pencil, Trash2, CheckCircle2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const initialPlans = [
  {
    id: 1,
    name: "Basic",
    price: 15000,
    duration: "Monthly",
    users: "1 User",
    featured: false,
    active: true,
    features: ["Access to basic jobs", "Create 1 CV", "Email support"],
  },
  {
    id: 2,
    name: "Professional",
    price: 35000,
    duration: "Monthly",
    users: "5 Users",
    featured: true,
    active: true,
    features: [
      "Unlimited CVs",
      "Priority support",
      "Advanced analytics",
      "Featured profile",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: 95000,
    duration: "Yearly",
    users: "Unlimited",
    featured: false,
    active: false,
    features: [
      "Team management",
      "Custom integrations",
      "Dedicated support",
      "Unlimited access",
    ],
  },
];

const PlansPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold">Subscription Plans</h2>
          <p className="text-muted-foreground text-sm">
            Create and manage subscription plans for your platform.
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create Plan
            </Button>
          </DialogTrigger>

          <DialogContent className="-mx-4 max-h-[80vh] overflow-y-auto px-4 sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create Subscription Plan</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new subscription plan.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Plan Name</Label>
                <Input placeholder="e.g Professional Plan" />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label>Price (TZS)</Label>
                  <Input type="number" placeholder="35000" />
                </div>

                <div className="grid gap-2">
                  <Label>Duration</Label>
                  <Input placeholder="Monthly / Yearly" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Allowed Users</Label>
                <Input placeholder="Unlimited Users" />
              </div>

              <div className="grid gap-2">
                <Label>Features</Label>
                <textarea
                  className="min-h-[120px] rounded-md border bg-background p-3 text-sm outline-none"
                  placeholder="One feature per line"
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">Featured Plan</p>
                  <p className="text-sm text-muted-foreground">
                    Highlight this plan on the pricing page.
                  </p>
                </div>

                <Switch />
              </div>
            </div>

            <DialogFooter>
              <Button>Create Plan</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Plans Table */}
      <Card>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Plan</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Users</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead className="w-[80px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {initialPlans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{plan.name}</p>
                      </div>
                    </TableCell>

                    <TableCell>TZS {plan.price.toLocaleString()}</TableCell>

                    <TableCell>{plan.duration}</TableCell>

                    <TableCell>{plan.users}</TableCell>

                    <TableCell>
                      {plan.active ? (
                        <Badge className="gap-1 rounded-full">
                          <CheckCircle2 className="h-3 w-3" />
                          Active
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="rounded-full">
                          Inactive
                        </Badge>
                      )}
                    </TableCell>

                    <TableCell>
                      {plan.featured ? (
                        <Badge className="rounded-full">Featured</Badge>
                      ) : (
                        "-"
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

                {initialPlans.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="py-10 text-center text-muted-foreground"
                    >
                      No plans found.
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

export default PlansPage;
