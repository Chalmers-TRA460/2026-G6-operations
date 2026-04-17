import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useApp } from '../../../app/AppContext';

export function LanguageSelector() {
  const { language, openLanguageModal } = useApp();

  return (
    <button
      className="btn btn-ghost btn-sm text-base font-medium"
      onClick={openLanguageModal}
      aria-label="Change language"
    >
      <GlobeAltIcon className="size-4" />
      {language === 'sv' ? 'Svenska' : 'English'}
    </button>
  );
}
