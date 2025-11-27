import React, { useState } from 'react';
import { Search, Shield, AlertTriangle, Database, Lock } from 'lucide-react';

type Role = 'Police' | 'Detective';
type Zone = 'Patrol' | 'Intelligence';

interface DataEntry {
    id: string;
    name: string;
    source: string;
    zone: Zone;
    data: { label: string; value: string }[];
}

export default function GlobalPersonCheck() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRole, setSelectedRole] = useState<Role>('Police');
    const [hasSearched, setHasSearched] = useState(false);

    // Mock unified data lake
    const unifiedDataLake: DataEntry[] = [
        {
            id: 'ARREST-001',
            name: 'John Doe',
            source: 'Arrest DB',
            zone: 'Patrol',
            data: [
                { label: 'Name', value: 'John Doe' },
                { label: 'Arrest Date', value: '15 Dec 2024' },
                { label: 'Charge', value: 'Theft' },
                { label: 'Status', value: 'Released on Bail' },
                { label: 'Officer', value: 'PC Wilson' }
            ]
        },
        {
            id: 'WARRANT-001',
            name: 'John Doe',
            source: 'Warrant DB',
            zone: 'Patrol',
            data: [
                { label: 'Name', value: 'John Doe' },
                { label: 'Warrant Type', value: 'Arrest Warrant' },
                { label: 'Issue Date', value: '10 Jan 2025' },
                { label: 'Reason', value: 'Failure to Appear' },
                { label: 'Status', value: 'Active' }
            ]
        },
        {
            id: 'PATROL-001',
            name: 'John Doe',
            source: 'Patrol DB',
            zone: 'Patrol',
            data: [
                { label: 'Name', value: 'John Doe' },
                { label: 'Last Sighting', value: 'High Street, Manchester' },
                { label: 'Date/Time', value: '20 Jan 2025, 14:30' },
                { label: 'Vehicle', value: 'Blue Ford Focus (AB12 CDE)' },
                { label: 'Notes', value: 'Routine stop and search' }
            ]
        },
        {
            id: 'INTEL-001',
            name: 'John Doe',
            source: 'Intelligence DB',
            zone: 'Intelligence',
            data: [
                { label: 'Name', value: 'John Doe' },
                { label: 'Intelligence Type', value: 'Organised Crime' },
                { label: 'Classification', value: 'CONFIDENTIAL' },
                { label: 'Associates', value: 'Known connection to OCG-North' },
                { label: 'Risk Assessment', value: 'High - Armed and Dangerous' }
            ]
        },
        {
            id: 'INTEL-002',
            name: 'John Doe',
            source: 'Intelligence DB',
            zone: 'Intelligence',
            data: [
                { label: 'Name', value: 'John Doe' },
                { label: 'Operation', value: 'Operation Phoenix' },
                { label: 'Role', value: 'Suspected Drug Trafficker' },
                { label: 'Surveillance', value: 'Active since Nov 2024' },
                { label: 'Handler', value: 'DI Mitchell (Intelligence Unit)' }
            ]
        }
    ];

    const handleSearch = () => {
        if (!searchQuery.trim()) return;
        setHasSearched(true);
    };

    // Filter results based on role and search query
    const getFilteredResults = (): DataEntry[] => {
        if (!hasSearched || !searchQuery.trim()) return [];

        const matchingResults = unifiedDataLake.filter(entry =>
            entry.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Apply role-based filtering (ZBA/RBAC)
        if (selectedRole === 'Police') {
            return matchingResults.filter(entry => entry.zone === 'Patrol');
        } else {
            // Detective can see both zones
            return matchingResults;
        }
    };

    const filteredResults = getFilteredResults();
    const hasIntelligenceOnlyResults = hasSearched &&
        unifiedDataLake.some(entry =>
            entry.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            entry.zone === 'Intelligence'
        ) &&
        selectedRole === 'Police' &&
        filteredResults.length === 0;

    const getZoneColor = (zone: Zone) => {
        return zone === 'Patrol'
            ? 'bg-green-100 text-green-700 border-green-300'
            : 'bg-red-100 text-red-700 border-red-300';
    };

    const getZoneBorderColor = (zone: Zone) => {
        return zone === 'Patrol' ? 'border-green-300' : 'border-red-300';
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Global Person Check</h1>
                <p className="text-slate-600">Unified data lake with Zero Trust ZBA/RBAC enforcement</p>
            </div>

            {/* Zero Trust Banner */}
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
                <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-purple-600" />
                    <div>
                        <h3 className="text-purple-900 font-bold text-sm">ZERO TRUST ZBA/RBAC ENABLED</h3>
                        <p className="text-purple-700 text-xs mt-0.5">
                            Role-based access control with zone-based security. Access restricted by officer role.
                        </p>
                    </div>
                </div>
            </div>

            {/* Role Selector and Search */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Your Role (ZBA/RBAC Policy)
                    </label>
                    <select
                        value={selectedRole}
                        onChange={(e) => {
                            setSelectedRole(e.target.value as Role);
                            setHasSearched(false);
                        }}
                        className="w-full md:w-96 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue font-semibold"
                    >
                        <option value="Police">Police (Patrol Zone Only)</option>
                        <option value="Detective">Detective (Patrol & Intelligence Zones)</option>
                    </select>
                    <p className="text-xs text-slate-500 mt-1">
                        {selectedRole === 'Police'
                            ? '🟠 Access: Patrol Zone only (Arrest, Warrant, Patrol DBs)'
                            : '🟢 Access: Patrol & Intelligence Zones (Full Access)'}
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            placeholder="Search for person, ID, or vehicle..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-12 pr-4 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue text-lg"
                        />
                    </div>
                    <button
                        onClick={handleSearch}
                        disabled={!searchQuery.trim()}
                        className="bg-brand-blue hover:bg-brand-blue/90 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2"
                    >
                        <Search className="w-5 h-5" />
                        Search
                    </button>
                </div>
            </div>

            {/* Access Denied Message */}
            {hasIntelligenceOnlyResults && (
                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                        <Lock className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-red-900 font-bold text-lg mb-2">Access Denied - ZBA/RBAC Policy</h3>
                            <p className="text-red-800 mb-3">
                                Search results exist in the <strong>Intelligence Zone</strong>, but your role
                                (<strong>{selectedRole}</strong>) does not have clearance to access this data.
                            </p>
                            <div className="bg-red-100 border border-red-200 rounded p-3">
                                <p className="text-red-900 text-sm font-semibold mb-1">Zero Trust Enforcement:</p>
                                <ul className="text-red-800 text-sm space-y-1">
                                    <li>• Your role is restricted to <strong>Patrol Zone</strong> data only</li>
                                    <li>• Intelligence Zone requires <strong>Detective</strong> clearance</li>
                                    <li>• This access attempt has been logged in Sentinel for audit compliance</li>
                                    <li>• Contact your supervisor to request elevated access if required</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Search Results */}
            {hasSearched && filteredResults.length > 0 && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-slate-900">Search Results</h2>
                        <span className="text-slate-600 text-sm">
                            {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} (Role: {selectedRole})
                        </span>
                    </div>

                    {filteredResults.map((result) => (
                        <div
                            key={result.id}
                            className={`bg-white border-2 rounded-lg overflow-hidden shadow-sm ${getZoneBorderColor(result.zone)}`}
                        >
                            {/* Header with Zone Tag */}
                            <div className={`px-6 py-4 ${getZoneColor(result.zone)} border-b-2 ${getZoneBorderColor(result.zone)}`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Database className="w-6 h-6" />
                                        <div>
                                            <h3 className="font-bold text-lg">{result.source}</h3>
                                            <p className="text-sm opacity-80">Record ID: {result.id}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getZoneColor(result.zone)} ${getZoneBorderColor(result.zone)}`}>
                                            {result.zone === 'Patrol' ? '🟢' : '🔴'} {result.zone.toUpperCase()} ZONE
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Data Content */}
                            <div className="p-6 bg-white">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {result.data.map((item, index) => (
                                        <div key={index} className="space-y-1">
                                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                                                {item.label}
                                            </div>
                                            <div className="text-slate-900 font-medium">{item.value}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Security Footer */}
                                <div className="mt-4 pt-4 border-t border-slate-200">
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <Shield className="w-3 h-3" />
                                        <span>
                                            Security Zone: <strong>{result.zone}</strong> •
                                            Source: <strong>{result.source}</strong> •
                                            Access granted via ZBA/RBAC policy
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* No Results State */}
            {hasSearched && filteredResults.length === 0 && !hasIntelligenceOnlyResults && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-12 text-center">
                    <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-slate-600 font-semibold mb-2">No Results Found</h3>
                    <p className="text-slate-500 text-sm">
                        No records found matching "{searchQuery}" in zones accessible to your role
                    </p>
                </div>
            )}

            {/* System Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-blue-900 font-semibold mb-2 flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Data Integration Information
                </h3>
                <ul className="text-blue-800 text-sm space-y-1">
                    <li>• <strong>Data Source:</strong> Data synthesised from integrated DBs (Arrest, Warrant, Patrol) via Qlik Replicate into Azure</li>
                    <li>• <strong>Security Model:</strong> Zero Trust architecture with Zone-Based Access (ZBA) and Role-Based Access Control (RBAC)</li>
                    <li>• <strong>Patrol Zone:</strong> Accessible to Police role - includes Arrest DB, Warrant DB, Patrol DB</li>
                    <li>• <strong>Intelligence Zone:</strong> Restricted to Detective role only - includes classified intelligence data</li>
                    <li>• <strong>Audit Logging:</strong> All searches and access attempts logged in Microsoft Sentinel for compliance</li>
                </ul>
            </div>
        </div>
    );
}
