import Container from '../../common/components/Container.jsx';
import {getTranslations} from "../../common/utils/translations.js";

function TeamShowcase() {
  const translations = getTranslations();
  return (
    <>
      <section className="relative mb-8 overflow-hidden rounded-3xl border border-border bg-card p-6 gradient-mesh sm:p-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
          <div className="min-w-0">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Templates
            </span>
            <h1 className="truncate text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {translations.teamShowcase}
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Create and manage team showcase templates to display your team members.
            </p>
          </div>
        </div>
      </section>

      <div className="bento-card">
        <Container
          type='team_showcase'
          title={translations.teamShowcase}
          editor={true}
        />
      </div>
    </>
  );
}

export default TeamShowcase;
