import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, AlertCircle, Brain, Server, Plug,
  Settings, Database, ChevronDown, ChevronRight, Menu, X,
  FileText, Shield, Users, Activity
} from 'lucide-react';
import { toast } from 'react-toastify';

interface NavItem {
  label: string;
  path?: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    label: 'Dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    children: [
      { label: 'Operational Dashboard', path: '/app/dashboard', icon: <Activity className="w-4 h-4" /> },
      { label: 'Analytics Dashboard', path: '/app/dashboard/analytics', icon: <Activity className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Incident Management',
    icon: <AlertCircle className="w-5 h-5" />,
    children: [
      { label: 'Incident Reporting', path: '/app/incidents/reporting', icon: <FileText className="w-4 h-4" /> },
      { label: 'Task Feed', path: '/app/incidents/task-feed', icon: <FileText className="w-4 h-4" /> },
      { label: 'Incident Registration', path: '/app/incidents/registration', icon: <FileText className="w-4 h-4" /> },
      { label: 'Triage', path: '/app/incidents/triage', icon: <FileText className="w-4 h-4" /> },
      { label: 'Monitoring', path: '/app/incidents/monitoring', icon: <FileText className="w-4 h-4" /> },
      { label: 'Status Updates', path: '/app/incidents/status', icon: <FileText className="w-4 h-4" /> },
      { label: 'Officer Activity Logs', path: '/app/incidents/activity-logs', icon: <FileText className="w-4 h-4" /> },
      { label: 'Task Assignment', path: '/app/incidents/tasks', icon: <FileText className="w-4 h-4" /> },
      { label: 'Case Inquiry', path: '/app/incidents/inquiry', icon: <FileText className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Security',
    icon: <Shield className="w-5 h-5" />,
    children: [
      { label: 'Digital Custody', path: '/app/security/digital-custody', icon: <Shield className="w-4 h-4" /> },
      { label: 'Global Person Check', path: '/app/search/global-person-check', icon: <Shield className="w-4 h-4" /> },
      { label: 'Sentinel Monitoring', path: '/app/security/sentinel', icon: <Shield className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Compliance',
    icon: <Shield className="w-5 h-5" />,
    children: [
      { label: 'GDPR Compliance', path: '/app/compliance/gdpr', icon: <Shield className="w-4 h-4" /> },
      { label: 'Audit Trail', path: '/app/compliance/audit', icon: <Shield className="w-4 h-4" /> },
      { label: 'Access Logs', path: '/app/compliance/access-logs', icon: <Shield className="w-4 h-4" /> },
      { label: 'Retention Policy', path: '/app/compliance/retention', icon: <Shield className="w-4 h-4" /> }
    ]
  },
  {
    label: 'AI & Intelligence',
    icon: <Brain className="w-5 h-5" />,
    children: [
      { label: 'AI Call Centre', path: '/app/ai/summary', icon: <Brain className="w-4 h-4" /> },
      { label: 'AI Alerts', path: '/app/ai/alerts', icon: <Brain className="w-4 h-4" /> },
      { label: 'Pattern Analysis', path: '/app/ai/patterns', icon: <Brain className="w-4 h-4" /> },
      { label: 'Crime Predictions', path: '/app/ai/predictions', icon: <Brain className="w-4 h-4" /> },
      { label: 'Hotspot Detection', path: '/app/ai/hotspots', icon: <Brain className="w-4 h-4" /> },
      { label: 'CCTV Viewer', path: '/app/ai/cctv', icon: <Brain className="w-4 h-4" /> },
      { label: 'OSINT Feed', path: '/app/ai/osint', icon: <Brain className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Case Management',
    icon: <FileText className="w-5 h-5" />,
    children: [
      { label: 'Review Case Files', path: '/app/cases/review', icon: <FileText className="w-4 h-4" /> },
      { label: 'Case Link Analysis', path: '/app/cases/link-analysis', icon: <FileText className="w-4 h-4" /> },
      { label: 'Case Progress Tracking', path: '/app/cases/progress', icon: <FileText className="w-4 h-4" /> },
      { label: 'Case Handover', path: '/app/cases/handover', icon: <FileText className="w-4 h-4" /> },
      { label: 'Legal Document Generation', path: '/app/cases/legal-docs', icon: <FileText className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Evidence Management',
    icon: <Shield className="w-5 h-5" />,
    children: [
      { label: 'Upload Evidence', path: '/app/evidence/upload', icon: <FileText className="w-4 h-4" /> },
      { label: 'Link Evidence to Incident', path: '/app/evidence/link', icon: <FileText className="w-4 h-4" /> },
      { label: 'Evidence Integrity Check', path: '/app/evidence/integrity', icon: <FileText className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Reporting',
    icon: <FileText className="w-5 h-5" />,
    children: [
      { label: 'Daily Reports', path: '/app/reports/daily', icon: <FileText className="w-4 h-4" /> },
      { label: 'KPIs & Analytics', path: '/app/reports/kpis', icon: <FileText className="w-4 h-4" /> },
      { label: 'Export Reports', path: '/app/reports/export', icon: <FileText className="w-4 h-4" /> }
    ]
  },
  {
    label: 'MCP Services',
    icon: <Server className="w-5 h-5" />,
    children: [
      { label: 'IncidentService', path: '/app/mcp/incident-service', icon: <Server className="w-4 h-4" /> },
      { label: 'CaseService', path: '/app/mcp/case-service', icon: <Server className="w-4 h-4" /> },
      { label: 'ComplianceService', path: '/app/mcp/compliance-service', icon: <Server className="w-4 h-4" /> },
      { label: 'SecurityService', path: '/app/mcp/security-service', icon: <Server className="w-4 h-4" /> },
      { label: 'ReportingService', path: '/app/mcp/reporting-service', icon: <Server className="w-4 h-4" /> },
      { label: 'DataAccessService', path: '/app/mcp/data-access-service', icon: <Server className="w-4 h-4" /> },
      { label: 'AIOrchestratorService', path: '/app/mcp/ai-orchestrator-service', icon: <Server className="w-4 h-4" /> },
      { label: 'CallHandlingService', path: '/app/mcp/call-handling-service', icon: <Server className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Gateways',
    icon: <Plug className="w-5 h-5" />,
    children: [
      { label: 'PNCGateway', path: '/app/gateways/pnc', icon: <Plug className="w-4 h-4" /> },
      { label: 'DispatchGateway', path: '/app/gateways/dispatch', icon: <Plug className="w-4 h-4" /> },
      { label: 'WitnessGateway', path: '/app/gateways/witness', icon: <Plug className="w-4 h-4" /> },
      { label: 'CitizenContactGateway', path: '/app/gateways/citizen', icon: <Plug className="w-4 h-4" /> },
      { label: 'DatalakeGateway', path: '/app/gateways/datalake', icon: <Plug className="w-4 h-4" /> },
      { label: 'SecurityMonitoringGateway', path: '/app/gateways/security-monitoring', icon: <Plug className="w-4 h-4" /> },
      { label: 'AIAPIGateway', path: '/app/gateways/ai-api', icon: <Plug className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Admin',
    icon: <Settings className="w-5 h-5" />,
    children: [
      { label: 'User Management', path: '/app/admin/users', icon: <Users className="w-4 h-4" /> },
      { label: 'Roles & Permissions', path: '/app/admin/roles', icon: <Users className="w-4 h-4" /> },
      { label: 'Audit Logs', path: '/app/admin/audit', icon: <FileText className="w-4 h-4" /> },
      { label: 'System Monitoring', path: '/app/admin/monitoring', icon: <Activity className="w-4 h-4" /> }
    ]
  },
  {
    label: 'External Systems',
    icon: <Database className="w-5 h-5" />,
    children: [
      { label: 'PNC System', path: '/app/external/pnc', icon: <Database className="w-4 h-4" /> },
      { label: 'Dispatch System', path: '/app/external/dispatch', icon: <Database className="w-4 h-4" /> },
      { label: 'Witness System', path: '/app/external/witness', icon: <Database className="w-4 h-4" /> },
      { label: 'Evidence Store', path: '/app/external/evidence-store', icon: <Database className="w-4 h-4" /> },
      { label: 'CCTV/IoT', path: '/app/external/cctv-iot', icon: <Database className="w-4 h-4" /> },
      { label: 'Data Lake', path: '/app/external/data-lake', icon: <Database className="w-4 h-4" /> },
      { label: 'Social Media Feeds', path: '/app/external/social-media', icon: <Database className="w-4 h-4" /> },
      { label: 'GIS Mapping', path: '/app/external/gis', icon: <Database className="w-4 h-4" /> }
    ]
  }
];

const isImplemented = (path?: string) => {
  if (!path) return false;
  if (path.startsWith('/app/dashboard')) return true;
  if (path.startsWith('/app/incidents')) return true;
  if (path.startsWith('/app/cases')) return true;
  if (path.startsWith('/app/evidence')) return true;
  if (path.startsWith('/app/ai')) return true;
  if (path.startsWith('/app/reports')) return true;
  if (path === '/app/compliance/gdpr') return true;
  if (path === '/app/security/digital-custody') return true;
  if (path === '/app/security/sentinel') return true;
  if (path === '/app/search/global-person-check') return true;
  return false;
};

const Sidebar: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Dashboard']);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const toggleExpand = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    );
  };

  const NavItemComponent: React.FC<{ item: NavItem; depth?: number }> = ({ item, depth = 0 }) => {
    const isExpanded = expandedItems.includes(item.label);
    const isActive = item.path === location.pathname;
    const implemented = isImplemented(item.path);

    return (
      <div>
        {item.children ? (
          <button
            onClick={() => toggleExpand(item.label)}
            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${depth === 0 ? 'text-slate-200 hover:bg-brand-blue/80' : 'text-slate-300 hover:bg-brand-blue/80 pl-8'
              }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </div>
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        ) : implemented ? (
          <Link
            to={item.path || '#'}
            onClick={() => setIsMobileOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${isActive
              ? 'bg-brand-yellow text-brand-blue font-semibold'
              : depth === 0
                ? 'text-slate-200 hover:bg-brand-blue/80'
                : 'text-slate-300 hover:bg-brand-blue/80 pl-12'
              }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ) : (
          <button
            onClick={() => {
              setIsMobileOpen(false);
              toast.info("Haven't built yet!", { position: "bottom-right" });
            }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${depth === 0
              ? 'text-slate-200 hover:bg-brand-blue/80'
              : 'text-slate-300 hover:bg-brand-blue/80 pl-12'
              }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        )}
        {item.children && isExpanded && (
          <div className="bg-brand-blue/50">
            {item.children.map(child => (
              <NavItemComponent key={child.label} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-brand-blue p-2 rounded-lg text-white"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-brand-blue border-r border-brand-blue/80 overflow-y-auto transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
      >
        <div className="p-4 border-b border-brand-blue/80">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-brand-yellow" />
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white">CFS Platform</span>
            </div>
          </div>
        </div>
        <nav className="py-4">
          {navigationItems.map(item => (
            <NavItemComponent key={item.label} item={item} />
          ))}
        </nav>
      </aside>

      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;