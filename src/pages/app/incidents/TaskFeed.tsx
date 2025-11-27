import React from 'react';
import { Radio, MapPin, Clock, Users, AlertCircle } from 'lucide-react';

interface DispatchTask {
    id: string;
    type: string;
    location: string;
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    time: string;
    assignedOfficers: string[];
    description: string;
    status: 'Active' | 'Dispatched' | 'En Route';
}

export default function TaskFeed() {
    const mockDispatches: DispatchTask[] = [
        {
            id: 'DISPATCH-8821',
            type: 'Domestic Disturbance',
            location: 'High Street, Manchester',
            priority: 'High',
            time: '14:32',
            assignedOfficers: ['PC Wilson', 'PC Thompson'],
            description: 'Noise complaint escalated. Possible domestic violence.',
            status: 'Dispatched'
        },
        {
            id: 'DISPATCH-8822',
            type: 'Shoplifting',
            location: 'Arndale Centre, Manchester',
            priority: 'Medium',
            time: '14:45',
            assignedOfficers: ['PC Brown'],
            description: 'Security detained suspect. Officer required for formal arrest.',
            status: 'En Route'
        },
        {
            id: 'DISPATCH-8823',
            type: 'Traffic Collision',
            location: 'M60 Junction 12',
            priority: 'Critical',
            time: '14:28',
            assignedOfficers: ['PC Davis', 'PC Martinez', 'Traffic Unit Alpha'],
            description: 'Multi-vehicle collision. Road closure required. Ambulance on scene.',
            status: 'Active'
        }
    ];

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'Critical':
                return 'bg-red-100 text-red-700 border-red-200';
            case 'High':
                return 'bg-orange-100 text-orange-700 border-orange-200';
            case 'Medium':
                return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            default:
                return 'bg-blue-100 text-blue-700 border-blue-200';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-red-100 text-red-700';
            case 'Dispatched':
                return 'bg-blue-100 text-blue-700';
            case 'En Route':
                return 'bg-purple-100 text-purple-700';
            default:
                return 'bg-slate-100 text-slate-700';
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Task Feed</h1>
                <p className="text-slate-600">Real-time feed from Dispatch system</p>
            </div>

            {/* Legacy System Integration Badge */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4">
                <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-600" />
                    <div>
                        <h3 className="text-amber-900 font-bold text-sm">SOURCE: DISPATCH SYSTEM</h3>
                        <p className="text-amber-700 text-xs mt-0.5">
                            Tasks synchronised from CAD system via Azure Integration.
                        </p>
                    </div>
                </div>
            </div>

            {/* Task Feed Cards */}
            <div className="space-y-4">
                {mockDispatches.map((task) => (
                    <div
                        key={task.id}
                        className={`bg-white border-2 rounded-lg p-6 shadow-sm ${getPriorityColor(task.priority)}`}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <Radio className="w-5 h-5 text-brand-blue" />
                                    <h3 className="text-slate-900 font-bold text-lg">{task.type}</h3>
                                </div>
                                <div className="text-slate-600 font-mono text-sm">{task.id}</div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getPriorityColor(task.priority)}`}>
                                    {task.priority}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(task.status)}`}>
                                    {task.status}
                                </span>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-3 mb-4">
                            <div className="flex items-center gap-2 text-slate-700">
                                <MapPin className="w-4 h-4 text-brand-blue" />
                                <span className="font-medium">{task.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-700">
                                <Clock className="w-4 h-4 text-brand-blue" />
                                <span>Dispatched at {task.time}</span>
                            </div>
                            <div className="flex items-start gap-2 text-slate-700">
                                <Users className="w-4 h-4 text-brand-blue mt-0.5" />
                                <div>
                                    <span className="font-medium">Assigned Officers:</span>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {task.assignedOfficers.map((officer) => (
                                            <span
                                                key={officer}
                                                className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                                            >
                                                {officer}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                            <p className="text-slate-700 text-sm">{task.description}</p>
                        </div>

                        {/* Legacy System Footer */}
                        <div className="mt-4 pt-4 border-t border-slate-200">
                            <p className="text-xs text-slate-500 italic">
                                ⓘ Task imported from CAD system.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Info Panel */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-blue-900 font-semibold mb-2">Integration Information</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Tasks are read-only from the Computer-Aided Dispatch (CAD) system</li>
                    <li>• Synchronization occurs automatically via Azure Integration</li>
                    <li>• Officer assignments are managed in the CAD system</li>
                    <li>• Last sync: {new Date().toLocaleTimeString()}</li>
                </ul>
            </div>
        </div>
    );
}
