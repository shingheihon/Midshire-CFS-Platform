import React from 'react';
import { Brain, FileText, Sparkles, Phone, User, Clock, MapPin, AlertTriangle } from 'lucide-react';

export default function AISummary() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">AI Call Centre Assistance</h1>
        <p className="text-slate-600">Real-time transcription and AI-powered analysis for emergency calls</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column: Live Transcript */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col h-[800px]">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-full">
                <Phone className="w-5 h-5 text-red-600 animate-pulse" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Live Call Transcript</h2>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 00:02:14
                  </span>
                  <span>•</span>
                  <span className="text-red-600 font-semibold">Recording</span>
                </div>
              </div>
            </div>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-xs font-semibold">
              Call ID: #999-2025-8842
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {/* Transcript Items */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm text-slate-900">Operator (Sarah)</span>
                  <span className="text-xs text-slate-400">14:32:05</span>
                </div>
                <div className="bg-white border border-slate-200 p-3 rounded-r-lg rounded-bl-lg text-slate-700 text-sm shadow-sm">
                  Emergency services, police, fire or ambulance?
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-slate-600" />
              </div>
              <div className="flex-1 text-right">
                <div className="flex items-center gap-2 mb-1 justify-end">
                  <span className="text-xs text-slate-400">14:32:08</span>
                  <span className="font-semibold text-sm text-slate-900">Caller</span>
                </div>
                <div className="bg-brand-blue text-white p-3 rounded-l-lg rounded-br-lg text-sm shadow-sm text-left">
                  Police please. I think someone is trying to break into my neighbour's house.
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm text-slate-900">Operator (Sarah)</span>
                  <span className="text-xs text-slate-400">14:32:12</span>
                </div>
                <div className="bg-white border border-slate-200 p-3 rounded-r-lg rounded-bl-lg text-slate-700 text-sm shadow-sm">
                  Okay, I'm connecting you to the police. Can you tell me the address?
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-slate-600" />
              </div>
              <div className="flex-1 text-right">
                <div className="flex items-center gap-2 mb-1 justify-end">
                  <span className="text-xs text-slate-400">14:32:18</span>
                  <span className="font-semibold text-sm text-slate-900">Caller</span>
                </div>
                <div className="bg-brand-blue text-white p-3 rounded-l-lg rounded-br-lg text-sm shadow-sm text-left">
                  It's near the University of Manchester. Oxford road, the house M12345.
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm text-slate-900">Operator (Sarah)</span>
                  <span className="text-xs text-slate-400">14:32:25</span>
                </div>
                <div className="bg-white border border-slate-200 p-3 rounded-r-lg rounded-bl-lg text-slate-700 text-sm shadow-sm">
                  Thank you. Are the individuals still there? Can you describe them?
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-slate-600" />
              </div>
              <div className="flex-1 text-right">
                <div className="flex items-center gap-2 mb-1 justify-end">
                  <span className="text-xs text-slate-400">14:32:35</span>
                  <span className="font-semibold text-sm text-slate-900">Caller</span>
                </div>
                <div className="bg-brand-blue text-white p-3 rounded-l-lg rounded-br-lg text-sm shadow-sm text-left">
                  Yes, two men. One is wearing a black hoodie and jeans, the other has a green jacket. They're trying to force the back door.
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm text-slate-900">Operator (Sarah)</span>
                  <span className="text-xs text-slate-400">14:32:42</span>
                </div>
                <div className="bg-white border border-slate-200 p-3 rounded-r-lg rounded-bl-lg text-slate-700 text-sm shadow-sm">
                  Officers are on their way. Do not approach them. Are they carrying anything?
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-slate-600" />
              </div>
              <div className="flex-1 text-right">
                <div className="flex items-center gap-2 mb-1 justify-end">
                  <span className="text-xs text-slate-400">14:32:50</span>
                  <span className="font-semibold text-sm text-slate-900">Caller</span>
                </div>
                <div className="bg-brand-blue text-white p-3 rounded-l-lg rounded-br-lg text-sm shadow-sm text-left">
                  I think the one in the green jacket has a crowbar. Wait, there's a van parked outside. A white Ford Transit, registration... I can't see it clearly. Ends in X Y Z.
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm text-slate-900">Operator (Sarah)</span>
                  <span className="text-xs text-slate-400">14:32:55</span>
                </div>
                <div className="bg-white border border-slate-200 p-3 rounded-r-lg rounded-bl-lg text-slate-700 text-sm shadow-sm">
                  Okay, stay on the line. Officers are 2 minutes away.
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-slate-200 bg-white rounded-b-lg">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live transcription active...</span>
            </div>
          </div>
        </div>

        {/* Right Column: AI Analysis */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 rounded-lg p-6 shadow-sm h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Real-time AI Analysis</h2>
                <p className="text-sm text-slate-600">Processing live audio stream...</p>
              </div>
              <span className="ml-auto px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold animate-pulse border border-purple-200">
                LIVE UPDATES
              </span>
            </div>

            <div className="space-y-4">
              {/* Critical Alerts */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <h3 className="text-red-900 font-bold text-sm">WEAPON DETECTED</h3>
                    <p className="text-red-700 text-sm mt-1">
                      Caller mentioned "crowbar". Potential for violence. Officer safety warning advised.
                    </p>
                  </div>
                </div>
              </div>

              {/* Extracted Entities */}
              <div className="bg-white/80 border border-slate-200 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-slate-900 font-semibold mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-blue" />
                  Extracted Key Facts
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-start gap-3 p-2 bg-slate-50 rounded border border-slate-100">
                    <MapPin className="w-4 h-4 text-slate-400 mt-1" />
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase">Location</span>
                      <p className="text-slate-900 font-medium">44 Oakwood Avenue, Didsbury</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 bg-slate-50 rounded border border-slate-100">
                    <User className="w-4 h-4 text-slate-400 mt-1" />
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase">Suspects</span>
                      <p className="text-slate-900 font-medium">2 Males</p>
                      <ul className="text-xs text-slate-600 mt-1 list-disc list-inside">
                        <li>Black hoodie, jeans</li>
                        <li>Green jacket (has crowbar)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 bg-slate-50 rounded border border-slate-100">
                    <Brain className="w-4 h-4 text-slate-400 mt-1" />
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase">Vehicle</span>
                      <p className="text-slate-900 font-medium">White Ford Transit Van</p>
                      <p className="text-xs text-slate-600">Partial Reg: ...XYZ</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-white/80 border border-slate-200 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-slate-900 font-semibold mb-3">AI Intelligence Matches</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-purple-600 font-bold">•</span>
                    <p className="text-slate-700">
                      <span className="font-semibold text-purple-700">Pattern Match:</span> Similar MO to burglary series in Didsbury (Operation Magpie).
                    </p>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-purple-600 font-bold">•</span>
                    <p className="text-slate-700">
                      <span className="font-semibold text-purple-700">Vehicle Alert:</span> White Ford Transit ending XYZ linked to known offender group.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommended Actions */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h3 className="text-blue-900 font-semibold mb-2">Suggested Actions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-blue-800">
                    <input type="checkbox" className="rounded border-blue-300 text-brand-blue focus:ring-brand-blue" />
                    <span>Dispatch Grade 1 Response (Burglary in Progress)</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-blue-800">
                    <input type="checkbox" className="rounded border-blue-300 text-brand-blue focus:ring-brand-blue" />
                    <span>Alert local patrol units for White Transit Van</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-blue-800">
                    <input type="checkbox" className="rounded border-blue-300 text-brand-blue focus:ring-brand-blue" />
                    <span>Check ANPR cameras on Kingsway (A34)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}