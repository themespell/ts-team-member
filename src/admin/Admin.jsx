import TeamShowcase from './components/TeamShowcase';
import TeamMember from './components/TeamMember';
import Dashboard from "./components/Dashboard.jsx";
import Tools from "./components/Tools.jsx";
import Migration from "./components/tools/migration/Migration.jsx";
import Topbar from './components/Topbar';

import {getTranslations} from "../common/utils/translations.js";

const currentUrl = window.location.href;
const translations = getTranslations();

function AdminPanel() {
  const isTeamMemberPage = currentUrl.includes(`&path=team-member`);
  const isDashboardPage = currentUrl.includes(`&path=dashboard`);
  const isToolsPage = currentUrl.includes(`&path=tools`);
  const isMigrationPage = currentUrl.includes(`&path=migration`);

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