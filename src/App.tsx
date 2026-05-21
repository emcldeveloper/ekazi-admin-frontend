import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import JobsPage from "./pages/jobs/JobsPage";
import JobDetails from "./pages/jobs/components/JobDetails";
import JobApplicationsPage from "./pages/jobs/JobApplicationsPage";
import EmployersPage from "./pages/employers/EmployersPage";
import EmployerDetails from "./pages/employers/EmployerDetails";
import JobSekeersPage from "./pages/job-seekers/JobSekeersPage";
import JobSekeerDetails from "./pages/job-seekers/JobSekeerDetails";
import PlansPage from "./pages/subscriptions/PlansPage";
import EmployerSubscriptions from "./pages/subscriptions/EmployerSubscriptions";
import JobsekeerSubscriptions from "./pages/subscriptions/JobsekeerSubscriptions";
import ReportsPage from "./pages/reports/ReportsPage";
import UsersPage from "./pages/users/UsersPage";

const App = () => {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <Toaster position="top-center" richColors />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route
              path="/jobs/:id/applications"
              element={<JobApplicationsPage />}
            />

            <Route path="/employers" element={<EmployersPage />} />
            <Route path="/employers/:id" element={<EmployerDetails />} />

            <Route path="/job-seekers" element={<JobSekeersPage />} />
            <Route path="/job-seekers/:id" element={<JobSekeerDetails />} />

            <Route path="/subscription/plans" element={<PlansPage />} />
            <Route
              path="/subscription/employers"
              element={<EmployerSubscriptions />}
            />
            <Route
              path="/subscription/job-seekers"
              element={<JobsekeerSubscriptions />}
            />

            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<Dashboard />} />
            <Route path="/users" element={<UsersPage />} />
          </Route>
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  );
};

export default App;
