export type StageId = 'receive' | 'triage' | 'assess' | 'gate' | 'release' | 'wrapup';

export interface Stage {
  id: StageId;
  title: string;
  shortDescription: string;
  detailedContent: string[];
  icon: string;
  color: string;
}

export interface Benefit {
  title: string;
  value: string;
  description: string;
}
