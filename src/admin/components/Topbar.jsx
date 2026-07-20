import {
  ArrowUpRight,
  Bell,
  LayoutDashboard,
  LifeBuoy,
  Puzzle,
  Settings,
  Sparkles,
  UserRound,
  Users,
  FolderTree,
  Wrench,
} from 'lucide-react';
import globalSettings from '../../common/utils/globalSettings';

const navIcons = {
  dashboard: LayoutDashboard,
  teamShowcase: Users,
  teamMember: UserRound,
  memberCategory: FolderTree,
  tools: Wrench,
  supportForum: LifeBuoy,
};

function Topbar() {
  const currentUrl = window.location.href;
  const { menuitems, proLink, version } = globalSettings.topbar;
  const tsteamLogo = tsteam_settings.assets_path;

  const isActiveItem = (link, key) => {
    if (!link.startsWith('?page=tsteam-showcase')) {
      return false;
    }

    const marker = link.replace('?page=tsteam-showcase', '');

    // Team Showcase is the default page (no path param) - show active when on base page
    if (key === 'teamShowcase' && !currentUrl.includes('&path=')) {
      return true;
    }

    // For other items, only match when the exact path marker is present
    if (marker && currentUrl.includes(marker)) {
      return true;
    }

    return false;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center gap-4 px-4 sm:px-6">
        <a href="?page=tsteam-showcase&path=dashboard" className="group flex items-center gap-2.5">
          <img src={`${tsteamLogo}/img/tsteam_icon.svg`} className="h-9 w-9 shrink-0 tsteam-topbar-logo" alt="TS Team Member" />

          <span className="hidden text-[15px] font-bold tracking-tight text-foreground sm:block">
            TS Team Member
          </span>
        </a>

        <nav className="ml-2 hidden items-center gap-1 md:flex">
          {Object.entries(menuitems).map(([key, item]) => {
            const Icon = navIcons[key] || LayoutDashboard;
            const isActive = isActiveItem(item.link, key);
            const isExternal = item.link.startsWith('http') || item.link.startsWith('admin.php');

            return (
              <a
                key={key}
                href={item.link}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className={`group relative flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
                {isActive ? <span className="absolute inset-x-2 -bottom-[17px] h-0.5 rounded-full gradient-primary" /> : null}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {proLink?.link ? (
            <a
              href={proLink.link}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary/10 sm:inline-flex"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {proLink.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : null}

          <span className="hidden items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-semibold text-muted-foreground sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            v {version}
          </span>

          <button type="button" className="relative grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary-glow" />
          </button>

          <a
            href="admin.php?page=tsteam-pro-account"
            className="grid h-9 w-9 place-items-center rounded-full gradient-primary text-white shadow-[var(--shadow-glow)]"
          >
            <UserRound className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-border/70 md:hidden">
        <div className="mx-auto flex w-full max-w-[1400px] gap-1 overflow-x-auto px-4 py-2 sm:px-6">
          {Object.entries(menuitems).map(([key, item]) => {
            const Icon = navIcons[key] || LayoutDashboard;
            const isActive = isActiveItem(item.link, key);
            const isExternal = item.link.startsWith('http') || item.link.startsWith('admin.php');

            return (
              <a
                key={key}
                href={item.link}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Topbar;
