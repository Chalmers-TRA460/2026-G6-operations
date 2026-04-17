import type { SurgeryId, ParamDefinition } from '../../../types';

export type Surgery = {
  id: SurgeryId;
  available: boolean;
  icon: string;
  params: ParamDefinition[];
};

export const surgeries: Surgery[] = [
  {
    id: 'gallbladder',
    available: true,
    icon: '🫀',
    params: [
      {
        key: 'type',
        label: 'procedureType',
        options: [
          { value: 'laparoscopic', label: 'laparoscopic' },
          { value: 'open', label: 'open' },
        ],
      },
      {
        key: 'treatment',
        label: 'treatmentPlan',
        options: [
          { value: 'standard', label: 'standard' },
          { value: 'antibiotics', label: 'antibiotics' },
          { value: 'painkillers', label: 'painkillers' },
          { value: 'both', label: 'both' },
        ],
      },
    ],
  },
  {
    id: 'appendix',
    available: true,
    icon: '🩺',
    params: [
      {
        key: 'type',
        label: 'procedureType',
        options: [
          { value: 'laparoscopic', label: 'laparoscopic' },
          { value: 'open', label: 'open' },
        ],
      },
      {
        key: 'treatment',
        label: 'treatmentPlan',
        options: [
          { value: 'antibiotics', label: 'antibiotics' },
          { value: 'standard', label: 'standard' },
        ],
      },
    ],
  },
  {
    id: 'hernia',
    available: false,
    icon: '🏥',
    params: [],
  },
  {
    id: 'colon',
    available: false,
    icon: '⚕️',
    params: [],
  },
];

export function getSurgery(id: string): Surgery | undefined {
  return surgeries.find((s) => s.id === id);
}
