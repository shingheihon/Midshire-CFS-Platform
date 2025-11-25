import React, { useState } from 'react';
import { Bell, User, LogOut, Eye, X } from 'lucide-react';

const TopBar: React.FC = () => {
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    textToSpeech: false,
    colourblindMode: false,
    highContrast: false,
    largeText: false
  });

  const toggleSetting = (key: keyof typeof accessibilitySettings) => {
    setAccessibilitySettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-slate-800 border-b border-slate-700 px-6 py-3 flex items-center justify-between z-50 relative">
      <div className="flex items-center gap-4">
        <div className="text-slate-300 text-sm">
          <span className="text-slate-500">Role:</span> <span className="text-emerald-400 font-semibold">Police Officer</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {/* Accessibility Menu */}
        <div className="relative">
          <button
            onClick={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
            className={`p-2 rounded-lg transition-colors ${isAccessibilityOpen ? 'bg-brand-blue text-white' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
            title="Accessibility Options (WCAG 2.1)"
          >
            <Eye className="w-5 h-5" />
          </button>

          {isAccessibilityOpen && (
            <div className="absolute right-0 top-12 w-72 bg-white border border-slate-200 rounded-lg shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200">
              <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 rounded-t-lg">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-brand-blue" />
                  Accessibility
                </h3>
                <button onClick={() => setIsAccessibilityOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-2">
                <div className="space-y-1">
                  <button
                    onClick={() => toggleSetting('textToSpeech')}
                    className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-md transition-colors"
                  >
                    <div className="text-left">
                      <span className="block text-sm font-medium text-slate-900">Text to Speech</span>
                      <span className="block text-xs text-slate-500">Read transcript aloud</span>
                    </div>
                    <div className={`w-10 h-6 rounded-full relative transition-colors ${accessibilitySettings.textToSpeech ? 'bg-brand-blue' : 'bg-slate-200'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${accessibilitySettings.textToSpeech ? 'left-5' : 'left-1'}`} />
                    </div>
                  </button>

                  <button
                    onClick={() => toggleSetting('colourblindMode')}
                    className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-md transition-colors"
                  >
                    <div className="text-left">
                      <span className="block text-sm font-medium text-slate-900">Colourblind Mode</span>
                      <span className="block text-xs text-slate-500">High distinction palette</span>
                    </div>
                    <div className={`w-10 h-6 rounded-full relative transition-colors ${accessibilitySettings.colourblindMode ? 'bg-brand-blue' : 'bg-slate-200'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${accessibilitySettings.colourblindMode ? 'left-5' : 'left-1'}`} />
                    </div>
                  </button>

                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-md transition-colors"
                  >
                    <div className="text-left">
                      <span className="block text-sm font-medium text-slate-900">High Contrast</span>
                      <span className="block text-xs text-slate-500">Increase visual contrast</span>
                    </div>
                    <div className={`w-10 h-6 rounded-full relative transition-colors ${accessibilitySettings.highContrast ? 'bg-brand-blue' : 'bg-slate-200'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${accessibilitySettings.highContrast ? 'left-5' : 'left-1'}`} />
                    </div>
                  </button>

                  <button
                    onClick={() => toggleSetting('largeText')}
                    className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-md transition-colors"
                  >
                    <div className="text-left">
                      <span className="block text-sm font-medium text-slate-900">Large Text</span>
                      <span className="block text-xs text-slate-500">Increase font size</span>
                    </div>
                    <div className={`w-10 h-6 rounded-full relative transition-colors ${accessibilitySettings.largeText ? 'bg-brand-blue' : 'bg-slate-200'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${accessibilitySettings.largeText ? 'left-5' : 'left-1'}`} />
                    </div>
                  </button>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border-t border-slate-200 rounded-b-lg text-xs text-center text-slate-500">
                WCAG 2.1 Compliant
              </div>
            </div>
          )}
        </div>

        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
          <div className="text-right">
            <div className="text-sm text-white font-medium">Shing Hei Hon</div>
            <div className="text-xs text-slate-400">Badge #4521</div>
          </div>
          <button className="p-2 bg-slate-700 rounded-full text-slate-300 hover:text-white transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-red-400 transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;