import React, { useState, useMemo } from 'react';
import { Youtube, Check, AlertTriangle, Zap, Target, ArrowRight, LayoutDashboard, CalendarDays, BookOpenText } from 'lucide-react';
import { Timer } from './components/Timer';
import { TOPICS, SCHEDULE } from './constants';
import { Section } from './types';

// Tab Constants
const VIEW_DASHBOARD = 'Dashboard';
const VIEW_SCHEDULE = 'Schedule';
const VIEW_SYLLABUS = 'Syllabus';

export default function App() {
  const [activeView, setActiveView] = useState(VIEW_DASHBOARD);
  const [completedTopicIds, setCompletedTopicIds] = useState(new Set(['b-cprog']));
  const [logs, setLogs] = useState([]);
  const [activeTimerSection, setActiveTimerSection] = useState(Section.B);

  const toggleTopic = (id) => {
    const newSet = new Set(completedTopicIds);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setCompletedTopicIds(newSet);
  };

  const handleTimerStop = (minutes, section) => {
    const todayStr = new Date().toDateString();
    setLogs(prev => {
      const existing = prev.find(l => l.date === todayStr);
      if (existing) {
        return prev.map(l => l.date === todayStr ? {
          ...l,
          minutesSectionA: section === Section.A ? l.minutesSectionA + minutes : l.minutesSectionA,
          minutesSectionB: section === Section.B ? l.minutesSectionB + minutes : l.minutesSectionB
        } : l);
      }
      return [...prev, {
        date: todayStr,
        minutesSectionA: section === Section.A ? minutes : 0,
        minutesSectionB: section === Section.B ? minutes : 0
      }];
    });
  };

  const todayDateObj = new Date();
  
  const scheduleDay = useMemo(() => {
     const day = todayDateObj.getDate();
     const month = todayDateObj.toLocaleString('default', { month: 'short' });
     const formatted = `${day.toString().padStart(2, '0')} ${month}`;
     return SCHEDULE.find(s => s.date === formatted) || SCHEDULE[0];
  }, [todayDateObj]);

  const getTopicById = (id) => TOPICS.find(t => t.id === id);

  const stats = useMemo(() => {
    const totalA = TOPICS.filter(t => t.section === Section.A).length;
    const totalB = TOPICS.filter(t => t.section === Section.B).length;
    const doneA = TOPICS.filter(t => t.section === Section.A && completedTopicIds.has(t.id)).length;
    const doneB = TOPICS.filter(t => t.section === Section.B && completedTopicIds.has(t.id)).length;
    
    // Calculate Days Left
    const examDate = new Date('2024-12-31'); // Assuming End Year
    const diffTime = Math.abs(examDate.getTime() - todayDateObj.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    return {
      percentA: totalA ? Math.round((doneA / totalA) * 100) : 0,
      percentB: totalB ? Math.round((doneB / totalB) * 100) : 0,
      daysLeft: Math.max(0, 31 - todayDateObj.getDate()) // Simple approx for Dec
    };
  }, [completedTopicIds, todayDateObj]);

  // --- COMPONENT: STAT CARD ---
  const StatCard = ({ label, value, sub, colorClass = "text-stone-100" }) => (
    <div className="bg-stone-900 p-6 border border-stone-800 flex flex-col justify-between h-32 hover:border-stone-700 transition-colors">
      <div className="text-[10px] font-black text-stone-500 uppercase tracking-widest">{label}</div>
      <div className="flex items-baseline gap-2">
         <div className={`text-4xl font-black ${colorClass}`}>{value}</div>
         {sub && <div className="text-xs font-bold text-stone-500">{sub}</div>}
      </div>
      <div className="h-1 w-full bg-stone-800 mt-auto rounded-full overflow-hidden">
        {typeof value === 'string' && value.includes('%') && (
           <div className="h-full bg-gold-600" style={{width: value}}></div>
        )}
      </div>
    </div>
  );

  // --- VIEW: DASHBOARD ---
  const renderDashboard = () => {
    const topicB = getTopicById(scheduleDay.topicBId);
    const topicA = getTopicById(scheduleDay.topicAId);
    const isBreak = scheduleDay.isBreak;

    const totalEstimatedMinutes = (topicB ? topicB.estimatedMinutes : 0) + (topicA ? topicA.estimatedMinutes : 0);
    const isHeavyDay = totalEstimatedMinutes > 360;

    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        {/* TOP STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
           <StatCard label="Exam Countdown" value="31 DEC" sub="Target Date" />
           <StatCard label="Section B (CS)" value={`${stats.percentB}%`} sub="Completion" colorClass="text-gold-400" />
           <StatCard label="Section A (Apt)" value={`${stats.percentA}%`} sub="Completion" />
           <div className="bg-stone-900 border border-stone-800 p-6 flex flex-col justify-center items-center text-center">
              <span className="text-gold-500 font-script text-2xl mb-1">Rank Goal</span>
              <span className="text-4xl font-black text-white tracking-tighter">{'<'}400</span>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: TIMER & FOCUS */}
          <div className="lg:col-span-4 space-y-6">
             <Timer 
                onStop={handleTimerStop}
                activeSection={activeTimerSection}
                setActiveSection={setActiveTimerSection}
             />
             
             {/* Daily Priority Note */}
             <div className="bg-gradient-to-br from-stone-900 to-stone-950 p-8 border border-stone-800/60 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Zap size={100} className="text-gold-500" />
                </div>
                <div className="relative z-10">
                   <p className="text-[10px] text-gold-500 font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                     <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></span>
                     Strategic Focus
                   </p>
                   <p className="text-2xl font-script text-stone-200 leading-relaxed">"{scheduleDay.priorityNote}"</p>
                </div>
             </div>
          </div>

          {/* RIGHT: TASKS */}
          <div className="lg:col-span-8 space-y-6">
             <div className="flex items-center justify-between">
                <div>
                   <h2 className="text-3xl font-bold text-white tracking-tight">{scheduleDay.date}</h2>
                   <p className="text-stone-500 text-sm uppercase tracking-widest font-bold">{scheduleDay.dayOfWeek}</p>
                </div>
                {isHeavyDay && (
                   <div className="flex items-center gap-3 px-4 py-2 border border-gold-500/30 bg-gold-500/5 text-gold-400 rounded-sm">
                      <AlertTriangle size={16} />
                      <div className="text-right">
                         <div className="text-[10px] font-black uppercase tracking-wider">Load Alert</div>
                         <div className="text-xs font-bold">Overtime Recommended</div>
                      </div>
                   </div>
                )}
             </div>

             {isBreak ? (
                <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-stone-800 bg-stone-900/50 rounded-sm">
                   <p className="font-script text-4xl text-stone-600 mb-2">Rest & Recovery</p>
                   <p className="text-xs uppercase tracking-widest text-stone-500 font-bold">No active operations</p>
                </div>
             ) : (
                <div className="grid gap-4">
                   {[topicB, topicA].map((topic) => topic && (
                      <div key={topic.id} className={`group relative bg-stone-900 border border-stone-800 p-6 transition-all duration-300 hover:border-gold-500/30`}>
                         {completedTopicIds.has(topic.id) && (
                            <div className="absolute inset-0 bg-stone-950/80 z-10 flex items-center justify-center backdrop-blur-[1px]">
                               <div className="bg-stone-900 border border-gold-500/30 px-4 py-2 flex items-center gap-2">
                                  <Check size={16} className="text-gold-500" />
                                  <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Completed</span>
                               </div>
                            </div>
                         )}
                         <div className="flex justify-between items-start mb-4">
                            <div>
                               <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest block mb-1">
                                  {topic.section === Section.B ? 'First Priority' : 'Second Priority'}
                               </span>
                               <h3 className="text-xl font-bold text-stone-100 group-hover:text-gold-400 transition-colors">
                                  {topic.name}
                               </h3>
                            </div>
                            <span className="text-xs font-bold text-stone-400 bg-stone-800 px-2 py-1 rounded-sm">
                               {topic.estimatedMinutes} min
                            </span>
                         </div>
                         
                         <p className="text-sm text-stone-400 mb-6 border-l-2 border-stone-800 pl-4 group-hover:border-gold-500/30 transition-colors">
                            {topic.subtopics}
                         </p>

                         <div className="flex items-center gap-4">
                            <button 
                               onClick={() => toggleTopic(topic.id)}
                               className="flex-1 bg-stone-800 hover:bg-stone-700 text-stone-300 py-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                            >
                               <Check size={14} /> Mark Done
                            </button>
                            <a 
                               href={topic.videoLink} 
                               target="_blank" 
                               rel="noreferrer"
                               className="flex-1 bg-gold-600 hover:bg-gold-500 text-black py-3 text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                            >
                               <Youtube size={14} /> Study Resource
                            </a>
                         </div>
                      </div>
                   ))}
                </div>
             )}
          </div>
        </div>
      </div>
    );
  };

  // --- VIEW: SCHEDULE ---
  const renderSchedule = () => (
    <div className="max-w-3xl mx-auto py-8">
       <h2 className="text-center font-script text-5xl text-stone-200 mb-12">Flight Path</h2>
       
       <div className="relative border-l border-stone-800 ml-6 space-y-12 pb-12">
          {SCHEDULE.map((day, idx) => (
             <div key={idx} className="relative pl-12 group">
                {/* Timeline Node */}
                <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ring-4 ring-stone-950 transition-colors ${day.isBreak ? 'bg-stone-700' : 'bg-gold-600 group-hover:bg-gold-400'}`}></div>
                
                <div className="flex flex-col md:flex-row gap-6">
                   <div className="w-24 flex-shrink-0">
                      <div className="text-2xl font-bold text-stone-300 group-hover:text-white transition-colors">{day.date}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-stone-600 group-hover:text-gold-500 transition-colors">{day.dayOfWeek}</div>
                   </div>

                   {day.isBreak ? (
                      <div className="flex-grow p-4 border border-dashed border-stone-800 bg-stone-900/30">
                         <span className="font-script text-xl text-stone-500">Rest Day</span>
                      </div>
                   ) : (
                      <div className="flex-grow space-y-2">
                         <div className="flex items-center justify-between p-3 bg-stone-900 border border-stone-800 hover:border-gold-500/20 transition-colors">
                            <div className="flex flex-col">
                               <span className="text-[10px] text-stone-500 uppercase tracking-widest">Section B</span>
                               <span className="font-bold text-stone-300">{getTopicById(day.topicBId)?.name}</span>
                            </div>
                         </div>
                         <div className="flex items-center justify-between p-3 bg-stone-900 border border-stone-800 hover:border-gold-500/20 transition-colors">
                            <div className="flex flex-col">
                               <span className="text-[10px] text-stone-500 uppercase tracking-widest">Section A</span>
                               <span className="font-bold text-stone-300">{getTopicById(day.topicAId)?.name}</span>
                            </div>
                         </div>
                      </div>
                   )}
                </div>
             </div>
          ))}
       </div>
    </div>
  );

  // --- VIEW: SYLLABUS ---
  const renderSyllabus = () => {
    const sectionB = TOPICS.filter(t => t.section === Section.B);
    const sectionA = TOPICS.filter(t => t.section === Section.A);

    const TopicRow = ({ topic }) => (
       <div className="group flex items-start gap-4 p-4 border-b border-stone-800 hover:bg-stone-900/50 transition-colors">
          <button 
             onClick={() => toggleTopic(topic.id)}
             className={`mt-1 w-5 h-5 flex items-center justify-center border transition-all ${completedTopicIds.has(topic.id) ? 'bg-gold-600 border-gold-600 text-black' : 'border-stone-700 text-transparent hover:border-gold-500'}`}
          >
             <Check size={12} strokeWidth={4} />
          </button>
          <div className="flex-grow">
             <div className="flex justify-between items-baseline mb-1">
                <h4 className={`text-base font-bold transition-colors ${completedTopicIds.has(topic.id) ? 'text-stone-600 line-through' : 'text-stone-200 group-hover:text-gold-400'}`}>
                   {topic.name}
                </h4>
                <span className="text-xs font-mono text-stone-600">{topic.estimatedMinutes}m</span>
             </div>
             <p className="text-xs text-stone-500 leading-relaxed mb-2">{topic.subtopics}</p>
             <a href={topic.videoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-stone-600 hover:text-white transition-colors">
                <Youtube size={12} /> Resource Link
             </a>
          </div>
       </div>
    );

    return (
       <div className="grid md:grid-cols-2 gap-12 animate-in fade-in">
          <div>
             <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-800">
                <h3 className="text-3xl font-script text-gold-500">Computer Science</h3>
                <span className="text-[10px] font-black text-stone-600 bg-stone-900 px-2 py-1 uppercase tracking-widest">Section B</span>
             </div>
             <div className="border border-stone-800 bg-stone-900/20">
                {sectionB.map(t => <TopicRow key={t.id} topic={t} />)}
             </div>
          </div>
          <div>
             <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-800">
                <h3 className="text-3xl font-script text-gold-500">Aptitude & Verbal</h3>
                <span className="text-[10px] font-black text-stone-600 bg-stone-900 px-2 py-1 uppercase tracking-widest">Section A</span>
             </div>
             <div className="border border-stone-800 bg-stone-900/20">
                {sectionA.map(t => <TopicRow key={t.id} topic={t} />)}
             </div>
          </div>
       </div>
    );
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-gold-600 selection:text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800">
         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-gold-600 flex items-center justify-center font-black text-black text-xl rounded-sm">
                  C
               </div>
               <div>
                  <h1 className="text-lg font-bold tracking-tight text-white leading-none">C-CAT<span className="text-stone-600">.STRATEGY</span></h1>
                  <p className="text-[10px] text-gold-500 uppercase tracking-widest font-black">Rank {'<'} 400 Protocol</p>
               </div>
            </div>

            <div className="flex bg-stone-900 p-1 rounded-sm border border-stone-800">
               {[
                 { id: VIEW_DASHBOARD, icon: LayoutDashboard },
                 { id: VIEW_SCHEDULE, icon: CalendarDays },
                 { id: VIEW_SYLLABUS, icon: BookOpenText }
               ].map(view => (
                 <button
                   key={view.id}
                   onClick={() => setActiveView(view.id)}
                   className={`px-4 py-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all rounded-sm ${
                      activeView === view.id 
                      ? 'bg-stone-800 text-white shadow-sm' 
                      : 'text-stone-500 hover:text-stone-300'
                   }`}
                 >
                   <view.icon size={14} />
                   <span className="hidden md:inline">{view.id}</span>
                 </button>
               ))}
            </div>
         </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
         {activeView === VIEW_DASHBOARD && renderDashboard()}
         {activeView === VIEW_SCHEDULE && renderSchedule()}
         {activeView === VIEW_SYLLABUS && renderSyllabus()}
      </main>
    </div>
  );
}