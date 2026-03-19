import { Stage, Benefit } from './types';

export interface ApplicationData {
  name: string;
  id: string;
  course: string;
  intake: string;
  cohort: string;
  duplicateFlag: string;
  dob: string;
  residency: string;
  year12: string;
  vet: string;
  he: string;
  offerType: string;
  liabilityCategory: string;
  age: number;
  address: string;
  atar: string;
  vceResults: { unit: string; score: number }[];
}

export const EXEMPLAR_APP: ApplicationData = {
  name: 'Alex Chen',
  id: 'APP-2026-8821',
  course: 'Bachelor of Computer Science',
  intake: 'Semester 1, 2026',
  cohort: 'Domestic Direct',
  duplicateFlag: 'None Found',
  dob: '15/05/2007',
  residency: 'Australian Citizen',
  year12: 'VCE (2025) - ATAR 95.45',
  vet: 'None',
  he: 'None',
  offerType: 'Direct Offer',
  liabilityCategory: 'Commonwealth Supported Place (CSP)',
  age: 18,
  address: '123 Innovation Way, Melbourne VIC 3000',
  atar: '95.45',
  vceResults: [
    { unit: 'English', score: 42 },
    { unit: 'Maths Methods', score: 45 },
    { unit: 'Specialist Maths', score: 40 },
    { unit: 'Physics', score: 38 },
    { unit: 'Software Dev', score: 48 }
  ]
};

export const STAGES: Stage[] = [
  {
    id: 'receive',
    title: 'Receive Application',
    shortDescription: 'The solution identifies that Alex\'s direct application is in-scope for automated assessment.',
    detailedContent: [
      'Identifies the incoming submission as a Direct Application for the 2026 intake.',
      'Confirms that the selected course and intake period are open for offers.',
      'Checks for potential duplicate applications & student IDs.'
    ],
    icon: 'FilePlus',
    color: 'blue'
  },
  {
    id: 'triage',
    title: 'Triage',
    shortDescription: 'The solution performs required triage checks and extract relevant applicant details.',
    detailedContent: [
      'Confirms that Alex meets residency requirements.',
      'Confirms that Alex meets course age restrictions.',
      'Checks for any existing sanctions or exclusions.'
    ],
    icon: 'Search',
    color: 'indigo'
  },
  {
    id: 'assess',
    title: 'Assess Eligibility',
    shortDescription: 'The solution reviews Alex\'s academic history and identifies the optimal offer pathway.',
    detailedContent: [
      'Automatically retrieves Alex\'s study results from internal and external sources.',
      'Recognises Y12 as the primary basis of assessment.',
      'Applies assessment logic including score conversions, subject bonusing, and conditional / packaged offers.'
    ],
    icon: 'GraduationCap',
    color: 'violet'
  },
  {
    id: 'gate',
    title: 'Pre-Offer Gate',
    shortDescription: 'The solution confirms if human intervention is required to finalise the application.',
    detailedContent: [
      'Completes all mandatory application and offer fields.',
      'Refers the application where required via human-in-the-loop workflow.',
      'Gives the "green light" to move straight to the offer generation stage.'
    ],
    icon: 'UserCheck',
    color: 'emerald'
  },
  {
    id: 'release',
    title: 'Release Offer',
    shortDescription: 'The solution automatically releases the offer to Alex.',
    detailedContent: [
      'Generates a personalised offer letter for Alex.',
      'Sends the offer letter to Alex\'s email address.',
      'Reports the outcome to admissions for reporting and auditing.'
    ],
    icon: 'Send',
    color: 'sky'
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Speed to Offer',
    value: 'Same\nDay',
    description: 'Offers delivered at scale within 24 hours of application'
  },
  {
    title: 'Admin Efficiency',
    value: '90% Reduction',
    description: 'Significant decrease in manual administrative effort'
  },
  {
    title: 'Conversion Lift',
    value: '5-10% Increase',
    description: 'Higher applicant conversion through faster response times'
  },
  {
    title: 'User Experience',
    value: 'Smooth Journey',
    description: 'Fewer feedback loops and a more intuitive applicant path'
  }
];
