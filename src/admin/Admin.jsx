import TeamShowcase from './components/TeamShowcase';
import TeamMember from './components/TeamMember';
import Topbar from './components/Topbar';
import Navigation from './components/Navigation';

const currentUrl = window.location.href;

function AdminPanel() {
  const isTeamMemberPage = currentUrl.includes(`&path=team-member`);

    return (
      <>
        <Topbar title={isTeamMemberPage ? 'Team Member' : 'Team Showcase'} />
        <div className='w-full flex justify-center pt-12'>
          <div className='flex justify-between gap-8 w-5/6'>
            <div className='w-2/6'>
              <Navigation />
            </div>

            <div className='w-full bg-white p-6 rounded-lg shadow-lg'>
            {isTeamMemberPage ?(
              <TeamMember />
            ) : (
              <TeamShowcase />
            )}
            </div>

          </div>
        </div>
      </>
    );
}

export default AdminPanel;