import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Clock, CheckCircle2, Lock, Search, LayoutDashboard, BookOpen, Video, Settings, LogOut, ChevronRight, Star, Award, X } from 'lucide-react';
import { cn } from '../lib/utils';

const sidebarLinks = [
  { name: 'Dashboard', icon: LayoutDashboard, active: true },
  { name: 'Core Modules', icon: BookOpen },
  { name: 'Video Library', icon: Video },
  { name: 'Certifications', icon: Award },
  { name: 'Settings', icon: Settings },
];

const modules = [
  {
    id: 1,
    title: 'Dementia Care Fundamentals',
    duration: '45 min',
    lessons: 12,
    progress: 100,
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1581056310664-3d4d74630ff9?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    title: 'Psychotropic Medication Safety',
    duration: '60 min',
    lessons: 8,
    progress: 45,
    status: 'in-progress',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 3,
    title: 'De-escalation Techniques',
    duration: '30 min',
    lessons: 6,
    progress: 0,
    status: 'locked',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    videoUrl: '',
  },
  {
    id: 4,
    title: 'CMS Compliance & F-Tag 758',
    duration: '90 min',
    lessons: 15,
    progress: 0,
    status: 'locked',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    videoUrl: '',
  },
];

export default function Portal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [selectedModule, setSelectedModule] = useState<typeof modules[0] | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'healthalliance2024') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid facility access code. Please contact your administrator.');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-brand-accent/30 flex items-center justify-center p-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-md w-full text-center border border-brand-border"
        >
          <div className="w-16 h-16 bg-brand-accent rounded-lg flex items-center justify-center text-brand-primary-text mx-auto mb-6 border border-brand-border shadow-sm">
            <Lock size={28} />
          </div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-brand-primary-text mb-3">Facility Education Portal</h1>
          <p className="text-sm text-gray-500 mb-8">Please enter your facility's access code to continue.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Access Code"
                className="w-full bg-brand-accent border border-brand-border rounded-lg py-3 px-4 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-center font-bold tracking-widest text-lg"
              />
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-xs font-bold uppercase tracking-wider"
              >
                {error}
              </motion.p>
            )}
            <button
              type="submit"
              className="btn-primary w-full py-3.5"
            >
              Access Portal
            </button>
          </form>
          
          <p className="mt-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Authorized facility personnel only. All access is monitored and logged.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-brand-accent/10 pt-16">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-brand-border p-6 sticky top-16 h-[calc(100vh-64px)]">
        <div className="flex flex-col gap-1.5 flex-grow">
          {sidebarLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => setActiveTab(link.name)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all group uppercase tracking-wider",
                activeTab === link.name
                  ? "bg-brand-primary text-brand-primary-content shadow-sm"
                  : "text-gray-500 hover:bg-brand-accent hover:text-brand-primary-text"
              )}
            >
              <link.icon size={18} />
              <span>{link.name}</span>
              {activeTab === link.name && <ChevronRight size={14} className="ml-auto" />}
            </button>
          ))}
        </div>
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold text-red-600 hover:bg-red-50 transition-all mt-auto uppercase tracking-wider"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl font-serif font-bold text-brand-primary-text mb-1">Welcome back, Sarah</h1>
              <p className="text-sm text-gray-500">You've completed 45% of your current training module.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search modules..."
                  className="bg-white border border-brand-border rounded-lg py-2.5 pl-10 pr-4 shadow-sm focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-sm w-56"
                />
              </div>
              <button className="w-10 h-10 bg-white border border-brand-border rounded-lg flex items-center justify-center text-brand-primary-text shadow-sm hover:bg-brand-accent transition-all relative">
                <Star size={18} />
                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-secondary rounded-full" />
              </button>
            </div>
          </header>

          {/* Featured Module */}
          <section className="mb-12">
            <div className="bg-brand-primary rounded-xl overflow-hidden shadow-lg relative group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 text-white relative z-10">
                  <div className="badge-practical bg-white/10 text-brand-accent border-white/10 mb-6">
                    <Play size={14} fill="currentColor" />
                    <span>Continue Watching</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 leading-tight">
                    Psychotropic Medication Safety & GDR Protocols
                  </h2>
                  <div className="flex items-center gap-6 mb-8 text-brand-accent/70 text-xs font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>60 min total</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} />
                      <span>8 Lessons</span>
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                      <span>Module Progress</span>
                      <span>45%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '45%' }}
                        className="h-full bg-brand-secondary"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedModule(modules[1])}
                    className="btn-secondary bg-white border-transparent text-brand-primary-text hover:bg-brand-accent"
                  >
                    Resume Lesson
                    <ChevronRight size={20} />
                  </button>
                </div>
                <div className="relative aspect-video lg:aspect-auto cursor-pointer" onClick={() => setSelectedModule(modules[1])}>
                  <img
                    src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1200"
                    alt="Featured Module"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-primary-text shadow-xl transform group-hover:scale-105 transition-transform">
                      <Play size={28} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Modules Grid */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-serif font-bold text-brand-primary-text">Core Training Modules</h3>
              <button className="text-brand-primary-text font-bold text-xs flex items-center gap-1.5 hover:text-brand-secondary transition-colors uppercase tracking-widest">
                View All
                <ChevronRight size={14} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((module) => (
                <motion.div
                  key={module.id}
                  whileHover={{ y: -5 }}
                  onClick={() => module.status !== 'locked' && setSelectedModule(module)}
                  className={cn(
                    "card-practical p-0 overflow-hidden flex flex-col group",
                    module.status !== 'locked' ? "cursor-pointer" : "cursor-not-allowed opacity-80"
                  )}
                >
                  <div className="aspect-video relative overflow-hidden border-b border-brand-border">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0" />
                    {module.status === 'locked' && (
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center text-white">
                        <Lock size={20} />
                      </div>
                    )}
                    {module.status === 'completed' && (
                      <div className="absolute top-3 right-3 w-7 h-7 bg-brand-secondary text-white rounded-full flex items-center justify-center shadow-md border border-white/20">
                        <CheckCircle2 size={16} />
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-base font-serif font-bold text-brand-primary-text mb-3 leading-tight group-hover:text-brand-secondary transition-colors">
                      {module.title}
                    </h4>
                    <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-5">
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BookOpen size={12} />
                        <span>{module.lessons} Lessons</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                        <span>Progress</span>
                        <span>{module.progress}%</span>
                      </div>
                      <div className="h-1 bg-brand-accent rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${module.progress}%` }}
                          className="h-full bg-brand-secondary"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certification Banner */}
          <section className="mt-12">
            <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-brand-border shadow-sm">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-brand-accent rounded-lg flex items-center justify-center text-brand-primary-text shadow-sm border border-brand-border">
                  <Award size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-brand-primary-text mb-0.5">Earn Your Certification</h3>
                  <p className="text-gray-500 text-xs">Complete all core modules to receive your Behavioral Health Excellence Certificate.</p>
                </div>
              </div>
              <button className="btn-outline py-2.5 px-6 text-xs">
                View Requirements
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Video Player Modal */}
      <AnimatePresence>
        {selectedModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-brand-primary/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="bg-white rounded-xl overflow-hidden w-full max-w-5xl shadow-2xl relative border border-brand-border"
            >
              <button 
                onClick={() => setSelectedModule(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-brand-primary-text transition-all z-10"
              >
                <X size={20} />
              </button>
              
              <div className="aspect-video bg-black relative">
                <video 
                  src={selectedModule.videoUrl} 
                  controls 
                  autoPlay 
                  className="w-full h-full"
                />
              </div>
              
              <div className="p-6 md:p-10 bg-white border-t border-brand-border">
                <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-brand-primary-text mb-1">{selectedModule.title}</h2>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Module {selectedModule.id} • Lesson 1 of {selectedModule.lessons}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="btn-primary py-2.5 px-6 text-xs">
                      Mark as Complete
                    </button>
                  </div>
                </div>
                <div className="h-1 bg-brand-accent rounded-full overflow-hidden">
                  <div className="h-full bg-brand-secondary w-1/3" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
