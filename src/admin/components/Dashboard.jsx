import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  CirclePlay,
  LayoutTemplate,
  MessageCircle,
  Sparkles,
  Users,
} from 'lucide-react';
import { fetchData } from '../../common/services/fetchData';
import {getTranslations} from "../../common/utils/translations.js";

function Dashboard() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [showcases, setShowcases] = useState([]);
  const [loading, setLoading] = useState(true);
  const tsteamImage = tsteam_settings.assets_path;
  const translations = getTranslations();

  useEffect(() => {
    let completed = 0;
    const finish = () => {
      completed += 1;
      if (completed === 2) {
        setLoading(false);
      }
    };

    fetchData('tsteam/team_member/fetch', (response) => {
      if (response?.success && Array.isArray(response.data)) {
        setTeamMembers(response.data);
      }
      finish();
    });

    fetchData('tsteam/team_showcase/fetch', (response) => {
      if (response?.success && Array.isArray(response.data)) {
        setShowcases(response.data);
      }
      finish();
    });
  }, []);

  const dashboardStats = useMemo(() => {
    const totalMembers = teamMembers.length;
    const showcaseCount = showcases.length;

    return [
      { label: 'Total members', value: totalMembers, helper: `${totalMembers} added`, icon: Users },
      { label: 'Showcases', value: showcaseCount, helper: 'Active templates', icon: LayoutTemplate },
    ];
  }, [teamMembers, showcases]);

  const recentMembers = useMemo(() => teamMembers.slice(0, 5), [teamMembers]);

  return (
    <>
      <section className="relative mb-8 overflow-hidden rounded-3xl border border-border bg-card p-6 gradient-mesh sm:p-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
          <div className="min-w-0">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Live overview
            </span>
            <h1 className="truncate text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your team command center
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Live counts from your team members, showcases, and categories.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="?page=tsteam-showcase"
              className="inline-flex items-center gap-2 rounded-xl gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
            >
              <Sparkles className="h-4 w-4" />
              Create Showcase
            </a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-6">
        {dashboardStats.map(({ label, value, helper, icon: Icon }) => (
          <div key={label} className="bento-card md:col-span-3 lg:col-span-3 xl:col-span-3 !p-5 flex min-h-[130px] flex-col justify-between">
            <div className="flex items-start justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </span>
            </div>

            <div className="mt-3">
              <div className="text-3xl font-bold tracking-tight text-foreground">{loading ? '...' : value}</div>
              <div className="mt-1 text-xs font-medium text-muted-foreground">{loading ? 'Loading' : helper}</div>
            </div>
          </div>
        ))}

        <div className="bento-card gradient-mesh relative overflow-hidden md:col-span-6 lg:col-span-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                Quick start
              </span>
              <h3 className="mt-3 text-2xl font-bold text-foreground">Team member setup status</h3>
              <p className="mt-1.5 max-w-md text-sm text-muted-foreground">
                Quick links to get your team pages up and running.
              </p>
            </div>

            <span className="grid h-11 w-11 place-items-center rounded-2xl gradient-primary text-white shadow-[var(--shadow-glow)]">
              <Users className="h-5 w-5" />
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground">
              Members: {teamMembers.length} added
            </span>
            <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground">
              Showcases: {showcases.length} ready
            </span>
          </div>

          <a
            href="?page=tsteam-showcase"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
          >
            Open Showcases
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="bento-card md:col-span-6 lg:col-span-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-foreground">Recent team members</h3>
              <p className="text-xs text-muted-foreground">Latest added team members</p>
            </div>
            <a href="?page=tsteam-showcase&path=team-member" className="text-xs font-semibold text-primary hover:underline">
              View all members
            </a>
          </div>

          {recentMembers.length ? (
            <ul className="divide-y divide-border">
              {recentMembers.map((item) => {
                const initials = (item.name || '?')
                  .split(' ')
                  .slice(0, 2)
                  .map((part) => part.charAt(0).toUpperCase())
                  .join('');

                return (
                  <li key={item.post_id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3">
                    <div className="flex min-w-0 items-center gap-3">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="h-9 w-9 shrink-0 rounded-full object-cover" />
                      ) : (
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full gradient-primary text-xs font-bold text-white">
                          {initials}
                        </span>
                      )}
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-foreground">{item.name}</div>
                        <div className="truncate text-xs text-muted-foreground">{item.designation || 'Team member'}</div>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                        Member
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="rounded-2xl border border-border bg-muted/30 p-5 text-sm text-muted-foreground">
              No team members yet.
            </div>
          )}
        </div>

        <div className="bento-card md:col-span-6 lg:col-span-6">
          <h3 className="mb-5 text-lg font-bold text-foreground">Resources</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <a
              href="https://themespell.com/docs/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-border bg-muted/30 p-4 transition hover:border-primary/40 hover:bg-primary/5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary text-white">
                <BookOpen className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground group-hover:text-primary">Documentation</div>
                <div className="mt-0.5 text-xs text-muted-foreground">Guides for setup and customization</div>
              </div>
            </a>

            <a
              href="https://wordpress.org/support/plugin/ts-team-member/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-border bg-muted/30 p-4 transition hover:border-primary/40 hover:bg-primary/5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary text-white">
                <MessageCircle className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground group-hover:text-primary">Help & Support</div>
                <div className="mt-0.5 text-xs text-muted-foreground">Get help from the community</div>
              </div>
            </a>

            <a
              href="https://www.youtube.com/watch?v=DCMKZ5AWrPc&list=PLPdGHlpHY56CjRlUbd6vwtF45HC3vl5-D"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-border bg-muted/30 p-4 transition hover:border-primary/40 hover:bg-primary/5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary text-white">
                <CirclePlay className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground group-hover:text-primary">Video Tutorials</div>
                <div className="mt-0.5 text-xs text-muted-foreground">Watch walkthroughs for common setups</div>
              </div>
            </a>
          </div>
        </div>

        <div
          className="bento-card relative overflow-hidden border-transparent text-white md:col-span-3 lg:col-span-3"
          style={{ background: 'linear-gradient(135deg, #1a1035 0%, #2d1a5e 52%, #4a2d8a 100%)' }}
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(circle at top left, rgba(176, 138, 239, 0.28), transparent 30%), radial-gradient(circle at bottom right, rgba(139, 92, 230, 0.22), transparent 34%)',
            }}
          />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-glow">
              <Sparkles className="h-3 w-3" />
              Pro
            </span>
            <h3 className="mt-3 text-xl font-bold text-white">Unlock premium layouts</h3>
            <p className="mt-1.5 text-sm text-white/70">Advanced templates, richer team displays, more customization.</p>
            <a
              href="https://themespell.com/ts-product/ts-team-member/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#1a1035] transition hover:bg-primary-glow hover:text-white"
            >
              Upgrade
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="bento-card md:col-span-3 lg:col-span-3">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Latest Showcase</div>
            <div className="mt-2 text-lg font-bold text-foreground">
              {loading ? 'Loading...' : showcases[0]?.title || 'No showcases yet'}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {showcases[0]
                ? `Shortcode: [tsteam_showcase id="${showcases[0].post_id}"]`
                : 'Create your first showcase to get started.'}
            </p>
          </div>

          <a href="?page=tsteam-showcase" className="mt-auto pt-4 text-sm font-semibold text-primary">
            Manage showcases &rarr;
          </a>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
