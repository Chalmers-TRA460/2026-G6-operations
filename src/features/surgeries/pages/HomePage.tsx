import { useApp } from '../../../app/AppContext';
import { useT } from '../../../lib/translations';
import { surgeries } from '../data/surgeries';
import { SurgeryCard } from '../components/SurgeryCard';

export function HomePage() {
  const { language } = useApp();
  const t = useT(language);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3">{t('homeTitle')}</h1>
        <p className="text-xl text-base-content/60">{t('homeSubtitle')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {surgeries.map((surgery) => (
          <SurgeryCard key={surgery.id} surgery={surgery} />
        ))}
      </div>
    </main>
  );
}
