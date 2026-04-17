import { XMarkIcon } from '@heroicons/react/24/outline';
import { useApp } from '../../../app/AppContext';
import type { Language } from '../../../types';

const options: { value: Language; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'sv', label: 'Svenska' },
];

export function LanguageModal() {
  const { languageChosen, languageModalOpen, closeLanguageModal, setLanguage, language } = useApp();

  const isOpen = !languageChosen || languageModalOpen;
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-sm text-center">
        {languageChosen && (
          <button
            className="btn btn-ghost btn-sm btn-circle absolute right-4 top-4"
            onClick={closeLanguageModal}
            aria-label="Close"
          >
            <XMarkIcon className="size-4" />
          </button>
        )}

        <h2 className="text-2xl font-bold mb-1">Select your language</h2>
        <p className="text-base-content/60 mb-6">Välj ditt språk</p>

        <div className="flex flex-col gap-3">
          {options.map((opt) => (
            <button
              key={opt.value}
              className={`btn btn-lg w-full ${language === opt.value && languageChosen ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setLanguage(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
