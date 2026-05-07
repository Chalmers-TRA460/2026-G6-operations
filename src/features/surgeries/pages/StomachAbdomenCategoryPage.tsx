import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../../app/AppContext';
import { useT } from '../../../lib/translations';

export function StomachAbdomenCategoryPage() {
  const { language } = useApp();
  const t = useT(language);
  const [query, setQuery] = useState('');

  const guides = useMemo(() => (
    [
      {
        title: 'Appendix surgery',
        helper: 'Lower right stomach area and acute pain.',
        accent: '#d97706',
        fill: '#fef9c3',
      },
      {
        title: 'Gallbladder surgery',
        helper: 'Upper right abdomen, often gallstones.',
        accent: '#ea580c',
        fill: '#fff7ed',
      },
      {
        title: 'Hernia surgery',
        helper: 'Bulge in the groin or belly wall.',
        accent: '#be123c',
        fill: '#ffe4e6',
      },
      {
        title: 'Bowel surgery',
        helper: 'Colon or intestine procedures.',
        accent: '#059669',
        fill: '#d1fae5',
      },
      {
        title: 'Stomach surgery',
        helper: 'Stomach or gastric procedures.',
        accent: '#0891b2',
        fill: '#cffafe',
      },
      {
        title: 'Liver, bile duct or pancreas surgery',
        helper: 'Upper abdomen and digestive organs.',
        accent: '#4338ca',
        fill: '#e0e7ff',
      },
    ]
  ), []);

  const filteredGuides = guides.filter((guide) =>
    guide.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <main className="landing-page">
      <section className="landing-category-hero">
        <div className="landing-container">
          <div className="landing-category-header">
            <Link className="landing-back" to="/">
              <span aria-hidden="true">←</span>
              {t('categoryBack')}
            </Link>
            <div>
              <p className="landing-category-eyebrow">{t('homeBrowseEyebrow')}</p>
              <h1 className="landing-category-title">Stomach and abdomen</h1>
            </div>
          </div>

          <div className="landing-category-search">
            <label className="landing-search-label" htmlFor="category-search">
              {t('categorySearchLabel')}
            </label>
            <div className="landing-search-row">
              <input
                className="landing-search-input"
                id="category-search"
                type="search"
                placeholder={t('categorySearchPlaceholder')}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>

          <div className="landing-category-helper">
            <div className="landing-helper-card">
              <div>
                <h2 className="landing-helper-title">{t('categoryHelperTitle')}</h2>
                <p className="landing-helper-text">{t('categoryHelperText')}</p>
              </div>
              <div className="landing-helper-visual" aria-hidden="true">
                <svg viewBox="0 0 120 80">
                  <path
                    d="M 35,12 C 24,12 16,20 15,32 L 14,68 C 14,72 35,74 60,74 C 85,74 106,72 106,68 L 105,32 C 104,20 96,12 85,12 C 78,7 70,5 60,5 C 50,5 42,7 35,12 Z"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 44,34 C 37,34 33,40 33,47 C 33,56 39,62 47,62 C 52,62 57,59 60,54 L 74,54 C 77,46 74,36 66,34 Z"
                    fill="#fbbf24"
                    stroke="#b45309"
                    strokeWidth="1.2"
                  />
                  <circle cx="46" cy="48" r="6" fill="#d97706" opacity="0.2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-category-guides">
        <div className="landing-container">
          <div className="landing-category-guides-header">
            <h2 className="landing-section-title">{t('categoryAvailableGuides')}</h2>
          </div>
          <div className="landing-guides-grid" role="list">
            {filteredGuides.map((guide) => (
              <button
                key={guide.title}
                className="landing-guide-card"
                role="listitem"
                style={{ ['--c' as const]: guide.accent, ['--ill' as const]: guide.fill }}
              >
                <div className="landing-guide-ill" aria-hidden="true">
                  <svg viewBox="0 0 120 80">
                    <rect x="14" y="14" width="92" height="52" rx="18" fill="currentColor" opacity="0.12" />
                    <path
                      d="M 40,26 C 34,26 30,32 30,40 C 30,48 35,54 43,54 C 49,54 54,50 56,44 L 72,44 C 75,36 71,28 63,26 Z"
                      fill="currentColor"
                      opacity="0.45"
                    />
                    <circle cx="46" cy="42" r="6" fill="currentColor" opacity="0.3" />
                  </svg>
                </div>
                <div className="landing-guide-body">
                  <div className="landing-guide-title">{guide.title}</div>
                  <div className="landing-guide-sub">{guide.helper}</div>
                </div>
                <span className="landing-guide-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
