import React, { useState, useEffect } from 'react';
import { Play, Square, Timer as TimerIcon } from 'lucide-react';
import { Section } from '../types';

export const Timer = ({ onStop, activeSection, setActiveSection }) => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = (section) => {
    setActiveSection(section);
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    const minutes = Math.floor(seconds / 60);
    if (minutes > 0) {
      onStop(minutes, activeSection);
    }
    setSeconds(0);
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-stone-900 border border-stone-800 relative overflow-hidden shadow-2xl">
      {/* Decorative Glow */}
      {isActive && <div className="absolute top-0 left-0 w-full h-1 bg-gold-500 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>}

      <div className="p-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-stone-500 mb-1">Session Control</h2>
            <div className={`text-xl font-bold font-script transition-colors ${isActive ? 'text-gold-400' : 'text-stone-300'}`}>
              {isActive ? 'Tracking Active' : 'Standby Mode'}
            </div>
          </div>
          <div className={`p-2 rounded-full border ${isActive ? 'bg-gold-500/10 border-gold-500/50 text-gold-500' : 'bg-stone-800 border-stone-700 text-stone-600'}`}>
            <TimerIcon size={20} />
          </div>
        </div>

        <div className="text-center py-8 bg-black/40 border border-stone-800/50 rounded-sm mb-8 relative">
          <div className="text-5xl md:text-6xl font-mono text-stone-100 font-bold tracking-widest tabular-nums relative z-10 text-shadow">
            {formatTime(seconds)}
          </div>
          {isActive ? (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-gold-500/20 text-gold-400 text-[10px] font-black uppercase tracking-[0.2em] border border-gold-500/30 rounded-sm">
               <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse"></div>
               {activeSection === Section.A ? 'Section A' : 'Section B'}
            </div>
          ) : (
            <div className="mt-4 text-stone-600 text-[10px] uppercase tracking-[0.2em] font-bold">
              Timer Inactive
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {!isActive ? (
            <>
              <button
                onClick={() => handleStart(Section.B)}
                className="group relative overflow-hidden bg-stone-100 hover:bg-white text-stone-950 py-4 px-2 text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 w-1 bg-gold-500 transition-all group-hover:w-full opacity-10"></div>
                <Play size={14} fill="currentColor" /> 
                <span className="relative z-10">Sec B (CS)</span>
              </button>
              <button
                onClick={() => handleStart(Section.A)}
                className="group bg-transparent text-stone-400 border border-stone-700 hover:border-gold-500/50 hover:text-gold-400 py-4 px-2 text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                 <Play size={14} fill="currentColor" /> 
                 <span>Sec A (Apt)</span>
              </button>
            </>
          ) : (
            <button
              onClick={handleStop}
              className="col-span-full bg-gold-600 hover:bg-gold-500 text-black py-4 px-4 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,119,6,0.2)]"
            >
              <Square size={14} fill="currentColor" /> 
              Stop & Log
            </button>
          )}
        </div>
      </div>
    </div>
  );
};