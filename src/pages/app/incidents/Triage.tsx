import React from 'react';
import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';

export default function IncidentTriage() {
  const incidents = [
    { id: 'INC-2025-0425', type: 'Armed Robbery', location: 'Manchester M12345', priority: 'Critical', time: '2 min ago', status: 'Pending' },
    { id: 'INC-2025-0424', type: 'Domestic Disturbance', location: 'Manchester M12345', priority: 'High', time: '8 min ago', status: 'Pending' },
    { id: 'INC-2025-0423', type: 'Vandalism', location: 'Manchester M12345', priority: 'Medium', time: '15 min ago', status: 'Triaged' },
    { id: 'INC-2025-0422', type: 'Noise Complaint', location: 'Manchester M12345', priority: 'Low', time: '22 min ago', status: 'Triaged' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Incident Triage</h1>
        <p className="text-slate-600">Assess and prioritise incoming incidents for dispatch</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h3 className="text-lg font-semibold text-slate-900">Critical</h3>
          </div>
          <div className="text-3xl font-bold text-slate-900">3</div>
          <p className="text-sm text-slate-600 mt-1">Require immediate attention</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-6 h-6 text-yellow-600" />
            <h3 className="text-lg font-semibold text-slate-900">Pending</h3>
          </div>
          <div className="text-3xl font-bold text-slate-900">8</div>
          <p className="text-sm text-slate-600 mt-1">Awaiting triage assessment</p>
        </div>

        <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-6 h-6 text-brand-blue" />
            <h3 className="text-lg font-semibold text-slate-900">Triaged</h3>
          </div>
          <div className="text-3xl font-bold text-slate-900">24</div>
          <p className="text-sm text-slate-600 mt-1">Ready for dispatch</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Triage Queue</h2>
        <div className="space-y-3">
          {incidents.map((incident) => (
            <div key={incident.id} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-slate-900 font-semibold mb-1">{incident.id}</div>
                  <div className="text-slate-600 text-sm">{incident.type}</div>
                  <div className="text-slate-500 text-sm">{incident.location}</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${incident.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                    incident.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                      incident.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                    }`}>
                    {incident.priority}
                  </span>
                  <span className="text-xs text-slate-500">{incident.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {incident.status === 'Pending' ? (
                  <>
                    <button className="flex-1 bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                      Approve & Dispatch
                    </button>
                    <button className="flex-1 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue px-4 py-2 rounded text-sm font-semibold transition-colors">
                      Request More Info
                    </button>
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                      Make Your Own Plan
                    </button>
                  </>
                ) : (
                  <div className="flex items-center gap-2 text-brand-blue text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Triaged - Ready for dispatch</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}