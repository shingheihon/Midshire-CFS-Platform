import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './src/pages/Landing.tsx';
import NotFound from './src/pages/NotFound.tsx';
import AppLayout from './src/components/AppLayout.tsx';
import Dashboard from './src/pages/app/Dashboard.tsx';
import DashboardAnalytics from './src/pages/app/DashboardAnalytics.tsx';
import IncidentReporting from './src/pages/app/incidents/IncidentReporting.tsx';
import TaskFeed from './src/pages/app/incidents/TaskFeed.tsx';
import IncidentRegistration from './src/pages/app/incidents/Registration.tsx';
import IncidentTriage from './src/pages/app/incidents/Triage.tsx';
import IncidentMonitoring from './src/pages/app/incidents/Monitoring.tsx';
import StatusUpdates from './src/pages/app/incidents/Status.tsx';
import ActivityLogs from './src/pages/app/incidents/ActivityLogs.tsx';
import TaskAssignment from './src/pages/app/incidents/Tasks.tsx';
import CaseInquiry from './src/pages/app/incidents/Inquiry.tsx';
import EvidenceUpload from './src/pages/app/incidents/EvidenceUpload.tsx';
import ReviewCaseFiles from './src/pages/app/cases/Review.tsx';
import CaseLinkAnalysis from './src/pages/app/cases/LinkAnalysis.tsx';
import CaseProgressTracking from './src/pages/app/cases/Progress.tsx';
import CaseHandover from './src/pages/app/cases/Handover.tsx';
import LegalDocumentGeneration from './src/pages/app/cases/LegalDocs.tsx';
import UploadEvidence from './src/pages/app/evidence/Upload.tsx';
import LinkEvidence from './src/pages/app/evidence/Link.tsx';
import EvidenceIntegrityCheck from './src/pages/app/evidence/Integrity.tsx';
import DigitalCustody from './src/pages/app/security/DigitalCustody.tsx';
import SentinelMonitoring from './src/pages/app/security/SentinelMonitoring.tsx';
import GlobalPersonCheck from './src/pages/app/search/GlobalPersonCheck.tsx';
import AISummary from './src/pages/app/ai/Summary.tsx';
import AIAlerts from './src/pages/app/ai/Alerts.tsx';
import PatternAnalysis from './src/pages/app/ai/Patterns.tsx';
import CrimePredictions from './src/pages/app/ai/Predictions.tsx';
import HotspotDetection from './src/pages/app/ai/Hotspots.tsx';
import CCTVViewer from './src/pages/app/ai/CCTV.tsx';
import OSINTFeed from './src/pages/app/ai/OSINT.tsx';
import DailyReports from './src/pages/app/reports/Daily.tsx';
import KPIsAnalytics from './src/pages/app/reports/KPIs.tsx';
import ExportReports from './src/pages/app/reports/Export.tsx';
import GDPRCompliance from './src/pages/app/compliance/GDPR.tsx';

const App: React.FC = () => {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router basename={import.meta.env.BASE_URL}>
        <main className="min-h-screen font-inter">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/app" element={<AppLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="dashboard/analytics" element={<DashboardAnalytics />} />
              <Route path="incidents/reporting" element={<IncidentReporting />} />
              <Route path="incidents/task-feed" element={<TaskFeed />} />
              <Route path="incidents/registration" element={<IncidentRegistration />} />
              <Route path="incidents/triage" element={<IncidentTriage />} />
              <Route path="incidents/monitoring" element={<IncidentMonitoring />} />
              <Route path="incidents/status" element={<StatusUpdates />} />
              <Route path="incidents/activity-logs" element={<ActivityLogs />} />
              <Route path="incidents/tasks" element={<TaskAssignment />} />
              <Route path="incidents/inquiry" element={<CaseInquiry />} />
              <Route path="incidents/evidence-upload" element={<EvidenceUpload />} />
              <Route path="security/digital-custody" element={<DigitalCustody />} />
              <Route path="search/global-person-check" element={<GlobalPersonCheck />} />
              <Route path="security/sentinel" element={<SentinelMonitoring />} />
              <Route path="cases/review" element={<ReviewCaseFiles />} />
              <Route path="cases/link-analysis" element={<CaseLinkAnalysis />} />
              <Route path="cases/progress" element={<CaseProgressTracking />} />
              <Route path="cases/handover" element={<CaseHandover />} />
              <Route path="cases/legal-docs" element={<LegalDocumentGeneration />} />
              <Route path="evidence/upload" element={<UploadEvidence />} />
              <Route path="evidence/link" element={<LinkEvidence />} />
              <Route path="evidence/integrity" element={<EvidenceIntegrityCheck />} />
              <Route path="ai/summary" element={<AISummary />} />
              <Route path="ai/alerts" element={<AIAlerts />} />
              <Route path="ai/patterns" element={<PatternAnalysis />} />
              <Route path="ai/predictions" element={<CrimePredictions />} />
              <Route path="ai/hotspots" element={<HotspotDetection />} />
              <Route path="ai/cctv" element={<CCTVViewer />} />
              <Route path="ai/osint" element={<OSINTFeed />} />
              <Route path="reports/daily" element={<DailyReports />} />
              <Route path="reports/kpis" element={<KPIsAnalytics />} />
              <Route path="reports/export" element={<ExportReports />} />
              <Route path="compliance/gdpr" element={<GDPRCompliance />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </main>
      </Router>
    </Theme>
  );
}

export default App;