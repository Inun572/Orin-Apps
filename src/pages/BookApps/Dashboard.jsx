import { useDocumentTitle } from '@/hooks/customHooks';

const Dashboard = () => {
  useDocumentTitle('Dashboard | My BookApps');
  return (
    <>
      <h1 className="text-3xl p-8">Welcome Back!</h1>
      <div className="w-full p-4">Dashboard</div>
    </>
  );
};

export default Dashboard;
