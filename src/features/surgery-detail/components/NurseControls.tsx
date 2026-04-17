import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../../../app/AppContext';
import { useT } from '../../../lib/translations';
import type { TranslationKey } from '../../../lib/translations';
import type { Surgery } from '../../surgeries/data/surgeries';

type Props = { surgery: Surgery };

export function NurseControls({ surgery }: Props) {
  const { language } = useApp();
  const t = useT(language);
  const [searchParams, setSearchParams] = useSearchParams();
  const [copied, setCopied] = useState(false);

  function handleParamChange(key: string, value: string) {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next, { replace: true });
  }

  const shareUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;

  function copyLink() {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="card bg-base-100 border border-base-300">
        <div className="card-body gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">{t('configureTitle')}</h2>
            <p className="text-base-content/60">{t('configureSubtitle')}</p>
          </div>

          {surgery.params.map((param) => (
            <div key={param.key} className="form-control gap-2">
              <label className="label pb-0">
                <span className="label-text text-base font-semibold">
                  {t(param.label as TranslationKey)}
                </span>
              </label>
              <div className="flex flex-wrap gap-2">
                {param.options.map((opt) => {
                  const current = searchParams.get(param.key) ?? param.options[0].value;
                  const active = current === opt.value;
                  return (
                    <button
                      key={opt.value}
                      className={`btn btn-sm ${active ? 'btn-primary' : 'btn-outline'}`}
                      onClick={() => handleParamChange(param.key, opt.value)}
                    >
                      {t(opt.label as TranslationKey)}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="divider my-0" />

          <div className="form-control gap-2">
            <label className="label pb-0">
              <span className="label-text text-base font-semibold">{t('shareLink')}</span>
            </label>
            <div className="join w-full">
              <input
                className="input input-bordered join-item flex-1 text-sm font-mono"
                value={shareUrl}
                readOnly
                onFocus={(e) => e.target.select()}
              />
              <button
                className={`btn join-item ${copied ? 'btn-success' : 'btn-primary'}`}
                onClick={copyLink}
              >
                {copied ? t('copied') : t('copyLink')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
