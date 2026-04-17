import { Link } from 'react-router-dom';
import { useApp } from '../app/AppContext';
import { LanguageSelector } from '../features/language/components/LanguageSelector';
import { useT } from '../lib/translations';

export function Header() {
  const { mode, setMode, language } = useApp();
  const t = useT(language);

  return (
    <header className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-40 px-4 lg:px-8">
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-primary font-bold text-xl">SurgInfo</span>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <LanguageSelector />

        <label className="flex items-center gap-2 cursor-pointer select-none">
          <span className={`text-sm font-medium ${mode === 'patient' ? 'text-base-content' : 'text-base-content/40'}`}>
            {t('patientMode')}
          </span>
          <input
            type="checkbox"
            className="toggle toggle-primary toggle-sm"
            checked={mode === 'nurse'}
            onChange={(e) => setMode(e.target.checked ? 'nurse' : 'patient')}
            aria-label="Toggle nurse mode"
          />
          <span className={`text-sm font-medium ${mode === 'nurse' ? 'text-primary' : 'text-base-content/40'}`}>
            {t('nurseMode')}
          </span>
        </label>
      </div>
    </header>
  );
}
