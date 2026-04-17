import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, BookOpen, Filter, ArrowRight, Clock, User, Heart, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = [
  { id: 'all', name: 'All Resources' },
  { id: 'dementia', name: 'Dementia Care' },
  { id: 'medication', name: 'Medication Info' },
  { id: 'wellbeing', name: 'Caregiver Wellbeing' },
  { id: 'legal', name: 'Legal & Planning' },
];

const articles = [
  {
    id: 1,
    category: 'dementia',
    title: 'Understanding Behavioral Changes in Dementia',
    excerpt: 'Learn about the common triggers for agitation and aggression in residents with cognitive decline and how to manage them effectively.',
    author: 'Dr. Elena Rodriguez',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1581056310664-3d4d74630ff9?auto=format&fit=crop&q=80&w=800',
    date: 'March 15, 2026',
  },
  {
    id: 2,
    category: 'medication',
    title: 'The Role of Psychotropic Medications in SNFs',
    excerpt: 'A comprehensive guide to the benefits and risks of psychotropic medications and the importance of gradual dose reduction.',
    author: 'Dr. Sarah Mitchell',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800',
    date: 'March 10, 2026',
  },
  {
    id: 3,
    category: 'wellbeing',
    title: 'Preventing Caregiver Burnout: Strategies for Families',
    excerpt: 'Taking care of a loved one in long-term care can be emotionally taxing. Discover practical ways to maintain your own mental health.',
    author: 'James Wilson, LCSW',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800',
    date: 'March 5, 2026',
  },
  {
    id: 4,
    category: 'legal',
    title: 'Navigating Medicare for Behavioral Health Services',
    excerpt: 'Understanding what services are covered under Medicare Part B and how to ensure your loved one receives the care they need.',
    author: 'Clinical Admin Team',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    date: 'February 28, 2026',
  },
];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = articles.filter(
    (article) =>
      (activeCategory === 'all' || article.category === activeCategory) &&
      (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-white via-brand-accent/40 to-brand-accent/60">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-brand-secondary/5 blur-2xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-border text-brand-primary-text text-xs font-semibold uppercase tracking-widest mb-6">
              <BookOpen size={14} />
              <span>Caregiver Resource Library</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-semibold text-brand-ink leading-[1.2] mb-5">
              Knowledge for Better Care
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl">
              Empowering families and caregivers with expert insights, practical guides, and clinical expertise to navigate the journey of behavioral health care.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for articles, guides..."
                className="w-full bg-white border border-brand-border rounded-full py-4 pl-14 pr-6 shadow-sm focus:ring-2 focus:ring-brand-primary transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40 glass">
        <div className="container-custom flex items-center gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
          <div className="flex items-center gap-2 text-brand-primary-text font-bold text-sm uppercase tracking-widest mr-4 shrink-0">
            <Filter size={18} />
            <span>Filter</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold transition-all shrink-0",
                activeCategory === cat.id
                  ? "bg-brand-primary text-brand-primary-content shadow-md"
                  : "bg-brand-paper text-brand-primary-text hover:bg-brand-accent"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group flex flex-col bg-brand-paper rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md text-brand-primary-text text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mb-4">
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-brand-primary-text mb-3 group-hover:text-brand-secondary transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-brand-accent/30 flex items-center justify-between">
                      <span className="text-xs text-gray-400 font-medium">{article.date}</span>
                      <button className="text-brand-primary-text font-bold text-sm flex items-center gap-2 group/btn">
                        Read Article
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-32">
              <div className="w-20 h-20 bg-brand-paper rounded-full flex items-center justify-center text-brand-accent mx-auto mb-6">
                <Search size={40} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-brand-primary-text mb-2">No resources found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We couldn't find any articles matching your search criteria. Try using different keywords or categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Resource Section */}
      <section className="section-padding bg-brand-paper">
        <div className="container-custom">
          <div className="bg-brand-primary rounded-2xl p-10 md:p-16 text-brand-primary-content relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200"
                alt="Featured Resource"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-8">
                <Heart size={16} />
                <span>Featured Guide</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 leading-tight">
                The Essential Caregiver's Handbook for Memory Care
              </h2>
              <p className="text-brand-accent/70 text-lg mb-10 leading-relaxed">
                A comprehensive 50-page guide covering everything from communication techniques to legal planning and self-care for families of residents in memory care.
              </p>
              <button className="bg-white text-brand-primary-text px-10 py-4 rounded-full font-bold hover:bg-brand-accent transition-all shadow-xl hover:shadow-2xl flex items-center gap-3">
                Download Free Guide
                <ShieldCheck size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
