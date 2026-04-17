import { PlayCircleIcon } from '@heroicons/react/24/outline';
import type { Section, ContentBlock } from '../../../types';

type Props = { title: string; sections: Section[] };

export function PatientContent({ title, sections }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-10 pb-10">
      <h1 className="text-3xl font-bold mb-10">{title}</h1>
      <div className="flex flex-col gap-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-base-300">
              {section.title}
            </h2>
            <div className="flex flex-col gap-5">
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.kind) {
    case 'paragraph':
      return <p className="text-lg leading-relaxed">{block.text}</p>;

    case 'list':
      return (
        <ul className="space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-lg leading-relaxed">
              <span className="text-primary mt-1 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'alert':
      return (
        <div
          className={`alert ${
            block.variant === 'error'
              ? 'alert-error alert-outline'
              : block.variant === 'warning'
              ? 'alert-warning'
              : 'alert-info'
          }`}
        >
          <span className="text-base">{block.text}</span>
        </div>
      );

    case 'media':
      return (
        <div className="aspect-video bg-base-200 rounded-box flex items-center justify-center border border-base-300">
          <div className="text-center text-base-content/40">
            <PlayCircleIcon className="size-10 mb-2" />
            <p className="text-sm">{block.label}</p>
          </div>
        </div>
      );
  }
}
