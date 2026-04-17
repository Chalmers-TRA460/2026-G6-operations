export type Language = 'en' | 'sv';
export type Mode = 'patient' | 'nurse';

export type SurgeryId = 'gallbladder' | 'appendix' | 'hernia' | 'colon';

export type ProcedureType = 'laparoscopic' | 'open';
export type TreatmentType = 'antibiotics' | 'painkillers' | 'both' | 'standard';

export type SurgeryParams = {
  type?: ProcedureType;
  treatment?: TreatmentType;
};

export type ContentBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'alert'; variant: 'info' | 'warning' | 'error'; text: string }
  | { kind: 'media'; label: string };

export type Section = {
  id: string;
  title: string;
  blocks: ContentBlock[];
};

export type ParamOption = {
  value: string;
  label: string;
};

export type ParamDefinition = {
  key: string;
  label: string;
  options: ParamOption[];
};
