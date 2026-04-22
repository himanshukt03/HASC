import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp, Users, Heart, Scale, AlertTriangle } from 'lucide-react';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';

// ─── Types ───────────────────────────────────────────────────────────────────

type StaffResource = {
  id: number;
  number: number;
  category: string;
  title: string;
  source: string;
  link: string;
  whyUseful: string;
  takeaways: string[];
};

type FamilyResource = {
  id: number;
  category: string;
  title: string;
  source: string;
  link: string;
  overview: string;
};

type LegalResource = FamilyResource;

// ─── Data ────────────────────────────────────────────────────────────────────

const staffResources: StaffResource[] = [
  {
    id: 1,
    number: 1,
    category: 'Polypharmacy & Medication Safety',
    title: 'Deprescribing To Reduce Medication Harms in Older Adults',
    source: 'Agency for Healthcare Research and Quality (AHRQ) — Rapid Response, 2024',
    link: 'https://effectivehealthcare.ahrq.gov/sites/default/files/related_files/mhs-IV-rapid-response-deprescribing.pdf',
    whyUseful:
      'Strong evidence summary for reducing medication-related harm in older adults and a practical anchor for facility deprescribing workflows.',
    takeaways: [
      'Flag residents on 5 or more medications, recent medication additions, falls, sedation, confusion, orthostasis, or repeated hospital transfers.',
      'Use structured medication review to identify potentially inappropriate medications and duplicate therapies.',
      'Treat deprescribing as a patient-safety process that requires monitoring, communication, and follow-up.',
    ],
  },
  {
    id: 2,
    number: 2,
    category: 'Polypharmacy & Medication Safety',
    title: 'Strategies to Reduce Polypharmacy in Older Adults',
    source: 'NCBI Bookshelf / StatPearls — clinical review, updated 2024',
    link: 'https://www.ncbi.nlm.nih.gov/books/NBK574550/',
    whyUseful:
      'Useful clinical overview for staff education on how to recognize high-risk medication combinations and why older adults are more vulnerable to adverse drug events.',
    takeaways: [
      'Look for anticholinergic burden, benzodiazepines, antipsychotics, opioids, and duplicative psychotropics.',
      'Escalate concerns when new behavioral symptoms appear after medication changes.',
      'Pair medication review with fall-risk, cognition, sleep, bowel/bladder, and pain assessment.',
    ],
  },
  {
    id: 3,
    number: 3,
    category: 'Communication',
    title: 'Talking With Your Older Patients',
    source: 'National Institute on Aging (NIA) — updated 2023',
    link: 'https://www.nia.nih.gov/health/health-care-professionals-information/talking-your-older-patients',
    whyUseful:
      'Excellent facility-facing guidance on respectful, clear, and efficient communication with older adults, including how to approach sensitive topics.',
    takeaways: [
      'Use plain language, short explanations, and a calm tone.',
      'Normalize sensitive questions using nonthreatening framing.',
      'Communication quality directly affects safety, trust, and adherence.',
    ],
  },
  {
    id: 4,
    number: 4,
    category: 'Communication in Dementia',
    title: "Communicating With Someone Who Has Alzheimer's Disease",
    source: 'National Institute on Aging (NIA) — updated 2024',
    link: 'https://www.nia.nih.gov/health/alzheimers-changes-behavior-and-communication/communicating-someone-who-has-alzheimers',
    whyUseful:
      'Readable, practical resource for frontline caregivers and staff on verbal and nonverbal communication strategies in dementia care.',
    takeaways: [
      'Reduce background noise and competing stimuli before giving directions.',
      'Use eye contact, name recognition, simple choices, and extra response time.',
      'Avoid arguing, rushing, or talking about the person as if they are not present.',
    ],
  },
  {
    id: 5,
    number: 5,
    category: 'Aggression, Agitation & Distress Behaviors',
    title: "Coping With Agitation, Aggression, and Sundowning in Alzheimer's Disease",
    source: 'National Institute on Aging (NIA) — updated 2024',
    link: 'https://www.nia.nih.gov/health/alzheimers-changes-behavior-and-communication/coping-agitation-aggression-and-sundowning',
    whyUseful:
      'Directly relevant to facilities dealing with restlessness, verbal aggression, physical aggression, and late-day behavioral escalation.',
    takeaways: [
      'Search first for triggers such as pain, infection, constipation, overstimulation, fatigue, fear, or environmental change.',
      'Use de-escalation and redirection before considering medication changes.',
      'Track timing and patterns; sundowning often worsens later in the day.',
    ],
  },
  {
    id: 6,
    number: 6,
    category: 'Distress Behaviors — Staff Training Evidence',
    title: 'Health Care Team Interventions to Reduce Distress Behaviors in Older Adults: A Systematic Review',
    source: 'Clin Gerontol / PubMed-indexed systematic review, 2024',
    link: 'https://pubmed.ncbi.nlm.nih.gov/38954524/',
    whyUseful:
      'Peer-reviewed evidence review focused on team-based interventions for distress behaviors, useful for training programs and workflow design.',
    takeaways: [
      'Staff education and team-based interventions can reduce distress behaviors in the short term.',
      'Behavior management works best when embedded into routine care, not as a one-time training.',
      'Facilities should combine education, observation, and interdisciplinary follow-up.',
    ],
  },
  {
    id: 7,
    number: 7,
    category: 'Recognizing Cognitive Change',
    title: 'Assessing Cognitive Impairment in Older Patients',
    source: 'National Institute on Aging (NIA) — quick guide, current',
    link: 'https://www.nia.nih.gov/health/health-care-professionals-information/assessing-cognitive-impairment-older-patients',
    whyUseful:
      'Helpful for staff and leadership because it frames cognitive, behavioral, and functional changes as early concerns that deserve structured assessment.',
    takeaways: [
      'Take new confusion, unsafe behaviors, functional decline, or family concerns seriously and early.',
      'Document behavioral, cognitive, and functional changes together rather than in isolation.',
      'Escalate acute changes quickly to rule out delirium, medication effects, or medical causes.',
    ],
  },
  {
    id: 8,
    number: 8,
    category: 'Psychosis-Like Symptoms in Dementia',
    title: 'Coping With Hallucinations, Delusions, and Paranoia',
    source: 'National Institute on Aging (NIA) — updated 2024',
    link: 'https://www.nia.nih.gov/health/alzheimers-changes-behavior-and-communication/alzheimers-caregiving-coping-hallucinations',
    whyUseful:
      'Useful for staff education when residents accuse others, misidentify caregivers, or appear frightened by false beliefs or perceptions.',
    takeaways: [
      'Do not argue about what is real; reassure safety first.',
      'Review illnesses and medications — medical issues and medications can worsen these symptoms.',
      'Use distraction, calm reassurance, and environmental adjustment.',
    ],
  },
  {
    id: 9,
    number: 9,
    category: 'Person-Centered Care & Environment',
    title: 'The Delivery of Person-Centered Care for People Living With Dementia in Residential Aged Care: A Systematic Review and Meta-analysis',
    source: 'Age and Ageing / PubMed-indexed review, 2024',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37144737/',
    whyUseful:
      'High-value evidence review supporting person-centered care as a core model for residents with dementia in residential settings.',
    takeaways: [
      "Behavior is often communication; knowing the person's baseline, preferences, and routines matters.",
      'Care culture, staff approach, and environment shape resident behavior.',
      'Consistent person-centered practice can improve quality of life and reduce distress.',
    ],
  },
  {
    id: 10,
    number: 10,
    category: 'Person-Centered Care & Environment',
    title: 'Home Safety',
    source: "Alzheimer's Association — current educational guidance",
    link: 'https://www.alz.org/help-support/caregiving/safety/home-safety',
    whyUseful:
      'Although written broadly, it is highly useful for facility adaptation because it highlights common environmental risks and practical modifications for dementia care.',
    takeaways: [
      'Evaluate exits, trip hazards, sharp objects, chemicals, poor lighting, and overstimulating spaces.',
      'Reduce confusion with consistent setup, visual cues, and safer room design.',
      'Environment should support orientation, calm, and dignity.',
    ],
  },
  {
    id: 11,
    number: 11,
    category: 'Delirium vs. Dementia / Acute Change',
    title: 'Delirium: Prevention, Diagnosis and Management in Hospital and Long-Term Care',
    source: 'NICE guideline via NCBI Bookshelf — updated 2023',
    link: 'https://www.ncbi.nlm.nih.gov/books/NBK553009/',
    whyUseful:
      'Important for facilities because sudden confusion is not automatically dementia progression; delirium requires urgent recognition and response.',
    takeaways: [
      'Delirium can develop quickly and fluctuate; it is often triggered by illness, dehydration, medications, or environmental stressors.',
      'Rapid change in attention or awareness should prompt urgent medical evaluation.',
      'Delirium prevention and early detection belong in facility workflows.',
    ],
  },
];

const familyResources: FamilyResource[] = [
  {
    id: 1,
    category: 'Understanding Dementia',
    title: "10 Early Signs and Symptoms of Alzheimer's",
    source: "Alzheimer's Association",
    link: 'https://www.alz.org/alzheimers-dementia/10_signs',
    overview:
      'Outlines early warning signs of Alzheimer\'s and helps distinguish normal aging from cognitive decline.',
  },
  {
    id: 2,
    category: 'Psychotropic Medications',
    title: 'AGS Beers Criteria®',
    source: 'American Geriatrics Society',
    link: 'https://geriatricscareonline.org/ProductAbstract/american-geriatrics-society-2023-updated-beers-criteria/CL001',
    overview:
      'Evidence-based guideline to improve medication safety in older adults — useful for families asking questions about prescriptions.',
  },
  {
    id: 3,
    category: 'Caregiver Burnout & Support',
    title: 'Caregiving for Older Adults',
    source: 'National Institute on Aging',
    link: 'https://www.nia.nih.gov/health/caregiving',
    overview: 'Guidance on recognizing stress and preventing caregiver burnout.',
  },
  {
    id: 4,
    category: 'Behavioral Symptoms in Dementia',
    title: 'Use of Antipsychotics in Patients With Dementia',
    source: 'American Psychiatric Association',
    link: 'https://psychiatryonline.org/doi/full/10.1176/appi.books.9780890426807',
    overview: 'Explains the risks, benefits, and alternatives to antipsychotic medications in dementia care.',
  },
  {
    id: 5,
    category: 'Patient Rights & Advocacy',
    title: 'Your Rights and Protections as a Nursing Home Resident',
    source: 'Centers for Medicare & Medicaid Services (CMS)',
    link: 'https://www.cms.gov/medicare/provider-enrollment-and-certification/certificationandcomplianc/downloads/nh-rights.pdf',
    overview: 'Explains resident rights and the care planning process in nursing home settings.',
  },
  {
    id: 6,
    category: 'Mental Health in Older Adults',
    title: 'Depression and Older Adults',
    source: 'National Institute on Aging (NIA)',
    link: 'https://www.nia.nih.gov/health/depression-and-older-adults',
    overview: 'Signs, symptoms, and treatment options for late-life depression.',
  },
  {
    id: 7,
    category: 'Mental Health in Older Adults',
    title: 'Bipolar Disorder',
    source: 'National Institute of Mental Health (NIMH)',
    link: 'https://www.nimh.nih.gov/health/topics/bipolar-disorder',
    overview: 'Explains mood episodes, diagnosis, and treatment options for bipolar disorder.',
  },
  {
    id: 8,
    category: 'Supporting a Loved One',
    title: 'SAMHSA Communication Guide',
    source: 'Substance Abuse and Mental Health Services Administration',
    link: 'https://www.samhsa.gov/mental-health/how-to-talk',
    overview: 'Practical strategies for talking with and supporting a loved one with a mental health condition.',
  },
  {
    id: 9,
    category: 'Supporting a Loved One',
    title: 'Depression vs Dementia',
    source: "Alzheimer's Society",
    link: 'https://www.alzheimers.org.uk/about-dementia/types-dementia/depression',
    overview: 'Helps families differentiate between depression and dementia — two conditions that can look alike.',
  },
  {
    id: 10,
    category: 'When to Seek Help',
    title: 'When to Seek Help for Mental Health',
    source: 'Mayo Clinic',
    link: 'https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/mental-health/art-20044098',
    overview: 'Clear guidance on warning signs that indicate it may be time to seek professional psychiatric care.',
  },
];

const legalResources: LegalResource[] = [
  {
    id: 1,
    category: 'Advance Care Planning',
    title: 'Advance Care Planning: Healthcare Directives',
    source: 'National Institute on Aging',
    link: 'https://www.nia.nih.gov/health/advance-care-planning-healthcare-directives',
    overview:
      'Explains advance directives, healthcare proxies, and how to plan early for medical decisions.',
  },
  {
    id: 2,
    category: 'Medical Power of Attorney',
    title: 'Choosing a Health Care Proxy',
    source: 'National Institute on Aging',
    link: 'https://www.nia.nih.gov/health/advance-care-planning/choosing-health-care-proxy',
    overview:
      'Helps families understand how to select and assign a healthcare decision-maker.',
  },
  {
    id: 3,
    category: 'Financial Power of Attorney',
    title: "Managing Someone Else's Money",
    source: 'Consumer Financial Protection Bureau',
    link: 'https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/',
    overview:
      'Guidance on managing finances responsibly and preventing financial exploitation.',
  },
  {
    id: 4,
    category: 'Conservatorship / Guardianship',
    title: 'Conservatorship in California',
    source: 'California Courts',
    link: 'https://www.courts.ca.gov/selfhelp-conservatorship.htm',
    overview:
      'Explains when conservatorship is needed and how to navigate the legal process.',
  },
  {
    id: 5,
    category: 'Decision-Making Capacity & Dementia',
    title: "Legal and Financial Planning for Alzheimer's",
    source: "Alzheimer's Association",
    link: 'https://www.alz.org/help-support/caregiving/financial-legal-planning',
    overview:
      'Covers decision-making capacity, timing of planning, and dementia-related legal considerations.',
  },
  {
    id: 6,
    category: 'Elder Abuse & Exploitation Prevention',
    title: 'National Adult Protective Services Association',
    source: 'NAPSA',
    link: 'https://www.napsa-now.org/',
    overview:
      'Identifies warning signs of elder abuse and exploitation, and explains how to report concerns.',
  },
];

// ─── Staff Card ───────────────────────────────────────────────────────────────

function StaffCard({ resource }: { resource: StaffResource }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border-2 border-brand-primary/40 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        {/* Number + Title */}
        <div className="flex items-start gap-3 mb-3">
          <span className="text-sm font-bold text-brand-primary-text bg-brand-accent border border-brand-border rounded px-2 py-0.5 shrink-0 mt-0.5">
            {String(resource.number).padStart(2, '0')}
          </span>
          <h3 className="text-base font-semibold text-brand-ink leading-snug">
            {resource.title}
          </h3>
        </div>

        {/* Source */}
        <p className="text-xs text-gray-400 mb-4 pl-9">{resource.source}</p>

        {/* Why useful */}
        <p className="text-sm text-gray-600 leading-relaxed border-l-2 border-brand-border pl-4">
          {resource.whyUseful}
        </p>
      </div>

      {/* Accordion toggle */}
      <div className="border-t border-brand-border">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-primary-text hover:bg-brand-accent transition-colors"
        >
          <span>Key Staff Takeaways</span>
          {open ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden"
            >
              <ul className="px-6 pb-5 pt-1 space-y-2.5">
                {resource.takeaways.map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Link row */}
      <div className="px-6 pb-5 pt-3 border-t border-brand-border">
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary-text hover:text-brand-secondary transition-colors"
        >
          View Full Resource
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}

// ─── Family Card ──────────────────────────────────────────────────────────────

function FamilyCard({ resource }: { resource: FamilyResource }) {
  return (
    <div className="bg-white border-2 border-brand-primary/40 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col">
      <h3 className="text-base font-semibold text-brand-ink leading-snug mb-1">
        {resource.title}
      </h3>
      <p className="text-xs text-gray-400 mb-4">{resource.source}</p>
      <p className="text-sm text-gray-600 leading-relaxed flex-1 border-l-2 border-brand-border pl-4">
        {resource.overview}
      </p>
      <div className="pt-4 mt-4 border-t border-brand-border">
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary-text hover:text-brand-secondary transition-colors"
        >
          Open Resource
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

type Tab = 'staff' | 'family' | 'legal';

export default function Resources() {
  const [activeTab, setActiveTab] = useState<Tab>('staff');

  return (
    <div className="flex flex-col">
      <SEO 
        title="Resource Library" 
        description="Curated, evidence-based resources to help care teams and families better understand psychiatric care and medication safety."
      />
      {/* Hero */}
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
              <span>Resource Library</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-semibold text-brand-ink leading-[1.2] mb-5">
              Facility &amp; Family Education Resources
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Curated, evidence-based resources to help care teams recognize risk, communicate
              effectively, and respond to behavioral changes — and to help families better understand
              the care their loved ones receive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab bar — not sticky on mobile, sticky on md+ */}
      <section className="py-5 bg-white border-b border-brand-border md:sticky top-20 z-40 glass">
        <div className="container-custom">

          {/* Mobile: native select */}
          <div className="md:hidden relative">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as Tab)}
              className="w-full appearance-none bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-primary pr-10"
            >
              <option value="staff">For Facility Teams &amp; Caregivers</option>
              <option value="family">For Families</option>
              <option value="legal">Legal &amp; Care Planning</option>
            </select>
            <ChevronDown
              size={15}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-primary-text pointer-events-none"
            />
          </div>

          {/* Desktop: pill buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setActiveTab('staff')}
              className={cn(
                'flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all',
                activeTab === 'staff'
                  ? 'bg-brand-primary text-brand-primary-content shadow-sm'
                  : 'bg-brand-accent text-brand-primary-text border border-brand-border hover:bg-brand-border'
              )}
            >
              <Users size={15} />
              For Facility Teams &amp; Caregivers
            </button>
            <button
              onClick={() => setActiveTab('family')}
              className={cn(
                'flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all',
                activeTab === 'family'
                  ? 'bg-brand-primary text-brand-primary-content shadow-sm'
                  : 'bg-brand-accent text-brand-primary-text border border-brand-border hover:bg-brand-border'
              )}
            >
              <Heart size={15} />
              For Families
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={cn(
                'flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all',
                activeTab === 'legal'
                  ? 'bg-brand-primary text-brand-primary-content shadow-sm'
                  : 'bg-brand-accent text-brand-primary-text border border-brand-border hover:bg-brand-border'
              )}
            >
              <Scale size={15} />
              Legal &amp; Care Planning
            </button>
          </div>

        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-brand-accent/30 min-h-[60vh]">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {activeTab === 'staff' ? (
              <motion.div
                key="staff"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                {/* Section intro */}
                <div className="max-w-2xl mb-10">
                  <h2 className="text-xl font-semibold text-brand-ink mb-2">
                    Recent Evidence-Informed Articles and Guidance for Long-Term Care Teams
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    These resources were selected to help staff recognize risk, communicate effectively,
                    respond to distress behaviors, and create safer, more person-centered environments.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {staffResources.map((r) => (
                    <StaffCard key={r.id} resource={r} />
                  ))}
                </div>
              </motion.div>
            ) : activeTab === 'family' ? (
              <motion.div
                key="family"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                {/* Section intro */}
                <div className="max-w-2xl mb-10">
                  <h2 className="text-xl font-semibold text-brand-ink mb-2">
                    Family Education &amp; Resources
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    At Health Alliance SoCal, we believe that informed families are empowered families.
                    Below is a curated selection of trusted, evidence-based resources to help you better
                    understand mental health, dementia care, medication safety, and how to support your
                    loved one.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {familyResources.map((r) => (
                    <FamilyCard key={r.id} resource={r} />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="legal"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                {/* Section intro */}
                <div className="max-w-2xl mb-6">
                  <h2 className="text-xl font-semibold text-brand-ink mb-2">
                    Legal &amp; Care Planning Resources for Families
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Planning for a loved one's care includes important legal and financial decisions.
                    These resources help families understand advance directives, decision-making
                    authority, and how to protect their loved ones while ensuring their wishes are honored.
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="flex items-start gap-3 bg-white border border-brand-border rounded-xl px-5 py-4 mb-8">
                  <AlertTriangle size={16} className="text-brand-primary-text shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-500 leading-relaxed">
                    <span className="font-bold text-brand-ink uppercase tracking-wide">Disclaimer: </span>
                    The following resources are provided for educational purposes only and do not
                    constitute legal advice. Families are encouraged to consult with a qualified attorney
                    for guidance specific to their situation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {legalResources.map((r) => (
                    <FamilyCard key={r.id} resource={r} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
