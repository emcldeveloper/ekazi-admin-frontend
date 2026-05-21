import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Download,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

const jobseeker = {
  id: 1,
  name: "John Doe",
  email: "john.doe@gmail.com",
  phone: "+255 712 345 678",
  location: "Dar es Salaam, Tanzania",
  profession: "Frontend Developer",
  experience: "4 Years",
  status: "Active",
  verified: true,
  joinedAt: "2026-05-10",
  bio: `Passionate frontend developer with experience building
  modern web applications using React, TypeScript, TailwindCSS,
  and Node.js.`,

  skills: ["React", "TypeScript", "TailwindCSS", "Next.js", "Node.js", "Git"],

  education: [
    {
      school: "University of Dar es Salaam",
      course: "Bachelor of Computer Science",
      year: "2018 - 2021",
    },
  ],

  experienceHistory: [
    {
      company: "TechNova Solutions",
      role: "Frontend Developer",
      period: "2023 - Present",
    },
    {
      company: "Skyline Digital",
      role: "Junior Web Developer",
      period: "2021 - 2023",
    },
  ],
};

const JobSekeerDetails = () => {
  return (
    <div className="space-y-6">
      {/* Top Profile Section */}
      <Card>
        <CardContent className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://i.pravatar.cc/150?img=12" />

              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-bold">{jobseeker.name}</h2>

                {jobseeker.verified && (
                  <Badge className="gap-1">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Verified
                  </Badge>
                )}
              </div>
              intern@
              <p className="text-muted-foreground">{jobseeker.profession}</p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {jobseeker.email}
                </div>

                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  {jobseeker.phone}
                </div>

                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {jobseeker.location}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button>Contact</Button>

            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Details Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>

              <CardDescription>Jobseeker profile summary</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-sm leading-7 text-muted-foreground">
                {jobseeker.bio}
              </p>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>

              <CardDescription>
                Technical and professional skills
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-2">
              {jobseeker.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>

              <CardDescription>
                Previous companies and positions
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
              {jobseeker.experienceHistory.map((exp, index) => (
                <div key={index}>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-muted p-2">
                      <BriefcaseBusiness className="h-4 w-4" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-semibold">{exp.role}</h4>

                      <p className="text-sm text-muted-foreground">
                        {exp.company}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  {index !== jobseeker.experienceHistory.length - 1 && (
                    <Separator className="mt-5" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>

              <CardDescription>Academic background</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {jobseeker.education.map((edu, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="rounded-full bg-muted p-2">
                    <User className="h-4 w-4" />
                  </div>

                  <div>
                    <h4 className="font-semibold">{edu.course}</h4>

                    <p className="text-sm text-muted-foreground">
                      {edu.school}
                    </p>

                    <p className="text-xs text-muted-foreground">{edu.year}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>

                <Badge>{jobseeker.status}</Badge>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Experience
                </span>

                <span className="text-sm font-medium">
                  {jobseeker.experience}
                </span>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Verified</span>

                <span className="text-sm font-medium">
                  {jobseeker.verified ? "Yes" : "No"}
                </span>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Joined</span>

                <div className="flex items-center gap-1 text-sm font-medium">
                  <CalendarDays className="h-4 w-4" />
                  {jobseeker.joinedAt}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-3">
              <Button>Approve Account</Button>

              <Button variant="outline">Suspend Account</Button>

              <Button variant="destructive">Delete Account</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobSekeerDetails;
