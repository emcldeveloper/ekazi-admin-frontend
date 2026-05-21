import JobsReport from "./components/JobsReport";
import SubscriptionsReport from "./components/SubscriptionsReport";

const ReportsPage = () => {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <SubscriptionsReport />
      <JobsReport />
    </div>
  );
};

export default ReportsPage;
