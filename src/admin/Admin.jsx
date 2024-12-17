import TeamShowcase from './components/TeamShowcase';
import TeamMember from './components/TeamMember';
import Dashboard from "./components/Dashboard.jsx";
import Topbar from './components/Topbar';

const currentUrl = window.location.href;

function AdminPanel() {
  const isTeamMemberPage = currentUrl.includes(`&path=team-member`);
  const isDashboardPage = currentUrl.includes(`&path=dashboard`);

    if (isDashboardPage) {
        return (
            <>
               <Topbar title={'Dashboard'} />
               <Dashboard />
            </>
        );
    }
    else {
        return (
            <>
                <Topbar title={isTeamMemberPage ? 'Team Member' : 'Team Showcase'} />
                <div className='overflow-x-auto bg-gray-100 w-full flex justify-center pt-12 pb-12'>
                    <div className='flex justify-between gap-8 w-5/6'>
                        <div className='w-full bg-white p-6 rounded-lg shadow-lg'>
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