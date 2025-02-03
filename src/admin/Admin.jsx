import TeamShowcase from './components/TeamShowcase';
import TeamMember from './components/TeamMember';
import Dashboard from "./components/Dashboard.jsx";
import Settings from "./components/Settings.jsx";
import Topbar from './components/Topbar';

const currentUrl = window.location.href;

function AdminPanel() {
  const isTeamMemberPage = currentUrl.includes(`&path=team-member`);
  const isDashboardPage = currentUrl.includes(`&path=dashboard`);
  const isSettingsPage = currentUrl.includes(`&path=settings`);

    if (isDashboardPage) {
        return (
            <>
                <Topbar title={'Dashboard'}/>
                <div className='tsteam__admin--style overflow-x-auto w-full flex justify-center pt-12 pb-12'>
                    <div className='flex justify-between gap-8 w-4/6'>
                        <div className='w-full'>
                            <Dashboard/>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (isSettingsPage) {
        return (
            <>
                <Topbar title={'Settings'}/>
                <div className='tsteam__admin--style overflow-x-auto w-full flex justify-center pt-12 pb-12'>
                    <div className='flex justify-between gap-8 w-4/6'>
                        <div className='w-full'>
                            <Settings/>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <Topbar title={isTeamMemberPage ? 'Team Member' : 'Team Showcase'}/>
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