import TeamShowcase from './components/TeamShowcase';
import TeamMember from './components/TeamMember';
import MemberCategory from "./components/MamberCategory.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Tools from "./components/Tools.jsx";
import QATester from "./components/QATester.jsx";
import Migration from "./components/tools/migration/Migration.jsx";
import TeamMemberGenerator from "./components/tools/TeamMemberGenerator/TeamMemberGenerator.jsx";
import Topbar from './components/Topbar';

import {getTranslations} from "../common/utils/translations.js";

const currentUrl = window.location.href;
const translations = getTranslations();
const devMode = window.tsteam_settings?.devmode ?? false;

function AdminPanel() {
  const isTeamMemberPage = currentUrl.includes(`&path=team-member`);
  const isMemberCategoryPage = currentUrl.includes(`&path=member-category`);
  const isDashboardPage = currentUrl.includes(`&path=dashboard`);
  const isToolsPage = currentUrl.includes(`&path=tools`);
  const isQATesterPage = currentUrl.includes(`&path=qa-tester`);
  const isMigrationPage = currentUrl.includes(`&path=migration`);
  const isTeamMemberGenerator = currentUrl.includes(`&path=team-member-generator`);

    if (isDashboardPage) {
        return (
            <>
                <Topbar title={translations.dashboard}/>
                <div className='tsteam__admin--style overflow-x-auto w-full flex justify-center pt-12 pb-12'>
                    <div className='flex justify-between gap-8 w-4/6'>
                        <div className='w-full'>
                            <Dashboard/>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (isToolsPage) {
        return (
            <>
                <Topbar title={'Tools'}/>
                <div className='tsteam__admin--style overflow-x-auto w-full flex justify-center pt-12 pb-12'>
                    <div className='flex justify-between gap-8 w-4/6'>
                        <div className='w-full'>
                            <Tools/>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (isQATesterPage) {
        // Only render QATester if devMode is enabled
        if (!devMode) {
            return (
                <>
                    <Topbar title={'Access Denied'}/>
                    <div className='tsteam__admin--style overflow-x-auto w-full flex justify-center pt-12 pb-12'>
                        <div className='flex justify-between gap-8 w-4/6'>
                            <div className='w-full'>
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
                                    <h2 className="text-xl font-semibold text-yellow-800 mb-2">Developer Mode Required</h2>
                                    <p className="text-yellow-700">The QA Tester is only available when developer mode is enabled.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        return (
            <>
                <Topbar title={'QA Tester'}/>
                <div className='tsteam__admin--style overflow-x-auto w-full flex justify-center pt-12 pb-12'>
                    <div className='flex justify-between gap-8 w-4/6'>
                        <div className='w-full'>
                            <QATester/>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (isMigrationPage) {
        return (
            <>
                <Topbar title={'Migration'}/>
                <div className='tsteam__admin--style overflow-x-auto w-full flex justify-center pt-12 pb-12'>
                    <div className='flex justify-between gap-8 w-4/6'>
                        <div className='w-full'>
                            <Migration/>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (isTeamMemberGenerator) {
        return (
            <>
                <Topbar title={'Team Member Generator'}/>
                <div className='tsteam__admin--style overflow-x-auto w-full flex justify-center pt-12 pb-12'>
                    <div className='flex justify-between gap-8 w-4/6'>
                        <div className='w-full'>
                            <TeamMemberGenerator/>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (isMemberCategoryPage) {
    return (
        <>
            <Topbar title={'Member Category'}/>
            <div className='tsteam__admin--style overflow-x-auto w-full flex justify-center pt-12 pb-12'>
                <div className='flex justify-between gap-8 w-4/6'>
                    <div className='w-full'>
                        <MemberCategory/>
                    </div>
                </div>
            </div>
        </>
    );
    } else {
        return (
            <>
                <Topbar title={isTeamMemberPage ? translations.teamMember : translations.teamShowcase}/>
                <div className='tsteam__admin--style overflow-x-auto w-full flex justify-center pt-12 pb-12'>
                    <div className='flex justify-between gap-8 w-4/6'>
                        <div className='w-full'>
                            {isTeamMemberPage ? (
                                <TeamMember/>
                            ) : (
                                <TeamShowcase />
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AdminPanel;