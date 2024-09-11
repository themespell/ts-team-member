import TeamShowcase from './components/TeamShowcase';
import TeamMember from './components/TeamMember';
import Sidebar from './components/Sidebar';

const currentUrl = window.location.href;

function AdminPanel() {
  if (currentUrl.includes(`&path=team-member`)) {
    return (
      <div className='flex'>
        <TeamMember />
        <Sidebar />
      </div>
    );
  }
  else{
    return (
      <div className='flex'>
        <TeamShowcase />
        <Sidebar />
      </div>
    );
  }
}

export default AdminPanel;