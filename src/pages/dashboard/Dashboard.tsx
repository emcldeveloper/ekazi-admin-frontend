import { Card, CardContent } from "@/components/ui/card";

import RegisteredJobseekersChart from "./components/RegisteredJobseekersChart";
import SystemUsersChart from "./components/SystemUsersChart";
import JobsPostedChart from "./components/JobsPostedChart";
import JobStagesChart from "./components/JobStagesChart";

const Dashboard = () => {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        <Card>
          <CardContent>
            <h3>Employers</h3>
            <div>
              <p className="text-2xl font-bold">960</p>
              <p className="text-xs text-accent-foreground">
                <span className="text-green-500">Verified</span>: 219
              </p>
              <p className="text-xs text-accent-foreground">
                <span className="text-red-500">Non Verified</span>: 741
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3>Job Seekers</h3>
            <div>
              <p className="text-2xl font-bold">120</p>
              <p className="text-xs text-accent-foreground">
                <span className="text-green-500">Verified</span>: 219
              </p>
              <p className="text-xs text-accent-foreground">
                <span className="text-red-500">Non Verified</span>: 741
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3>Admins</h3>
            <div>
              <p className="text-2xl font-bold">120</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3>Freelancers</h3>
            <div>
              <p className="text-2xl font-bold">1,200</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
          <RegisteredJobseekersChart />
          <SystemUsersChart />
          <JobsPostedChart />
          <JobStagesChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
