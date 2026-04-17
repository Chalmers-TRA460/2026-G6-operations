import { useParams, useSearchParams, Link } from 'react-router-dom';
import { useApp } from '../../../app/AppContext';
import { useT } from '../../../lib/translations';
import { getSurgery } from '../../surgeries/data/surgeries';
import { getSections } from '../data/content';
import { NurseControls } from '../components/NurseControls';
import { SectionNav } from '../components/SectionNav';
import { PatientContent } from '../components/PatientContent';
import type { TranslationKey } from '../../../lib/translations';
import type { SurgeryParams } from '../../../types';

export function SurgeryPage() {
  const { surgeryId } = useParams<{ surgeryId: string }>();
  const { language, mode } = useApp();
  const t = useT(language);
  const [searchParams] = useSearchParams();

  const surgery = getSurgery(surgeryId ?? '');

  if (!surgery || !surgery.available) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-xl text-base-content/60">Surgery not found.</p>
        <Link to="/" className="btn btn-primary mt-6">{t('backToHome')}</Link>
      </main>
    );
  }

  const params: SurgeryParams = {
    type: (searchParams.get('type') as SurgeryParams['type']) ?? undefined,
    treatment: (searchParams.get('treatment') as SurgeryParams['treatment']) ?? undefined,
  };

  const sections = getSections(surgery.id, params);
  const nameKey = surgery.id as TranslationKey;

  return (
    <>
      {mode === 'nurse' ? (
        <NurseControls surgery={surgery} />
      ) : (
        <>
          <SectionNav sections={sections} />
          <PatientContent title={t(nameKey)} sections={sections} />
        </>
      )}
    </>
  );
}
