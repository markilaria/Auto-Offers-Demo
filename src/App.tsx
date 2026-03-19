/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { STAGES, BENEFITS, EXEMPLAR_APP } from './constants';

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const LucideIcon = (LucideIcons as any)[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} />;
};

const ApplicationForm = ({ stageIndex }: { stageIndex: number }) => {
  const isStage = (idx: number) => stageIndex === idx;
  
  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-full bg-white/80 backdrop-blur-md border border-slate-200 rounded-[2rem] p-4 shadow-xl relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
        <div className={`transition-all duration-500 ${isStage(0) ? 'scale-105 origin-left' : ''}`}>
          <h3 className="text-[8px] font-black uppercase tracking-[0.4em] brand-teal mb-0.5">Application ID</h3>
          <p className={`text-base font-bold tracking-tight transition-colors ${isStage(0) ? 'brand-teal' : 'text-slate-900'}`}>{EXEMPLAR_APP.id}</p>
        </div>
        <div className={`px-2 py-0.5 rounded-full border transition-all duration-500 ${stageIndex >= 3 ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-teal-500/5 border-teal-500/10'}`}>
          <span className={`text-[8px] font-black uppercase tracking-widest transition-colors ${stageIndex >= 3 ? 'text-emerald-600' : 'brand-teal'}`}>
            {stageIndex === 4 ? 'Offer Released' : stageIndex === 3 ? 'Verified' : 'Submitted'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Application Overview */}
        <div className={`space-y-1.5 p-2.5 rounded-xl border transition-all duration-500 ${isStage(0) ? 'bg-teal-500/5 border-teal-500/20 ring-1 ring-teal-500/10' : 'bg-slate-50 border-slate-100'}`}>
          <div className="flex items-center gap-2 mb-0.5">
            <label className={`text-[8px] font-black uppercase tracking-widest ${isStage(0) ? 'brand-teal' : 'text-slate-400'}`}>Application Overview</label>
          </div>
          <div className="grid grid-cols-1 gap-1">
            <div>
              <p className="text-[8px] text-slate-400 uppercase font-bold">Applied Course</p>
              <p className={`text-[11px] font-bold truncate ${isStage(0) ? 'text-slate-900' : 'text-slate-600'}`}>{EXEMPLAR_APP.course}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-[8px] text-slate-400 uppercase font-bold">Intake</p>
                <p className={`text-[11px] font-bold ${isStage(0) ? 'text-slate-900' : 'text-slate-600'}`}>{EXEMPLAR_APP.intake}</p>
              </div>
              <div>
                <p className="text-[8px] text-slate-400 uppercase font-bold">Cohort</p>
                <p className={`text-[11px] font-bold ${isStage(0) ? 'text-slate-900' : 'text-slate-600'}`}>{EXEMPLAR_APP.cohort}</p>
              </div>
            </div>
            <div>
              <p className="text-[8px] text-slate-400 uppercase font-bold">Duplicate ID Flag</p>
              <p className={`text-[11px] font-bold ${EXEMPLAR_APP.duplicateFlag === 'None Found' ? 'text-emerald-600' : 'text-amber-600'}`}>{EXEMPLAR_APP.duplicateFlag}</p>
            </div>
          </div>
        </div>

        {/* Applicant Details */}
        <div className={`space-y-1.5 p-2.5 rounded-xl border transition-all duration-500 ${isStage(1) ? 'bg-teal-500/5 border-teal-500/20 ring-1 ring-teal-500/10' : 'bg-slate-50 border-slate-100'}`}>
          <div className="flex items-center gap-2 mb-0.5">
            <label className={`text-[8px] font-black uppercase tracking-widest ${isStage(1) ? 'brand-teal' : 'text-slate-400'}`}>Applicant Details</label>
          </div>
          <div className="grid grid-cols-1 gap-1">
            <div>
              <p className="text-[8px] text-slate-400 uppercase font-bold">Full Name</p>
              <p className={`text-[11px] font-bold ${isStage(1) ? 'text-slate-900' : 'text-slate-600'}`}>{EXEMPLAR_APP.name}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-[8px] text-slate-400 uppercase font-bold">DOB</p>
                <p className={`text-[11px] font-bold ${isStage(1) ? 'text-slate-900' : 'text-slate-600'}`}>{EXEMPLAR_APP.dob}</p>
              </div>
              <div>
                <p className="text-[8px] text-slate-400 uppercase font-bold">Residency</p>
                <p className={`text-[11px] font-bold ${isStage(1) ? 'text-slate-900' : 'text-slate-600'}`}>{EXEMPLAR_APP.residency}</p>
              </div>
            </div>
            <div>
              <p className="text-[8px] text-slate-400 uppercase font-bold">Address</p>
              <p className={`text-[11px] font-medium truncate ${isStage(1) ? 'text-slate-700' : 'text-slate-500'}`}>{EXEMPLAR_APP.address}</p>
            </div>
          </div>
        </div>

        {/* Educational History */}
        <div className={`col-span-2 space-y-1.5 p-2.5 rounded-xl border transition-all duration-500 ${isStage(2) ? 'bg-teal-500/5 border-teal-500/20 ring-1 ring-teal-500/10' : 'bg-slate-50 border-slate-100'}`}>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center gap-2">
              <label className={`text-[8px] font-black uppercase tracking-widest ${isStage(2) ? 'brand-teal' : 'text-slate-400'}`}>Educational History</label>
            </div>
            {isStage(2) && <span className="text-[9px] font-bold brand-teal">ATAR: {EXEMPLAR_APP.atar}</span>}
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-0.5">
              <p className="text-[7px] text-slate-400 uppercase font-bold">Year 12</p>
              <p className={`text-[10px] font-medium leading-tight ${isStage(2) ? 'text-slate-700' : 'text-slate-500'}`}>{EXEMPLAR_APP.year12}</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-[7px] text-slate-400 uppercase font-bold">VET Details</p>
              <p className={`text-[10px] font-medium leading-tight ${isStage(2) ? 'text-slate-700' : 'text-slate-500'}`}>{EXEMPLAR_APP.vet}</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-[7px] text-slate-400 uppercase font-bold">HE Details</p>
              <p className={`text-[10px] font-medium leading-tight ${isStage(2) ? 'text-slate-700' : 'text-slate-500'}`}>{EXEMPLAR_APP.he}</p>
            </div>
          </div>
          {isStage(2) && (
            <div className="mt-1.5 pt-1.5 border-t border-slate-200 grid grid-cols-4 gap-1">
              {EXEMPLAR_APP.vceResults.map((res, i) => (
                <div key={i} className="flex justify-between px-1.5 py-0.5 bg-white rounded border border-slate-100">
                  <span className="text-[7px] text-slate-400">{res.unit}</span>
                  <span className="text-[7px] font-bold brand-teal">{res.score}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Offer Details */}
        <div className={`col-span-2 space-y-1.5 p-2.5 rounded-xl border transition-all duration-500 ${isStage(3) ? 'bg-teal-500/5 border-teal-500/20 ring-1 ring-teal-500/10' : 'bg-slate-50 border-slate-100'}`}>
          <div className="flex items-center gap-2 mb-0.5">
            <label className={`text-[8px] font-black uppercase tracking-widest ${isStage(3) ? 'brand-teal' : 'text-slate-400'}`}>Offer Details</label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[8px] text-slate-400 uppercase font-bold">Offer Type</p>
              <p className={`text-[11px] font-bold ${isStage(3) ? 'text-slate-900' : 'text-slate-600'}`}>{EXEMPLAR_APP.offerType}</p>
            </div>
            <div>
              <p className="text-[8px] text-slate-400 uppercase font-bold">Liability Category</p>
              <p className={`text-[11px] font-bold ${isStage(3) ? 'text-slate-900' : 'text-slate-600'}`}>{EXEMPLAR_APP.liabilityCategory}</p>
            </div>
          </div>
        </div>
      </div>
      
      {stageIndex === 4 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-emerald-500/5 backdrop-blur-[2px] flex items-center justify-center p-4 text-center"
        >
          <div className="bg-white border border-emerald-500/20 p-4 rounded-2xl shadow-xl">
            <LucideIcons.CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-tighter mb-1">Offer Released</h4>
            <p className="text-[10px] text-slate-500">Alex has been notified of his successful application.</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const BackgroundEffect = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-400/20 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-400/20 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
    <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-pink-400/10 rounded-full blur-[100px] animate-pulse [animation-delay:4s]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px]" />
  </div>
);

export default function App() {
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(-1);

  const isIntro = currentStageIndex === -1;
  const isWrapup = currentStageIndex === STAGES.length;
  const currentStage = STAGES[currentStageIndex];

  const nextStage = () => {
    setCurrentStageIndex(prev => (prev < STAGES.length ? prev + 1 : -1));
  };

  const prevStage = () => {
    if (currentStageIndex > -1) setCurrentStageIndex(prev => prev - 1);
  };

  const progress = isIntro ? 0 : isWrapup ? 100 : ((currentStageIndex + 1) / STAGES.length) * 100;

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden font-sans text-slate-900 bg-slate-50">
      <BackgroundEffect />
      
      {/* Header */}
      <header className="h-20 flex items-center justify-between px-12 z-50 bg-white/40 backdrop-blur-xl border-b border-slate-200">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-4"
        >
          <div className="flex items-center">
            <span className="text-2xl font-black brand-teal">i</span>
            <span className="text-2xl font-black brand-purple">laria</span>
          </div>
          <div className="h-5 w-[1px] bg-slate-200 mx-4" />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Automated Admissions</span>
        </motion.div>
        
        <div className="flex items-center gap-2">
          {STAGES.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1 rounded-full transition-all duration-700 ${
                idx === currentStageIndex 
                  ? 'bg-purple-600 w-10 shadow-lg' 
                  : 'bg-slate-200 w-5'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={() => setCurrentStageIndex(-1)}
          className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 hover:brand-purple transition-colors"
        >
          Reset Engine
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden px-6 md:px-12 relative py-4">
        <div className="h-full w-full flex flex-col items-center justify-center max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
          {isIntro && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="flex flex-col items-center text-center max-w-6xl"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mb-8 relative"
              >
                <div className="absolute -inset-8 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="relative flex items-center gap-1">
                  <span className="text-7xl font-black brand-teal tracking-tighter">i</span>
                  <span className="text-7xl font-black brand-purple tracking-tighter">laria</span>
                </div>
              </motion.div>
              
              <h1 className="text-6xl md:text-7xl font-display font-black tracking-tighter brand-purple mb-6 leading-none uppercase italic">
                Automated Admissions Offers
              </h1>
              <p className="text-xl md:text-2xl brand-teal font-medium max-w-4xl leading-relaxed mb-10 px-4">
                Uplifting Higher Education and VET admissions outcomes via intelligent automation & AI
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(192, 132, 252, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={nextStage}
                className="px-12 py-5 bg-purple-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-purple-500 transition-all shadow-2xl flex items-center gap-4"
              >
                Initiate Overview <LucideIcons.ChevronRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          )}

          {currentStage && (
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center w-full max-w-7xl space-y-4"
            >
              {/* Centered Header with Icon */}
              <div className="text-center space-y-2 w-full">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="px-3 py-1 bg-teal-500/10 text-teal-600 rounded-full text-[8px] font-black uppercase tracking-[0.3em] border border-teal-500/20">
                    Phase 0{currentStageIndex + 1}
                  </span>
                  <div className="relative">
                    <div className="relative flex items-center gap-3">
                      <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center">
                        <Icon name={currentStage.icon} className="w-6 h-6 brand-purple" />
                       </div>
                      <h2 className="text-3xl font-display font-black brand-purple tracking-tighter uppercase italic leading-none">
                        {currentStage.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side-by-Side Layout: Application vs Callouts */}
              <div className="grid lg:grid-cols-2 gap-6 w-full items-start">
                {/* Left: Prominent Application Form */}
                <div className="relative">
                  <ApplicationForm stageIndex={currentStageIndex} />
                </div>

                {/* Right: Decision Callouts */}
                <div className="space-y-4">
                  <div className="p-5 bg-white/80 backdrop-blur-md rounded-[2rem] border border-slate-200 shadow-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <LucideIcons.BrainCircuit className="w-4 h-4 text-teal-600" />
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-teal-600">Automated Decision Logic</span>
                    </div>
                    <p className="text-lg brand-teal font-semibold leading-snug italic">
                      {currentStage.shortDescription}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {currentStage.detailedContent.map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 p-4 bg-white/50 border border-slate-100 rounded-[1.5rem] hover:bg-white hover:border-slate-200 shadow-sm transition-all group items-center"
                      >
                        <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors shrink-0">
                          <LucideIcons.Zap className="w-4 h-4" />
                        </div>
                        <p className="text-slate-600 text-sm font-medium leading-tight">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Centered Navigation */}
              <div className="flex items-center gap-4 w-full max-w-xs pt-2">
                <button
                  onClick={prevStage}
                  className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:brand-purple hover:border-purple-200 transition-all shadow-sm"
                >
                  <LucideIcons.ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextStage}
                  className="flex-1 py-4 bg-purple-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-purple-500 transition-all shadow-lg"
                >
                  Next Phase <LucideIcons.ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {isWrapup && (
            <motion.div
              key="wrapup"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-7xl space-y-10"
            >
              <div className="text-center space-y-4">
                <h2 className="text-6xl font-display font-black brand-purple tracking-tighter uppercase italic leading-none">
                  Digital <span className="brand-teal">Ambitions</span> Realised
                </h2>
                <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto">
                  Our Auto Offers solution has delivered meaningful benefits for multiple Victorian universities
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {BENEFITS.map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] border border-slate-200 shadow-xl text-center space-y-4 group hover:border-teal-500/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-teal-500/20 transition-colors">
                      <LucideIcons.BarChart3 className="w-6 h-6 brand-teal" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-4xl font-black text-slate-900 tracking-tighter whitespace-pre-line leading-tight">{benefit.value}</div>
                      <div className="text-[9px] font-black brand-teal uppercase tracking-[0.3em]">{benefit.title}</div>
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-6 pt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextStage}
                  className="px-12 py-5 bg-purple-600 text-white rounded-2xl font-black uppercase tracking-widest text-lg flex items-center gap-4 shadow-xl"
                >
                  <LucideIcons.RotateCcw className="w-5 h-5" />
                  Restart Engine
                </motion.button>
                <div className="text-[9px] font-black brand-teal uppercase tracking-[0.5em] opacity-40">www.ilaria.co</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
