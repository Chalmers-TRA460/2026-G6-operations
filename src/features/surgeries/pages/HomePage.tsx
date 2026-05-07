import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { useApp } from '../../../app/AppContext';
import { useT } from '../../../lib/translations';
import type { Language } from '../../../types';

type CardStyle = CSSProperties & { ['--c']: string; ['--ill']: string };

export function HomePage() {
  const { language, setLanguage } = useApp();
  const t = useT(language);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const categories = useMemo(() => (
    [
      {
        title: 'Stomach and abdomen',
        examples: 'Appendix, gallbladder, hernia, bowel',
        style: { '--c': '#d97706', '--ill': '#fef9c3' } as CardStyle,
        svg: (
          <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 90,8 C 74,8 62,18 60,34 L 58,112 C 58,117 90,120 130,120 C 170,120 202,117 202,112 L 200,34 C 198,18 186,8 170,8 C 159,1 145,-2 130,-2 C 115,-2 101,1 90,8 Z"
              fill="#fde68a"
              stroke="#d97706"
              strokeWidth={1.4}
            />
            <path
              d="M 108,44 C 97,44 90,53 90,64 C 90,77 97,88 112,88 C 121,88 129,82 132,74 L 153,74 C 158,61 153,46 141,43 Z"
              fill="#fbbf24"
              stroke="#b45309"
              strokeWidth={1.2}
            />
            <ellipse cx="116" cy="66" rx="14" ry="16" fill="#d97706" opacity="0.15" />
          </svg>
        ),
      },
      {
        title: 'Bones, joints and hands',
        examples: 'Knee, hip, shoulder, hand, foot',
        style: { '--c': '#059669', '--ill': '#d1fae5' } as CardStyle,
        svg: (
          <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 82,4 C 74,4 68,10 68,18 L 68,62 C 68,70 76,76 90,78 L 170,78 C 184,76 192,70 192,62 L 192,18 C 192,10 186,4 178,4 Z"
              fill="#a7f3d0"
              stroke="#059669"
              strokeWidth={1.4}
            />
            <rect x="62" y="78" width="136" height="10" rx="5" fill="#34d399" opacity="0.55" />
            <rect x="70" y="88" width="120" height="30" rx="18" fill="#a7f3d0" stroke="#059669" strokeWidth={1.4} />
            <ellipse cx="130" cy="83" rx="22" ry="16" fill="#34d399" stroke="#047857" strokeWidth={1.2} />
          </svg>
        ),
      },
      {
        title: 'Ear, nose and throat',
        examples: 'Tonsils, nose, ear, throat',
        style: { '--c': '#0891b2', '--ill': '#cffafe' } as CardStyle,
        svg: (
          <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 130,6 C 108,6 92,22 92,46 C 92,70 104,94 120,104 C 126,108 134,106 136,99 C 138,93 134,86 130,80 C 124,72 120,62 120,50 C 120,38 126,30 132,28 C 138,26 144,30 146,38 C 150,50 146,64 138,72 C 134,76 134,84 138,88 C 144,94 154,90 160,80 C 168,66 170,48 166,30 C 162,14 148,4 130,6 Z"
              fill="#a5f3fc"
              stroke="#0891b2"
              strokeWidth={1.4}
            />
            <path
              d="M 120,50 C 120,38 126,30 132,28 C 138,26 144,30 146,38 C 150,50 146,64 138,72 C 134,76 134,84 138,88 C 134,86 130,80 130,74 C 122,66 118,60 120,50 Z"
              fill="#22d3ee"
              opacity="0.7"
            />
            <circle cx="120" cy="58" r="9" fill="#cffafe" />
            <circle cx="118" cy="58" r="5" fill="#0891b2" opacity="0.25" />
          </svg>
        ),
      },
      {
        title: 'Urinary system',
        examples: 'Kidney, bladder, prostate',
        style: { '--c': '#4338ca', '--ill': '#e0e7ff' } as CardStyle,
        svg: (
          <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 72,16 C 56,16 44,30 44,52 C 44,74 56,92 72,92 C 80,92 86,87 89,78 C 91,69 87,61 87,52 C 87,43 91,35 89,26 C 86,17 80,16 72,16 Z"
              fill="#c7d2fe"
              stroke="#4338ca"
              strokeWidth={1.4}
            />
            <ellipse cx="70" cy="52" rx="14" ry="24" fill="#818cf8" opacity="0.6" />
            <path
              d="M 188,16 C 204,16 216,30 216,52 C 216,74 204,92 188,92 C 180,92 174,87 171,78 C 169,69 173,61 173,52 C 173,43 169,35 171,26 C 174,17 180,16 188,16 Z"
              fill="#c7d2fe"
              stroke="#4338ca"
              strokeWidth={1.4}
            />
            <ellipse cx="190" cy="52" rx="14" ry="24" fill="#818cf8" opacity="0.6" />
            <path d="M 87,60 C 100,68 118,76 130,78" fill="none" stroke="#818cf8" strokeWidth={3.5} strokeLinecap="round" />
            <path d="M 173,60 C 160,68 142,76 130,78" fill="none" stroke="#818cf8" strokeWidth={3.5} strokeLinecap="round" />
            <ellipse cx="130" cy="106" rx="22" ry="13" fill="#c7d2fe" stroke="#4338ca" strokeWidth={1.3} />
            <ellipse cx="130" cy="106" rx="13" ry="8" fill="#818cf8" opacity="0.65" />
          </svg>
        ),
      },
      {
        title: "Women's health",
        examples: 'Gynecological and pregnancy-related surgery',
        style: { '--c': '#be123c', '--ill': '#ffe4e6' } as CardStyle,
        svg: (
          <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 88,76 C 88,56 98,40 116,36 L 116,28 C 116,22 122,18 130,18 C 138,18 144,22 144,28 L 144,36 C 162,40 172,56 172,76 C 172,96 156,110 130,110 C 104,110 88,96 88,76 Z"
              fill="#fecdd3"
              stroke="#be123c"
              strokeWidth={1.4}
            />
            <ellipse cx="130" cy="74" rx="26" ry="26" fill="#fb7185" opacity="0.6" />
            <path d="M 116,36 C 96,32 74,38 64,52" fill="none" stroke="#fda4af" strokeWidth={5} strokeLinecap="round" />
            <path d="M 144,36 C 164,32 186,38 196,52" fill="none" stroke="#fda4af" strokeWidth={5} strokeLinecap="round" />
            <ellipse cx="60" cy="56" rx="12" ry="10" fill="#fecdd3" stroke="#be123c" strokeWidth={1.3} />
            <ellipse cx="200" cy="56" rx="12" ry="10" fill="#fecdd3" stroke="#be123c" strokeWidth={1.3} />
          </svg>
        ),
      },
      {
        title: 'Breast',
        examples: 'Breast procedures and breast cancer surgery',
        style: { '--c': '#ea580c', '--ill': '#fff7ed' } as CardStyle,
        svg: (
          <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
            <rect x="24" y="96" width="212" height="8" rx="4" fill="#fdba74" opacity="0.55" />
            <path
              d="M 24,96 C 24,54 50,16 88,10 C 112,5 130,26 130,58 L 130,96 Z"
              fill="#fed7aa"
              stroke="#ea580c"
              strokeWidth={1.4}
            />
            <path
              d="M 236,96 C 236,54 210,16 172,10 C 148,5 130,26 130,58 L 130,96 Z"
              fill="#fed7aa"
              stroke="#ea580c"
              strokeWidth={1.4}
            />
            <line x1="130" y1="58" x2="130" y2="96" stroke="#ea580c" strokeWidth={1.3} opacity="0.45" />
            <ellipse cx="90" cy="54" rx="28" ry="26" fill="#fb923c" opacity="0.35" />
            <ellipse cx="170" cy="54" rx="28" ry="26" fill="#fb923c" opacity="0.35" />
          </svg>
        ),
      },
      {
        title: 'Skin and reconstruction',
        examples: 'Skin, wounds, plastic surgery',
        style: { '--c': '#92400e', '--ill': '#fdf0dc' } as CardStyle,
        svg: (
          <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 52,14 C 44,14 36,22 36,32 L 36,88 C 36,98 44,106 54,106 L 206,106 C 216,106 224,98 224,88 L 224,32 C 224,22 216,14 208,14 Z"
              fill="#fde8c0"
              stroke="#92400e"
              strokeWidth={1.4}
            />
            <rect x="78" y="34" width="104" height="54" rx="16" fill="#d4a060" opacity="0.68" />
            <rect x="78" y="34" width="104" height="54" rx="16" fill="none" stroke="#92400e" strokeWidth={1.5} strokeDasharray="5 4" />
            <line x1="100" y1="48" x2="160" y2="48" stroke="#78400e" strokeWidth={1} opacity="0.38" strokeLinecap="round" />
            <line x1="100" y1="61" x2="160" y2="61" stroke="#78400e" strokeWidth={1} opacity="0.3" strokeLinecap="round" />
            <line x1="100" y1="74" x2="160" y2="74" stroke="#78400e" strokeWidth={1} opacity="0.24" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: 'Chest, lungs and blood vessels',
        examples: 'Chest, lung, vascular and heart procedures',
        style: { '--c': '#0284c7', '--ill': '#e0f2fe' } as CardStyle,
        svg: (
          <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 102,8 C 84,8 68,22 66,42 C 64,58 70,78 80,90 C 86,98 96,100 104,96 C 112,92 118,84 120,74 C 122,64 120,56 120,48 C 120,38 126,28 126,18 C 122,12 110,6 102,8 Z"
              fill="#bae6fd"
              stroke="#0284c7"
              strokeWidth={1.3}
            />
            <path d="M 70,60 C 80,58 94,56 110,58" fill="none" stroke="#7dd3fc" strokeWidth={1.5} strokeLinecap="round" />
            <ellipse cx="97" cy="52" rx="17" ry="27" fill="#38bdf8" opacity="0.38" />
            <path
              d="M 158,8 C 176,8 192,22 194,42 C 196,58 190,78 180,90 C 174,98 164,100 156,96 C 148,92 142,84 140,74 C 138,64 140,56 140,48 C 140,38 134,28 134,18 C 138,12 150,6 158,8 Z"
              fill="#bae6fd"
              stroke="#0284c7"
              strokeWidth={1.3}
            />
            <path d="M 190,52 C 180,50 166,48 152,50" fill="none" stroke="#7dd3fc" strokeWidth={1.5} strokeLinecap="round" />
            <path d="M 190,72 C 180,70 168,68 156,70" fill="none" stroke="#7dd3fc" strokeWidth={1.5} strokeLinecap="round" />
            <ellipse cx="163" cy="52" rx="17" ry="27" fill="#38bdf8" opacity="0.38" />
            <path
              d="M 130,44 C 128,40 122,36 118,40 C 114,44 114,52 118,58 L 130,70 L 142,58 C 146,52 146,44 142,40 C 138,36 132,40 130,44 Z"
              fill="#38bdf8"
              opacity="0.92"
              stroke="#0284c7"
              strokeWidth={1.1}
            />
          </svg>
        ),
      },
      {
        title: 'Brain, nerves, face and mouth',
        examples: 'Brain, jaw, mouth and face',
        style: { '--c': '#7e22ce', '--ill': '#f3e8ff' } as CardStyle,
        svg: (
          <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="130" cy="62" r="54" fill="#ede9fe" stroke="#7e22ce" strokeWidth={1.4} />
            <path
              d="M 84,58 C 84,38 94,18 110,14 C 118,12 125,17 130,26 C 135,17 142,12 150,14 C 166,18 176,38 176,58 C 176,70 170,78 162,80 C 158,88 150,93 142,90 C 136,93 130,93 130,93 C 130,93 124,93 118,90 C 110,93 102,88 98,80 C 90,78 84,70 84,58 Z"
              fill="#c4b5fd"
              opacity="0.78"
              stroke="#7c3aed"
              strokeWidth={1.1}
            />
            <line x1="130" y1="14" x2="130" y2="93" stroke="#f3e8ff" strokeWidth={2} strokeLinecap="round" opacity="0.75" />
            <path d="M 92,46 C 98,42 106,44 110,50" fill="none" stroke="#f3e8ff" strokeWidth={2} strokeLinecap="round" opacity="0.7" />
            <path d="M 88,66 C 96,62 104,64 108,70" fill="none" stroke="#f3e8ff" strokeWidth={2} strokeLinecap="round" opacity="0.65" />
            <path d="M 168,46 C 162,42 154,44 150,50" fill="none" stroke="#f3e8ff" strokeWidth={2} strokeLinecap="round" opacity="0.7" />
            <path d="M 172,66 C 164,62 156,64 152,70" fill="none" stroke="#f3e8ff" strokeWidth={2} strokeLinecap="round" opacity="0.65" />
            <ellipse cx="130" cy="104" rx="19" ry="10" fill="#c4b5fd" opacity="0.4" />
          </svg>
        ),
      },
      {
        title: 'Weight-loss surgery',
        examples: 'Operations to treat severe obesity',
        style: { '--c': '#4d7c0f', '--ill': '#ecfccb' } as CardStyle,
        svg: (
          <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="130" cy="16" r="14" fill="#d9f99d" stroke="#4d7c0f" strokeWidth={1.4} />
            <path
              d="M 94,38 C 82,38 74,46 72,56 L 70,108 C 70,114 98,118 130,118 C 162,118 190,114 190,108 L 188,56 C 186,46 178,38 166,38 C 156,34 144,32 130,32 C 116,32 104,34 94,38 Z"
              fill="#d9f99d"
              stroke="#4d7c0f"
              strokeWidth={1.4}
            />
            <path
              d="M 112,56 C 104,56 98,63 98,72 C 98,83 104,91 116,91 C 124,91 130,86 132,79 L 148,79 C 152,68 148,56 138,54 Z"
              fill="#86efac"
              opacity="0.9"
              stroke="#166534"
              strokeWidth={1.1}
            />
          </svg>
        ),
      },
      {
        title: 'Emergency or trauma',
        examples: 'Urgent surgery after injury or sudden illness',
        style: { '--c': '#dc2626', '--ill': '#fee2e2' } as CardStyle,
        svg: (
          <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="130" cy="60" r="52" fill="#fecaca" stroke="#dc2626" strokeWidth={1.4} />
            <rect x="119" y="14" width="22" height="92" rx="11" fill="#f87171" />
            <rect x="84" y="49" width="92" height="22" rx="11" fill="#f87171" />
            <circle cx="130" cy="60" r="13" fill="#dc2626" opacity="0.2" />
          </svg>
        ),
      },
      {
        title: 'Other surgery',
        examples: 'Transplant, cancer, endocrine, day surgery',
        style: { '--c': '#475569', '--ill': '#f1f5f9' } as CardStyle,
        svg: (
          <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
            <rect x="62" y="10" width="136" height="100" rx="28" fill="#e2e8f0" stroke="#475569" strokeWidth={1.4} />
            <rect x="118" y="26" width="24" height="68" rx="12" fill="#94a3b8" />
            <rect x="88" y="48" width="84" height="24" rx="12" fill="#94a3b8" />
            <circle cx="130" cy="60" r="11" fill="#475569" opacity="0.18" />
            <circle cx="34" cy="28" r="9" fill="#e2e8f0" stroke="#475569" strokeWidth={1.2} />
            <circle cx="226" cy="28" r="9" fill="#e2e8f0" stroke="#475569" strokeWidth={1.2} />
            <circle cx="34" cy="92" r="9" fill="#e2e8f0" stroke="#475569" strokeWidth={1.2} />
            <circle cx="226" cy="92" r="9" fill="#e2e8f0" stroke="#475569" strokeWidth={1.2} />
          </svg>
        ),
      },
    ]
  ), []);

  function handleSearch() {
    if (!searchText.trim()) {
      searchInputRef.current?.focus();
    }
  }

  function handleCategorySelect(text: string) {
    if (text === 'Stomach and abdomen') {
      navigate('/category/stomach-abdomen');
      return;
    }

    setSearchText(text);
    searchInputRef.current?.focus();
  }

  return (
    <main className="landing-page">
      <header className="landing-header">
        <div className="landing-container">
          <div className="landing-header-inner">
            <Link to="/" className="landing-logo" aria-label="My Surgery Guide home">
              <div className="landing-logo-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H3a1 1 0 0 1 0-2h8V3a1 1 0 0 1 1-1z" />
                </svg>
              </div>
              <span className="landing-logo-name">
                My <em>Surgery</em> Guide
              </span>
            </Link>
            <div className="landing-lang-wrap">
              <label className="landing-lang-label" htmlFor="landing-lang-select">{t('homeLanguageLabel')}</label>
              <select
                className="landing-lang-select"
                id="landing-lang-select"
                value={language}
                onChange={(event) => setLanguage(event.target.value as Language)}
              >
                <option value="en">{t('english')}</option>
                <option value="sv">{t('swedish')}</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <section className="landing-hero">
        <div className="landing-container">
          <div className="landing-hero-inner">
            <h1 className="landing-hero-heading">{t('homeTitle')}</h1>
            <p className="landing-hero-sub">{t('homeSubtitle')}</p>
            <div className="landing-search-box" role="search">
              <label htmlFor="surgery-search" className="landing-search-label">
                {t('homeSearchLabel')}
              </label>
              <div className="landing-search-row">
                <input
                  ref={searchInputRef}
                  type="search"
                  id="surgery-search"
                  className="landing-search-input"
                  placeholder={t('homeSearchPlaceholder')}
                  autoComplete="off"
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                />
                <button className="landing-search-btn" onClick={handleSearch}>
                  {t('homeSearchButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-categories" aria-labelledby="landing-cat-heading">
        <div className="landing-container">
          <div className="landing-cat-header">
            <p className="landing-cat-eyebrow">{t('homeBrowseEyebrow')}</p>
            <h2 className="landing-cat-heading" id="landing-cat-heading">{t('homeBrowseHeading')}</h2>
            <p className="landing-cat-sub">{t('homeBrowseSubtitle')}</p>
          </div>

          <div className="landing-cat-grid" role="list">
            {categories.map((category) => (
              <button
                key={category.title}
                className="landing-cat-card"
                role="listitem"
                style={category.style}
                onClick={() => handleCategorySelect(category.title)}
              >
                <div className="landing-cat-ill" aria-hidden="true">
                  {category.svg}
                </div>
                <div className="landing-cat-body">
                  <div className="landing-cat-title">{category.title}</div>
                  <div className="landing-cat-examples">{category.examples}</div>
                </div>
                <span className="landing-cat-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="landing-container">
          <p className="landing-footer-text">{t('homeFooterNote')}</p>
        </div>
      </footer>
    </main>
  );
}
