import TeamShowcase from './components/TeamShowcase';
import TeamMember from './components/TeamMember';
import MemberCategory from "./components/MamberCategory.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Tools from "./components/Tools.jsx";
import Migration from "./components/tools/migration/Migration.jsx";
import TeamMemberGenerator from "./components/tools/TeamMemberGenerator/TeamMemberGenerator.jsx";
import Topbar from './components/Topbar';

import {getTranslations} from "../common/utils/translations.js";

const currentUrl = window.location.href;
const translations = getTranslations();

function AdminPanel() {
  const isTeamMemberPage = currentUrl.includes(`&path=team-member`);
  const isMemberCategoryPage = currentUrl.includes(`&path=member-category`);
  const isDashboardPage = currentUrl.includes(`&path=dashboard`);
  const isToolsPage = currentUrl.includes(`&path=tools`);
  const isMigrationPage = currentUrl.includes(`&path=migration`);
  const isTeamMemberGenerator = currentUrl.includes(`&path=team-member-generator`);

  let content = <TeamShowcase />;
  let pageTitle = translations.teamShowcase;

  if (isDashboardPage) {
    content = <Dashboard />;
    pageTitle = translations.dashboard;
  } else if (isToolsPage) {
    content = <Tools />;
    pageTitle = 'Tools';
  } else if (isMigrationPage) {
    content = <Migration />;
    pageTitle = 'Migration';
  } else if (isTeamMemberGenerator) {
    content = <TeamMemberGenerator />;
    pageTitle = 'Team Member Generator';
  } else if (isMemberCategoryPage) {
    content = <MemberCategory />;
    pageTitle = 'Member Category';
  } else if (isTeamMemberPage) {
    content = <TeamMember />;
    pageTitle = translations.teamMember;
  }

  return (
    <div className="relative">
      <div className="tsteam__admin--style min-h-screen overflow-x-hidden bg-background">
        <Topbar />

        <main className="mx-auto w-full max-w-[1400px] px-3 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
          {content}
        </main>

        <footer className="mx-auto w-full max-w-[1400px] px-3 pb-6 pt-4 text-xs text-muted-foreground sm:px-4 lg:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border/70 pt-6">
            <span>&copy; 2026 TS Team Member. Crafted for WordPress.</span>
            <span className="flex items-center gap-3">
              <a href="https://wordpress.org/support/plugin/ts-team-member" target="_blank" rel="noreferrer" className="hover:text-foreground">
                Docs
              </a>
              <a href="https://themespell.com/ts-team-member" target="_blank" rel="noreferrer" className="hover:text-foreground">
                Changelog
              </a>
              <a href="https://themespell.com/ts-team-member" target="_blank" rel="noreferrer" className="hover:text-foreground">
                Roadmap
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default AdminPanel;
