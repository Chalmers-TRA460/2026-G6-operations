// All medical content requires clinical review before deployment (see PRD §4.3 C2).
import type { Section, SurgeryParams } from '../../../types';

function mediaBlock(label: string) {
  return { kind: 'media' as const, label };
}

export function getGallbladderSections(params: SurgeryParams): Section[] {
  const isLap = !params.type || params.type === 'laparoscopic';

  return [
    {
      id: 'preparation',
      title: 'Preparation',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Before your surgery you will need to prepare your body. Following these instructions carefully helps reduce the risk of complications.',
        },
        {
          kind: 'list',
          items: [
            'Do not eat or drink anything for at least 6 hours before surgery.',
            'Shower the morning of your surgery using regular soap.',
            'Remove all jewellery, nail polish, and contact lenses before arriving.',
            'Bring a list of all medications you currently take.',
            'Arrange for someone to drive you home — you will not be able to drive yourself.',
          ],
        },
        {
          kind: 'alert',
          variant: 'info',
          text: 'If you take blood thinners or diabetes medication, your care team will give you specific instructions about when to take or skip your dose.',
        },
      ],
    },
    {
      id: 'procedure',
      title: 'The Procedure',
      blocks: [
        {
          kind: 'paragraph',
          text: isLap
            ? 'Your gallbladder will be removed using laparoscopic (keyhole) surgery. This is the most common method. The surgeon makes 3–4 small cuts in your abdomen and uses a tiny camera and instruments to remove the gallbladder. The whole procedure usually takes 1–2 hours.'
            : 'Your gallbladder will be removed through open surgery. The surgeon makes a single larger cut (about 10–15 cm) on the right side of your abdomen to access and remove the gallbladder. This approach is used when keyhole surgery is not suitable.',
        },
        mediaBlock(isLap ? 'Animation: laparoscopic cholecystectomy overview' : 'Animation: open cholecystectomy overview'),
        {
          kind: 'paragraph',
          text: 'You will be under general anaesthesia for the entire operation, meaning you will be completely asleep and will feel nothing.',
        },
        {
          kind: 'list',
          items: isLap
            ? [
                'Small cuts heal faster and leave smaller scars.',
                'Most patients go home the same day or the day after.',
                'You can usually return to light activities within 1–2 weeks.',
              ]
            : [
                'Recovery takes longer than with keyhole surgery.',
                'You will typically stay in hospital for 3–5 days.',
                'Full recovery usually takes 4–6 weeks.',
              ],
        },
      ],
    },
    {
      id: 'recovery',
      title: 'Recovery',
      blocks: [
        {
          kind: 'paragraph',
          text: isLap
            ? 'After laparoscopic surgery, most patients go home the same day or the following morning. You will feel some soreness around the cuts for a few days.'
            : 'After open surgery you will stay in hospital for several days. Your care team will monitor your recovery and help manage your pain.',
        },
        {
          kind: 'list',
          items: [
            'Rest for the first few days — avoid heavy lifting and strenuous activity.',
            'Keep the wound area clean and dry.',
            'You may eat and drink normally once you feel ready, usually the same day.',
            isLap
              ? 'Most people return to work within 1–2 weeks.'
              : 'Most people return to work within 4–6 weeks depending on the type of work.',
            'You may have some shoulder or back pain from the gas used during surgery — this is normal and passes within a day or two.',
          ],
        },
        mediaBlock('Illustration: wound care at home'),
      ],
    },
    {
      id: 'treatment',
      title: 'Treatment',
      blocks: getTreatmentBlocks(params.treatment),
    },
    {
      id: 'warning-signs',
      title: 'Warning Signs',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Most people recover well. However, contact the hospital immediately if you experience any of the following:',
        },
        {
          kind: 'list',
          items: [
            'Fever above 38.5 °C',
            'Increasing pain that your medication does not control',
            'Redness, swelling, or discharge at the wound site',
            'Yellowing of the skin or whites of the eyes (jaundice)',
            'Severe nausea or vomiting that prevents you from eating or drinking',
            'Difficulty breathing',
          ],
        },
        {
          kind: 'alert',
          variant: 'error',
          text: 'If you are unsure, do not wait — call 1177 or go to the nearest emergency department.',
        },
      ],
    },
  ];
}

export function getAppendixSections(params: SurgeryParams): Section[] {
  const isLap = !params.type || params.type === 'laparoscopic';

  return [
    {
      id: 'preparation',
      title: 'Preparation',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Appendix removal is often an emergency operation, so preparation time may be limited. Your care team will guide you through what is needed.',
        },
        {
          kind: 'list',
          items: [
            'Do not eat or drink anything until told it is safe to do so.',
            'Tell staff about all medications, allergies, and any recent illnesses.',
            'Remove all jewellery and contact lenses before the operation.',
            'Arrange for someone to be with you after surgery.',
          ],
        },
        {
          kind: 'alert',
          variant: 'info',
          text: 'If this is a planned (elective) operation, your team will give you full preparation instructions in advance.',
        },
      ],
    },
    {
      id: 'procedure',
      title: 'The Procedure',
      blocks: [
        {
          kind: 'paragraph',
          text: isLap
            ? 'Your appendix will be removed using laparoscopic (keyhole) surgery. The surgeon makes 2–3 small cuts in your abdomen and uses a camera to find and remove the appendix. The operation usually takes 30–60 minutes.'
            : 'Your appendix will be removed through open surgery. The surgeon makes a single cut in the lower right side of your abdomen. This is sometimes necessary if the appendix has burst or if keyhole surgery is not possible.',
        },
        mediaBlock(isLap ? 'Animation: laparoscopic appendectomy' : 'Animation: open appendectomy'),
        {
          kind: 'paragraph',
          text: 'You will be under general anaesthesia, so you will be completely asleep and feel no pain during the operation.',
        },
      ],
    },
    {
      id: 'recovery',
      title: 'Recovery',
      blocks: [
        {
          kind: 'paragraph',
          text: isLap
            ? 'Most patients go home 1–2 days after laparoscopic appendix removal. You will have small dressings over the cuts.'
            : 'After open surgery, you will usually stay in hospital for 3–5 days. Your wound will be closed with stitches or staples.',
        },
        {
          kind: 'list',
          items: [
            'Avoid strenuous activity and heavy lifting for at least 2 weeks.',
            'Keep your wounds clean and dry.',
            'You may eat normally once you feel ready.',
            isLap
              ? 'Most people return to work or school within 1–3 weeks.'
              : 'Full recovery after open surgery usually takes 4–6 weeks.',
          ],
        },
        mediaBlock('Illustration: wound care after appendectomy'),
      ],
    },
    {
      id: 'treatment',
      title: 'Treatment',
      blocks: getTreatmentBlocks(params.treatment),
    },
    {
      id: 'warning-signs',
      title: 'Warning Signs',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Contact the hospital immediately if you notice any of the following after going home:',
        },
        {
          kind: 'list',
          items: [
            'Fever above 38.5 °C',
            'Worsening pain around the wound or abdomen',
            'Redness, swelling, or fluid coming from the wound',
            'Vomiting that prevents you from keeping fluids down',
            'No bowel movement within 3 days of surgery',
            'Difficulty breathing',
          ],
        },
        {
          kind: 'alert',
          variant: 'error',
          text: 'If you are unsure, do not wait — call 1177 or go to the nearest emergency department.',
        },
      ],
    },
  ];
}

function getTreatmentBlocks(treatment: SurgeryParams['treatment']): Section['blocks'] {
  switch (treatment) {
    case 'antibiotics':
      return [
        {
          kind: 'paragraph',
          text: 'You have been prescribed a course of antibiotics to prevent or treat infection after your surgery.',
        },
        {
          kind: 'list',
          items: [
            'Take the full course even if you feel well — stopping early can allow bacteria to return.',
            'Take them at the same time each day, with or after food unless instructed otherwise.',
            'If you experience a rash, severe diarrhoea, or difficulty breathing, contact your care team immediately.',
          ],
        },
        {
          kind: 'alert',
          variant: 'info',
          text: 'Your prescription details and dosing schedule are on the label. Ask your nurse if anything is unclear.',
        },
      ];
    case 'painkillers':
      return [
        {
          kind: 'paragraph',
          text: 'You will be given painkillers to manage discomfort during your recovery.',
        },
        {
          kind: 'list',
          items: [
            'Take your painkillers as prescribed — do not wait until pain becomes severe.',
            'Paracetamol is usually the first choice. Anti-inflammatory tablets (NSAIDs) may be added.',
            'Do not drive or operate machinery while taking strong painkillers.',
            'Avoid alcohol while taking prescription pain medication.',
          ],
        },
      ];
    case 'both':
      return [
        {
          kind: 'paragraph',
          text: 'You have been prescribed both antibiotics and painkillers as part of your recovery.',
        },
        {
          kind: 'list',
          items: [
            'Take the full antibiotic course even if you feel well.',
            'Take painkillers as needed — do not wait for pain to become severe.',
            'Take all medications with food if your stomach is sensitive.',
            'Do not drive while taking strong prescription painkillers.',
            'Avoid alcohol for the duration of your antibiotic course.',
          ],
        },
        {
          kind: 'alert',
          variant: 'info',
          text: 'If you have questions about any of your medications, speak to your nurse or pharmacist.',
        },
      ];
    default:
      return [
        {
          kind: 'paragraph',
          text: 'You are on standard postoperative care. Your care team will advise you on managing any pain or discomfort at home.',
        },
        {
          kind: 'list',
          items: [
            'Over-the-counter paracetamol can be used for mild pain — follow the packet instructions.',
            'Rest as needed and listen to your body.',
            'Attend all scheduled follow-up appointments.',
          ],
        },
      ];
  }
}

export function getSections(surgeryId: string, params: SurgeryParams): Section[] {
  if (surgeryId === 'gallbladder') return getGallbladderSections(params);
  if (surgeryId === 'appendix') return getAppendixSections(params);
  return [];
}
