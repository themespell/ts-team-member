import TeamShowcase from './components/TeamShowcase';
import TeamMember from './components/TeamMember';
import Sidebar from './components/Topbar';
import Topbar from './components/Topbar';

const currentUrl = window.location.href;

function AdminPanel() {
  if (currentUrl.includes(`&path=team-member`)) {
    return (
      <div className='flex'>
        <TeamMember />
        <Topbar />
      </div>
    );
  }
  else{
    return (
      <>
        <Topbar />
        <TeamShowcase />
      </>
    );
  }
}

export default AdminPanel;