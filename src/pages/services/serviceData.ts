import {
  Building2, Heart, Users, HandHeart, Monitor, ShieldCheck, Pill, Brain,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  navLabel: string;
  badge: string;
  icon: LucideIcon;
  title: string;
  metaDescription: string;
  keywords: string;
  heroImage: string;
  tagline: string;
  intro: string[];
  features: ServiceFeature[];
  facilityBenefits: string[];
  residentBenefits: string[];
  processSteps: ProcessStep[];
  relatedSlugs: string[];
}

export const allServices: ServiceData[] = [
  {
    slug: 'skilled-nursing-facility-psychiatry',
    navLabel: 'Skilled Nursing Facilities',
    badge: 'Skilled Nursing',
    icon: Building2,
    title: 'Psychiatric Care Partnerships for Skilled Nursing Facilities',
    metaDescription:
      'Health Alliance SoCal partners with skilled nursing facilities across Southern and Northern California to deliver integrated behavioral health care, CMS-compliant psychotropic management, and resident stabilization support.',
    keywords:
      'skilled nursing facility psychiatry, SNF psychiatry los angeles, psychiatric services skilled nursing, behavioral health SNF los angeles county, psychotropic management skilled nursing, CMS behavioral health SNF, geriatric psychiatry services, long-term care psychiatry, nursing home psychiatric care',
    heroImage:
      'https://images.unsplash.com/photo-1765896387387-0538bc9f997e?auto=format&fit=crop&q=80&w=1200',
    tagline:
      'Integrated behavioral health care that becomes part of your care team — supporting residents, staff, and families at every level.',
    intro: [
      'Skilled nursing facilities face unique behavioral health challenges: medically complex residents, demanding regulatory requirements, and the daily pressure of delivering compassionate care. Health Alliance SoCal partners directly with SNF administrators, nursing directors, and interdisciplinary care teams to provide seamless psychiatric support that integrates into your existing workflows.',
      'We don\'t just visit — we become an extension of your care team. Our board-certified clinicians bring deep expertise in geriatric psychiatry, CMS compliance, and behavioral stabilization, giving your facility a reliable clinical partner invested in both resident outcomes and facility success.',
    ],
    features: [
      {
        title: 'Behavioral Stabilization',
        description:
          'Proactive psychiatric management to reduce acute behavioral episodes, minimize avoidable hospitalizations, and maintain resident stability day to day.',
      },
      {
        title: 'CMS-Aligned Documentation',
        description:
          'Audit-ready records, care plans, and behavioral health documentation that protect your facility during CMS surveys and state inspections.',
      },
      {
        title: 'Psychotropic Medication Oversight',
        description:
          'Expert review and management of psychotropic medications with a focus on safety, efficacy, and Gradual Dose Reduction (GDR) compliance.',
      },
      {
        title: 'Interdisciplinary Collaboration',
        description:
          'Direct coordination with nursing staff, social workers, therapists, and administration for cohesive, whole-person care planning.',
      },
      {
        title: 'Staff Education & Support',
        description:
          'Ongoing clinical training to empower your team with de-escalation techniques, behavioral intervention strategies, and early warning recognition.',
      },
      {
        title: 'Family Communication',
        description:
          'Transparent, compassionate communication with families regarding psychiatric care plans, medication changes, and resident progress.',
      },
    ],
    facilityBenefits: [
      'Reduced avoidable hospitalizations and ER transfers',
      'Survey-ready behavioral health documentation',
      'F-Tag 758 psychotropic compliance support',
      'Reliable, consistent psychiatric coverage',
      'Staff confidence in behavioral management',
      'Improved Five-Star Quality ratings',
    ],
    residentBenefits: [
      'Person-centered, dignified psychiatric care',
      'Reduced behavioral distress and agitation',
      'Safe, monitored medication management',
      'Improved emotional well-being and stability',
      'Clear, ongoing communication with family',
    ],
    processSteps: [
      {
        title: 'Partnership Onboarding',
        description:
          'We conduct a facility assessment, review current behavioral health workflows, and establish integration points with your care team.',
      },
      {
        title: 'Resident Evaluation',
        description:
          'Comprehensive psychiatric evaluations for new referrals, including diagnostic clarification, behavioral assessments, and medication review.',
      },
      {
        title: 'Collaborative Care Planning',
        description:
          'Individualized care plans developed in coordination with nursing staff, social workers, and family members to address each resident\'s unique needs.',
      },
      {
        title: 'Ongoing Monitoring & Adjustment',
        description:
          'Regular follow-up visits, medication monitoring, and care plan refinement ensure residents remain stable and supported over time.',
      },
    ],
    relatedSlugs: [
      'psychotropic-medication-management',
      'cms-f-tag-758-support',
      'dementia-behavioral-management',
    ],
  },

  {
    slug: 'assisted-living-psychiatry',
    navLabel: 'Assisted Living Communities',
    badge: 'Assisted Living',
    icon: Heart,
    title: 'Psychiatric & Behavioral Health Services for Assisted Living | Mental Health Care',
    metaDescription:
      'Behavioral health and psychiatric care for assisted living facilities. Expert mental health support for adults with mental illness, schizophrenia, depression, and behavioral health conditions. Helping families find quality care in Los Angeles, Orange County, San Diego, Riverside & Ventura.',
    keywords:
      'behavioral health assisted living, psychiatric assisted living, assisted living mental health, assisted living for mentally ill, mental health assisted living facilities, assisted living for adults with mental illness, assisted living for schizophrenia, psychiatric nursing home, nursing home for mentally ill, assisted housing for mentally ill, group homes for mentally disabled adults, mental health assisted living near me, assisted living for adults with mental illness near me, ALF psychiatry los angeles, behavioral health provider ALF, psychiatric services assisted living california, mental health residential care',
    heroImage:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
    tagline:
      'Empowering residents to thrive emotionally while supporting the staff who care for them every day.',
    intro: [
      'Assisted living communities provide a supportive environment for adults with mental illness, depression, anxiety, schizophrenia, and other behavioral health conditions. These facilities serve as psychiatric nursing homes and mental health residential care options, helping residents maintain independence while receiving professional support. If you\'re looking for mental health assisted living facilities for yourself or a loved one, Health Alliance SoCal partners with quality assisted living communities across Southern and Northern California to ensure residents receive excellent psychiatric and behavioral health care.',
      'Assisted living communities strive to balance resident independence with appropriate levels of support — a balance that becomes significantly more complex when behavioral health needs arise. Our clinicians understand the unique culture of assisted living settings and work collaboratively with your staff to develop individualized behavioral health strategies for conditions like schizophrenia, depression, anxiety, and other mental health challenges that may accompany aging.',
      'Whether you\'re searching for "assisted living for mentally ill near me" or "psychiatric assisted living facilities," our partnership with assisted living communities ensures residents receive evidence-based psychiatric care, safe medication management, and compassionate support from board-certified clinicians.',
    ],
    features: [
      {
        title: 'Psychiatric Evaluations & Follow-Up',
        description:
          'Comprehensive assessments for new residents and scheduled follow-up visits that monitor mental health status and medication effectiveness over time.',
      },
      {
        title: 'Individualized Care Plans',
        description:
          'Behavioral health care plans developed in partnership with your team, addressing each resident\'s psychiatric needs, goals, and personal preferences.',
      },
      {
        title: 'Medication Management',
        description:
          'Careful oversight of psychiatric medications with attention to drug interactions, side effects, and the goal of least-restrictive treatment approaches.',
      },
      {
        title: 'Staff Consultation & Training',
        description:
          'Equipping your team to recognize early signs of behavioral distress, implement de-escalation techniques, and communicate mental health concerns effectively.',
      },
      {
        title: 'Family Engagement',
        description:
          'Regular, clear communication with families regarding care plans and psychiatric updates, ensuring families feel informed and involved.',
      },
      {
        title: 'Responsive Crisis Support',
        description:
          'Accessible psychiatric consultation for behavioral escalations, helping your team manage crises confidently and minimizing unnecessary hospital transfers.',
      },
    ],
    facilityBenefits: [
      'Reduced behavioral incidents and staff burden',
      'Stronger family satisfaction and confidence',
      'Fewer unnecessary hospital transfers',
      'Staff trained to handle behavioral challenges',
      'Consistent psychiatric presence residents can trust',
      'Documentation supporting care quality metrics',
    ],
    residentBenefits: [
      'Autonomy-centered, respectful psychiatric care',
      'Reduced anxiety, depression, and behavioral distress',
      'Appropriate medication support with minimal side effects',
      'A familiar clinical relationship that grows over time',
      'Family involvement and open, honest communication',
    ],
    processSteps: [
      {
        title: 'Community Orientation',
        description:
          'We familiarize ourselves with your community\'s culture, care philosophy, and current behavioral health processes before seeing residents.',
      },
      {
        title: 'Resident Introductions',
        description:
          'Initial psychiatric evaluations conducted with sensitivity to the assisted living environment and each resident\'s comfort level.',
      },
      {
        title: 'Care Team Collaboration',
        description:
          'Care plans are built collaboratively with nursing staff, activity directors, and family members for truly whole-person support.',
      },
      {
        title: 'Continuous Support',
        description:
          'Scheduled follow-up visits, staff check-ins, and responsive consultation ensure ongoing behavioral health stability across your community.',
      },
    ],
    relatedSlugs: [
      'skilled-nursing-facility-psychiatry',
      'memory-care-behavioral-health',
      'psychotropic-medication-management',
    ],
  },

  {
    slug: 'memory-care-behavioral-health',
    navLabel: 'Memory Care Units',
    badge: 'Memory Care',
    icon: Users,
    title: 'Specialized Behavioral Health for Memory Care Units',
    metaDescription:
      'Health Alliance SoCal partners with memory care units to deliver expert behavioral health support for residents with dementia and cognitive impairment — integrating psychiatric care into every aspect of daily life.',
    keywords:
      'memory care behavioral health, dementia psychiatric care, dementia behavioral management los angeles, memory care psychiatry southern california, BPSD treatment, Alzheimer\'s behavioral health services, cognitive impairment psychiatric care, dementia agitation management, memory care psychiatrist los angeles county',
    heroImage:
      'https://images.unsplash.com/photo-1762955911431-4c44c7c3f408?auto=format&fit=crop&q=80&w=1200',
    tagline:
      'Expert dementia-focused psychiatric care that honors dignity, reduces distress, and supports the people who provide care every day.',
    intro: [
      'Behavioral and psychological symptoms of dementia (BPSD) — including agitation, aggression, wandering, and mood disturbances — are among the most challenging aspects of memory care. Health Alliance SoCal partners with memory care units to provide specialized psychiatric support that addresses these complex presentations with evidence-based, person-centered strategies.',
      'Our clinicians are experienced in distinguishing psychiatric conditions from dementia-related behavioral symptoms, enabling more targeted interventions and safer medication management. We work side-by-side with your care team to create environments where residents feel secure, understood, and respected — even as their cognitive needs evolve.',
    ],
    features: [
      {
        title: 'BPSD Assessment & Management',
        description:
          'Specialized evaluation and management of behavioral and psychological symptoms of dementia, including agitation, aggression, sleep disturbances, and psychosis.',
      },
      {
        title: 'Non-Pharmacological Interventions',
        description:
          'Evidence-based behavioral strategies developed alongside your team to reduce distress without relying solely on medications.',
      },
      {
        title: 'Safe Psychotropic Management',
        description:
          'Careful, conservative prescribing with ongoing monitoring of psychotropic medications, prioritizing resident safety and regulatory compliance.',
      },
      {
        title: 'Caregiver & Staff Support',
        description:
          'Education and consultation for your team on dementia stages, behavioral triggers, and compassionate care approaches that reduce staff burnout.',
      },
      {
        title: 'Family Education & Guidance',
        description:
          'Compassionate support for families navigating the emotional complexity of a loved one\'s dementia journey, including care plan transparency.',
      },
      {
        title: 'Transition & Placement Support',
        description:
          'Clinical guidance for residents transitioning into or within memory care, ensuring psychiatric continuity through every stage of care.',
      },
    ],
    facilityBenefits: [
      'Reduced behavioral incidents and restraint use',
      'Evidence-based BPSD management protocols',
      'CMS-compliant psychotropic documentation',
      'Staff education on dementia behavioral responses',
      'Improved resident stability and reduced transfers',
      'Family confidence in the quality of care provided',
    ],
    residentBenefits: [
      'Dignity-centered care that honors their history',
      'Reduced agitation, fear, and behavioral distress',
      'Safer medication management tailored to their needs',
      'Consistent clinical presence that builds familiarity',
      'Families who feel heard, informed, and involved',
    ],
    processSteps: [
      {
        title: 'Environment & Team Assessment',
        description:
          'We evaluate your memory care environment, existing care protocols, and staff approach to behavioral health before developing our partnership model.',
      },
      {
        title: 'Comprehensive Cognitive & Psychiatric Evaluation',
        description:
          'Each resident receives a thorough assessment that distinguishes psychiatric conditions from dementia-related symptoms to guide targeted treatment.',
      },
      {
        title: 'Personalized Behavioral Care Plans',
        description:
          'Care plans incorporate behavioral interventions, medication considerations, and family input — reviewed regularly as dementia progresses.',
      },
      {
        title: 'Ongoing Collaboration & Education',
        description:
          'Regular team huddles, staff training sessions, and family meetings ensure everyone is aligned and equipped to support each resident effectively.',
      },
    ],
    relatedSlugs: [
      'dementia-behavioral-management',
      'psychotropic-medication-management',
      'skilled-nursing-facility-psychiatry',
    ],
  },

  {
    slug: 'board-and-care-mental-health',
    navLabel: 'Board & Care Homes',
    badge: 'Board & Care',
    icon: HandHeart,
    title: 'Psychiatric Services for Board & Care Homes',
    metaDescription:
      'Health Alliance SoCal brings professional behavioral health services to board and care homes, providing personalized psychiatric oversight that supports residents and the dedicated caregivers who serve them.',
    keywords:
      'board and care mental health, residential care facility psychiatry, board and care home psychiatry los angeles, behavioral health residential care, psychiatric oversight small residential homes, personalized mental health services board care',
    heroImage:
      'https://images.unsplash.com/photo-1773227055624-07b515ba87c5?auto=format&fit=crop&q=80&w=1200',
    tagline:
      'Bringing professional psychiatric partnership to small residential care homes — with the personal attention each resident deserves.',
    intro: [
      'Board and care homes provide an intimate, home-like setting for adults with complex care needs — yet access to consistent behavioral health services often remains a challenge. Health Alliance SoCal partners with board and care operators to bring professional psychiatric oversight into these settings, ensuring residents receive the same quality of mental health care available in larger institutions.',
      'We understand the relational nature of small residential care environments and take time to build meaningful clinical relationships with residents and the dedicated caregivers who know them best. Our partnership model is flexible, respectful of your home\'s culture, and designed to provide sustainable behavioral health support without administrative burden.',
    ],
    features: [
      {
        title: 'Individualized Psychiatric Care',
        description:
          'Each resident receives personalized psychiatric attention, with care plans tailored to their unique history, diagnoses, and behavioral health needs.',
      },
      {
        title: 'Medication Management & Review',
        description:
          'Regular review and management of psychiatric medications, with a focus on minimizing polypharmacy and ensuring each resident\'s safety.',
      },
      {
        title: 'Caregiver Consultation',
        description:
          'Direct consultation with your home\'s caregivers on behavioral management approaches, warning signs, and how to support residents day to day.',
      },
      {
        title: 'Behavioral Support Plans',
        description:
          'Practical, easy-to-implement behavioral support strategies that caregivers can apply consistently across shifts.',
      },
      {
        title: 'Family & Guardian Communication',
        description:
          'Clear communication with family members and legal guardians regarding psychiatric care, medication changes, and resident well-being.',
      },
      {
        title: 'Regulatory Documentation',
        description:
          'Clinical documentation that meets state residential care facility requirements and supports continuity when residents transition between settings.',
      },
    ],
    facilityBenefits: [
      'Professional psychiatric coverage without complexity',
      'Caregiver education and behavioral support tools',
      'Reduced behavioral crises and emergency calls',
      'State-compliant behavioral health documentation',
      'Confident, supported caregiving staff',
      'Enhanced care quality and resident satisfaction',
    ],
    residentBenefits: [
      'Personal, relationship-based psychiatric care',
      'Safe and appropriately monitored medications',
      'Reduced behavioral distress in a familiar setting',
      'Stability and continuity they can rely on',
      'Families informed and included in their care',
    ],
    processSteps: [
      {
        title: 'Home & Caregiver Orientation',
        description:
          'We visit your home, meet your caregiving team, and understand each resident\'s background and current behavioral health needs.',
      },
      {
        title: 'Resident Psychiatric Evaluations',
        description:
          'Thorough initial psychiatric assessments conducted in the comfort of the home setting to minimize disruption for residents.',
      },
      {
        title: 'Care Plan Development',
        description:
          'Collaborative care plans that caregivers can practically implement, supported by clear guidance from our clinical team.',
      },
      {
        title: 'Regular Visits & Check-Ins',
        description:
          'Scheduled follow-up visits and accessible phone/telehealth consultation keep residents stable and caregivers supported between visits.',
      },
    ],
    relatedSlugs: [
      'assisted-living-psychiatry',
      'psychotropic-medication-management',
      'telepsychiatry-long-term-care',
    ],
  },

  {
    slug: 'telepsychiatry-long-term-care',
    navLabel: 'Telepsychiatry',
    badge: 'Telepsychiatry',
    icon: Monitor,
    title: 'Telepsychiatry Services for Long-Term Care Facilities',
    metaDescription:
      'Health Alliance SoCal offers secure telepsychiatry services for skilled nursing, assisted living, and residential care facilities — expanding access to expert behavioral health care without geographic barriers.',
    keywords:
      'telepsychiatry long-term care, telehealth psychiatry skilled nursing, virtual psychiatric care assisted living, remote behavioral health services, telepsychiatry los angeles county, virtual psychiatrist long-term care, telehealth mental health services SNF',
    heroImage:
      'https://images.unsplash.com/photo-1758691462743-f9fc9e430d39?auto=format&fit=crop&q=80&w=1200',
    tagline:
      'Expert psychiatric care delivered securely and conveniently — expanding access to behavioral health across every facility we serve.',
    intro: [
      'Geographic distance, staffing constraints, and scheduling demands can make consistent in-person psychiatric coverage challenging for many long-term care facilities. Health Alliance SoCal\'s telepsychiatry services bridge that gap, delivering the same clinical expertise our in-person team provides — through a secure, HIPAA-compliant platform designed for the long-term care environment.',
      'Our telepsychiatry model is not a replacement for relationship-based care; it is an extension of it. Many of our telepsychiatry residents are supported by clinicians they have met in person, ensuring clinical continuity. For facilities in underserved areas or those requiring supplemental coverage, telepsychiatry provides a flexible, reliable pathway to expert behavioral health partnership.',
    ],
    features: [
      {
        title: 'HIPAA-Compliant Video Visits',
        description:
          'Secure, encrypted video sessions conducted through a platform that meets all federal and state telehealth requirements for long-term care settings.',
      },
      {
        title: 'Psychiatric Evaluations & Follow-Up',
        description:
          'Full psychiatric evaluations, medication management visits, and behavioral health follow-ups conducted via telehealth with the same clinical rigor as in-person care.',
      },
      {
        title: 'Same-Day & Urgent Consultations',
        description:
          'Faster access to psychiatric consultation for behavioral escalations, reducing reliance on emergency transfers and supporting timely clinical decision-making.',
      },
      {
        title: 'Staff-Assisted Sessions',
        description:
          'Our team coordinates with nursing staff to support residents during telehealth visits, ensuring sessions are comfortable, productive, and clinically effective.',
      },
      {
        title: 'Documentation & EHR Integration',
        description:
          'Clinical documentation generated from telepsychiatry visits is compliant, thorough, and shareable with facility care teams for seamless continuity.',
      },
      {
        title: 'Hybrid Care Model',
        description:
          'Combine telepsychiatry with scheduled in-person visits for a flexible, cost-effective coverage model tailored to your facility\'s unique needs.',
      },
    ],
    facilityBenefits: [
      'Psychiatric coverage without geographic limitations',
      'Faster consultation turnaround for urgent needs',
      'Flexible scheduling that fits facility workflows',
      'Reduced transfer costs and emergency utilization',
      'Compliant telehealth documentation for surveys',
      'Supplemental coverage during provider transitions',
    ],
    residentBenefits: [
      'Access to expert psychiatric care without transport',
      'Comfortable, familiar-setting video visits',
      'Consistent care even during staffing transitions',
      'Timely responses to emerging behavioral needs',
      'A familiar clinical voice residents can rely on',
    ],
    processSteps: [
      {
        title: 'Technology Setup & Staff Training',
        description:
          'We work with your facility to configure secure telehealth access, train staff on supporting residents during virtual visits, and establish workflow protocols.',
      },
      {
        title: 'Initial Telehealth Evaluations',
        description:
          'New residents receive comprehensive psychiatric evaluations via secure video, often preceded by a staff-completed pre-visit clinical summary.',
      },
      {
        title: 'Scheduled Follow-Up Visits',
        description:
          'Regular telepsychiatry follow-ups ensure medication monitoring, care plan review, and ongoing behavioral health support on a predictable schedule.',
      },
      {
        title: 'Urgent Consultation Access',
        description:
          'Facilities gain access to expedited psychiatric consultation when behavioral escalations arise, reducing the likelihood of unnecessary hospitalization.',
      },
    ],
    relatedSlugs: [
      'skilled-nursing-facility-psychiatry',
      'board-and-care-mental-health',
      'psychotropic-medication-management',
    ],
  },

  {
    slug: 'cms-f-tag-758-support',
    navLabel: 'CMS F-Tag 758 Compliance',
    badge: 'CMS Compliance',
    icon: ShieldCheck,
    title: 'CMS F-Tag 758 Compliance Support & Psychotropic Oversight',
    metaDescription:
      'Health Alliance SoCal provides specialized CMS F-Tag 758 compliance support for skilled nursing facilities — including psychotropic oversight, GDR documentation, and survey-ready behavioral health records.',
    keywords:
      'CMS F-Tag 758 compliance, F-Tag 758 psychotropic medication, GDR compliance skilled nursing, gradual dose reduction program, CMS behavioral health compliance SNF, psychotropic medication oversight, F-Tag 758 support los angeles, survey-ready behavioral health documentation',
    heroImage:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
    tagline:
      'Protecting your facility, your residents, and your Five-Star rating through expert CMS behavioral health compliance partnership.',
    intro: [
      'CMS F-Tag 758 governs the use of psychotropic medications in skilled nursing facilities, requiring facilities to ensure these medications are used only when clinically necessary, with documented indications and an active program of Gradual Dose Reduction (GDR). Non-compliance carries significant survey risk — yet many facilities lack the psychiatric expertise to navigate these requirements confidently.',
      'Health Alliance SoCal partners with skilled nursing facilities to provide the clinical oversight, documentation infrastructure, and staff education needed to maintain F-Tag 758 compliance proactively — not just in preparation for a survey. We become your behavioral health compliance partner, working alongside your care team to ensure every psychotropic medication order is clinically justified, documented, and regularly reviewed.',
    ],
    features: [
      {
        title: 'Psychotropic Medication Justification',
        description:
          'We ensure every psychotropic order is supported by a documented clinical indication, reducing the risk of deficiency citations during surveys.',
      },
      {
        title: 'GDR Program Management',
        description:
          'Structured Gradual Dose Reduction programs for eligible residents, with clinical documentation demonstrating each attempt, outcome, and clinical rationale.',
      },
      {
        title: 'Behavior Monitoring Plans',
        description:
          'Individualized behavioral monitoring plans that provide evidence for medication necessity and track the effectiveness of psychotropic interventions.',
      },
      {
        title: 'Survey Preparation Support',
        description:
          'Pre-survey behavioral health audits, documentation review, and staff preparation to ensure your facility is survey-ready at all times.',
      },
      {
        title: 'Staff Education on F-Tag 758',
        description:
          'Clear, practical education for nursing staff on F-Tag 758 requirements, observation documentation, and their role in behavioral health compliance.',
      },
      {
        title: 'Corrective Action Consultation',
        description:
          'If your facility has received a deficiency related to behavioral health or psychotropic medications, we partner with you to develop and implement a corrective action plan.',
      },
    ],
    facilityBenefits: [
      'Dramatically reduced F-Tag 758 deficiency risk',
      'Audit-ready psychotropic documentation at all times',
      'Structured GDR program with compliant records',
      'Staff trained on behavioral documentation requirements',
      'Improved Five-Star Quality Measure performance',
      'Expert partnership for corrective action plans',
    ],
    residentBenefits: [
      'Medications reviewed and justified for their specific needs',
      'Reduced unnecessary psychotropic exposure',
      'Safer, more targeted behavioral health treatment',
      'Regular clinical review of medication effectiveness',
      'Care that prioritizes their safety and dignity',
    ],
    processSteps: [
      {
        title: 'Psychotropic Medication Audit',
        description:
          'We conduct a comprehensive review of all current psychotropic orders, assessing clinical justification, documentation quality, and GDR status.',
      },
      {
        title: 'GDR Program Implementation',
        description:
          'For eligible residents, we initiate and document structured GDR attempts in accordance with CMS requirements and clinical best practice.',
      },
      {
        title: 'Ongoing Documentation & Monitoring',
        description:
          'Regular behavioral health documentation is maintained to support the clinical necessity of every psychotropic medication currently in use.',
      },
      {
        title: 'Survey Readiness Review',
        description:
          'Periodic internal audits and staff education ensure your facility can demonstrate F-Tag 758 compliance confidently to surveyors at any time.',
      },
    ],
    relatedSlugs: [
      'psychotropic-medication-management',
      'skilled-nursing-facility-psychiatry',
      'dementia-behavioral-management',
    ],
  },

  {
    slug: 'psychotropic-medication-management',
    navLabel: 'Psychotropic Medication Management',
    badge: 'Medication Management',
    icon: Pill,
    title: 'Psychotropic Medication Management for Long-Term Care',
    metaDescription:
      'Health Alliance SoCal provides expert psychotropic medication management for skilled nursing, assisted living, and memory care settings — prioritizing resident safety, clinical efficacy, and CMS compliance.',
    keywords:
      'psychotropic medication management long-term care, psychiatric medication management SNF, medication management assisted living, GDR psychotropic reduction, antipsychotic medication review, psychotropic medication oversight los angeles, safe medication management seniors, medication monitoring nursing homes',
    heroImage:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200',
    tagline:
      'Careful, evidence-based medication management that balances clinical efficacy, resident safety, and regulatory compliance.',
    intro: [
      'Psychotropic medications play an important — and sometimes necessary — role in managing behavioral health conditions in long-term care. But their use demands careful clinical oversight: monitoring for side effects, evaluating ongoing necessity, managing drug interactions, and maintaining the documentation required by CMS regulations. Health Alliance SoCal partners with facilities to provide exactly this level of expertise.',
      'Our approach to psychotropic medication management is rooted in the principle of using the least restrictive, most effective treatment for each resident. We work collaboratively with your nursing team, medical directors, and pharmacists to ensure every psychotropic order serves a clearly documented clinical purpose — and that residents are never maintained on medications longer than clinically warranted.',
    ],
    features: [
      {
        title: 'Comprehensive Medication Review',
        description:
          'Systematic review of all psychotropic medications for each resident, evaluating clinical indication, dosage appropriateness, and ongoing necessity.',
      },
      {
        title: 'Drug Interaction Screening',
        description:
          'Proactive identification and management of potential drug-drug and drug-disease interactions to protect resident safety.',
      },
      {
        title: 'Side Effect Monitoring',
        description:
          'Structured monitoring for common and serious side effects of psychotropic medications, with care plan adjustments when adverse effects are identified.',
      },
      {
        title: 'Gradual Dose Reduction (GDR)',
        description:
          'Evidence-based GDR protocols implemented for eligible residents, with full documentation supporting CMS compliance and resident safety.',
      },
      {
        title: 'PRN Medication Oversight',
        description:
          'Clinical review of as-needed psychotropic orders to ensure appropriate use, frequency monitoring, and timely reassessment.',
      },
      {
        title: 'Pharmacist & Medical Director Collaboration',
        description:
          'Close coordination with your facility\'s consulting pharmacist and medical director to ensure medication decisions reflect a comprehensive clinical picture.',
      },
    ],
    facilityBenefits: [
      'Reduced psychotropic prescribing risk and liability',
      'GDR documentation meeting CMS requirements',
      'Fewer adverse medication events and hospitalizations',
      'Coordinated pharmacist and psychiatric collaboration',
      'Stronger Five-Star antipsychotic quality measure',
      'Survey-ready medication documentation at all times',
    ],
    residentBenefits: [
      'Medications tailored to their individual clinical needs',
      'Reduced risk of adverse drug reactions',
      'Gradual reduction when medications are no longer needed',
      'Regular clinical reassessment of medication effectiveness',
      'Safer, more comfortable daily living',
    ],
    processSteps: [
      {
        title: 'Medication Reconciliation & Review',
        description:
          'We begin with a full review of each resident\'s current psychotropic medications, diagnoses, and behavioral health history.',
      },
      {
        title: 'Clinical Justification Documentation',
        description:
          'We ensure every psychotropic order is supported by documented clinical indications, behavioral monitoring data, and treatment rationale.',
      },
      {
        title: 'GDR & Optimization Planning',
        description:
          'For residents on long-term psychotropics, we develop individualized GDR plans or dose optimization strategies aligned with clinical goals.',
      },
      {
        title: 'Ongoing Monitoring & Reporting',
        description:
          'Regular medication reviews, side effect screenings, and updated documentation ensure compliance and clinical integrity over time.',
      },
    ],
    relatedSlugs: [
      'cms-f-tag-758-support',
      'skilled-nursing-facility-psychiatry',
      'dementia-behavioral-management',
    ],
  },

  {
    slug: 'dementia-behavioral-management',
    navLabel: 'Dementia Behavioral Management',
    badge: 'Dementia Care',
    icon: Brain,
    title: 'Dementia Behavioral Management & Care Partnerships',
    metaDescription:
      'Health Alliance SoCal partners with long-term care facilities to provide expert dementia behavioral management — combining evidence-based psychiatric interventions with compassionate, person-centered care strategies.',
    keywords:
      'dementia behavioral management, dementia behavioral management los angeles, BPSD treatment long-term care, behavioral and psychological symptoms dementia, dementia agitation management, Alzheimer\'s behavioral health, memory care behavioral strategies, evidence-based dementia care',
    heroImage:
      'https://images.unsplash.com/photo-1773227060313-7623fd5bfa64?auto=format&fit=crop&q=80&w=1200',
    tagline:
      'Expert, evidence-based behavioral management for residents with dementia — honoring who they are while addressing the challenges they face.',
    intro: [
      'Behavioral and psychological symptoms of dementia (BPSD) — including agitation, aggression, wandering, sleep disruption, and depression — affect the majority of individuals living with dementia at some point in their illness. These symptoms place significant strain on care teams, affect quality of life for all residents, and drive many of the most challenging clinical situations in long-term care settings.',
      'Health Alliance SoCal partners with skilled nursing facilities, memory care units, and assisted living communities to develop and implement comprehensive dementia behavioral management programs. Our approach integrates thorough psychiatric assessment, evidence-based non-pharmacological interventions, careful medication management, and ongoing staff education — creating a system of support that benefits residents, caregivers, and families alike.',
    ],
    features: [
      {
        title: 'BPSD Assessment & Differential Diagnosis',
        description:
          'Expert evaluation to distinguish psychiatric conditions from dementia-related behavioral symptoms, enabling more precise and effective treatment approaches.',
      },
      {
        title: 'Non-Pharmacological Behavior Strategies',
        description:
          'Evidence-based behavioral intervention plans developed with your team that address triggers, modify environments, and reduce distress without medication.',
      },
      {
        title: 'Targeted Psychotropic Management',
        description:
          'When medication is clinically indicated, we prescribe conservatively and monitor carefully — always prioritizing the resident\'s safety and quality of life.',
      },
      {
        title: 'Dementia Stage-Specific Care Planning',
        description:
          'Care plans that evolve as dementia progresses, ensuring interventions remain appropriate and effective at each stage of the resident\'s journey.',
      },
      {
        title: 'Caregiver & Staff Education',
        description:
          'Practical training on dementia behavioral responses, communication techniques, and de-escalation strategies that reduce staff stress and improve resident outcomes.',
      },
      {
        title: 'Family Support & Guidance',
        description:
          'Compassionate education and regular communication with families navigating the grief and complexity of a loved one\'s behavioral changes.',
      },
    ],
    facilityBenefits: [
      'Reduced frequency and severity of behavioral incidents',
      'Evidence-based BPSD management protocols in place',
      'Staff equipped with practical de-escalation skills',
      'CMS-compliant behavioral documentation',
      'Fewer unnecessary hospitalizations and ER visits',
      'Improved quality of life metrics across the unit',
    ],
    residentBenefits: [
      'Care that recognizes the person behind the diagnosis',
      'Reduced episodes of agitation, fear, and distress',
      'Safer, more targeted medication support',
      'Consistent clinical relationship throughout their journey',
      'Families who understand and can meaningfully participate',
    ],
    processSteps: [
      {
        title: 'Behavioral Assessment & Root Cause Analysis',
        description:
          'We evaluate each resident\'s behavioral presentations, potential triggers, environmental factors, and underlying psychiatric contributions.',
      },
      {
        title: 'Individualized Behavior Management Plan',
        description:
          'A comprehensive, practical plan is developed with your care team, incorporating non-pharmacological strategies as the first line of intervention.',
      },
      {
        title: 'Medication Review & Adjustment',
        description:
          'When medications are involved, we review all current psychotropics and make evidence-based adjustments to optimize efficacy and minimize risk.',
      },
      {
        title: 'Ongoing Team Education & Plan Review',
        description:
          'Regular case reviews, staff education, and care plan updates ensure the behavioral management program remains effective as residents\' needs evolve.',
      },
    ],
    relatedSlugs: [
      'memory-care-behavioral-health',
      'psychotropic-medication-management',
      'cms-f-tag-758-support',
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return allServices.find((s) => s.slug === slug);
}
