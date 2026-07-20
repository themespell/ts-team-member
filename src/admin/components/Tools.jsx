import React from 'react';
import { Cloud, Folder, BookOpen, BarChart2, Users, ArrowUpRight } from 'lucide-react';

const toolsData = [
  {
    id: 1,
    title: 'Migration',
    description: 'Effortlessly migrate data between platforms with our tool.',
    icon: Cloud,
    cta: 'Access Now',
    link: 'admin.php?page=tsteam-showcase&path=migration',
  },
  {
    id: 2,
    title: 'Team Member Generator',
    description: 'Generate dummy team member profiles effortlessly for your projects.',
    icon: Users,
    cta: 'Access Now',
    link: 'admin.php?page=tsteam-showcase&path=team-member-generator',
  },
  {
    id: 3,
    title: 'Import / Export',
    description: 'Seamlessly import and export data for better workflow management.',
    icon: Folder,
    cta: 'Coming Soon',
    link: '#',
  },
  {
    id: 4,
    title: 'Custom Field',
    description: 'Add custom fields to tailor your data collection needs.',
    icon: BookOpen,
    cta: 'Coming Soon',
    link: '#',
  },
  {
    id: 5,
    title: 'Custom Font',
    description: 'Personalize your design with custom fonts for a unique look.',
    icon: BarChart2,
    cta: 'Coming Soon',
    link: '#',
  },
];

function Tools() {
  return (
    <>
      <section className="relative mb-8 overflow-hidden rounded-3xl border border-border bg-card p-6 gradient-mesh sm:p-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
          <div className="min-w-0">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Utilities
            </span>
            <h1 className="truncate text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Tools</h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Migration, generation, and import/export utilities for your team data.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {toolsData.map((tool) => {
          const Icon = tool.icon;
          const isDisabled = tool.cta === 'Coming Soon';

          return (
            <a
              key={tool.id}
              href={tool.link}
              className={`bento-card group flex flex-col transition hover:-translate-y-0.5 ${isDisabled ? 'pointer-events-none opacity-60' : ''}`}
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-white shadow-[var(--shadow-glow)]">
                  <Icon className="h-5 w-5" />
                </span>
                {!isDisabled && (
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                )}
              </div>

              <div className="mt-4 flex-1">
                <h3 className="text-lg font-bold text-foreground">{tool.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tool.description}</p>
              </div>

              <div className="mt-4">
                <span className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold ${isDisabled ? 'bg-muted text-muted-foreground' : 'gradient-primary text-white shadow-[var(--shadow-glow)]'}`}>
                  {tool.cta}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}

export default Tools;
