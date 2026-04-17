import { useApp } from '../../../app/AppContext';
import { useT } from '../../../lib/translations';
import type { TranslationKey } from '../../../lib/translations';
import type { Section } from '../../../types';

const sectionLabelKeys: Record<string, TranslationKey> = {
  preparation: 'preparation',
  procedure: 'procedure',
  recovery: 'recovery',
  treatment: 'treatment',
  'warning-signs': 'warningSigns',
};

type Props = { sections: Section[] };

export function SectionNav({ sections }: Props) {
  const { language } = useApp();
  const t = useT(language);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <nav className="sticky top-16 z-30 bg-base-100 border-b border-base-300 shadow-sm">
      <div className="max-w-3xl mx-auto px-4">
        <ul className="flex gap-1 overflow-x-auto py-2 scrollbar-none">
          {sections.map((section) => {
            const labelKey = sectionLabelKeys[section.id];
            const label = labelKey ? t(labelKey) : section.title;
            return (
              <li key={section.id} className="flex-shrink-0">
                <button
                  className="btn btn-ghost btn-sm text-sm font-medium"
                  onClick={() => scrollTo(section.id)}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
