import { Link } from 'react-router-dom';
import { useApp } from '../../../app/AppContext';
import { useT } from '../../../lib/translations';
import type { TranslationKey } from '../../../lib/translations';
import type { Surgery } from '../data/surgeries';

type Props = { surgery: Surgery };

export function SurgeryCard({ surgery }: Props) {
  const { language } = useApp();
  const t = useT(language);

  const nameKey = surgery.id as TranslationKey;
  const descKey = `${surgery.id}Desc` as TranslationKey;

  if (!surgery.available) {
    return (
      <div className="card bg-base-200 opacity-60 cursor-not-allowed">
        <div className="card-body">
          <h2 className="card-title text-xl">{t(nameKey)}</h2>
          <p className="text-base-content/60 text-base">{t(descKey)}</p>
          <div className="card-actions mt-4">
            <span className="badge badge-ghost badge-lg">{t('comingSoon')}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/surgery/${surgery.id}`} className="card bg-base-100 border border-base-300 hover:border-primary hover:shadow-md transition-all duration-200">
      <div className="card-body">
        <h2 className="card-title text-xl">{t(nameKey)}</h2>
        <p className="text-base-content/70 text-base">{t(descKey)}</p>
        <div className="card-actions mt-4">
          <span className="btn btn-primary btn-sm">{t('learnMore')}</span>
        </div>
      </div>
    </Link>
  );
}
