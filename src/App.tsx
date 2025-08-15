import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import WelcomePage from "@/pages/welcome";
import ROIResultsPage from "@/pages/roi-results";
import DashboardPage from "@/pages/dashboard";
import DeviceManagementPage from "@/pages/device-management";
import SavingsReportPage from "@/pages/savings-report";
import OptimizationStrategiesPage from "@/pages/optimization-strategies";
import BillUploadPage from "@/pages/bill-upload";
import SimulationPreviewPage from "@/pages/simulation-preview";
import DeviceDetailsPage from "@/pages/device-details";
import DailySavingsPage from "@/pages/daily-savings";
import NotificationsPage from "@/pages/notifications";
import PlanAdvisorPage from "@/pages/plan-advisor";

function App() {
  return (
    <Routes>
      <Route element={<WelcomePage />} path="/" />
      <Route element={<IndexPage />} path="/index" />
      <Route element={<WelcomePage />} path="/welcome" />
      <Route element={<ROIResultsPage />} path="/roi-results" />
      <Route element={<DashboardPage />} path="/dashboard" />
      <Route element={<DeviceManagementPage />} path="/device-management" />
      <Route element={<SavingsReportPage />} path="/savings-report" />
      <Route element={<OptimizationStrategiesPage />} path="/optimization-strategies" />
      <Route element={<BillUploadPage />} path="/bill-upload" />
      <Route element={<SimulationPreviewPage />} path="/simulation-preview" />
      <Route element={<DeviceDetailsPage />} path="/device-details" />
      <Route element={<DailySavingsPage />} path="/daily-savings" />
      <Route element={<NotificationsPage />} path="/notifications" />
      <Route element={<PlanAdvisorPage />} path="/plan-advisor" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
