import Container from "../../common/components/Container";

function TeamMember() {
  
  return (
    <div className="min-h-fit flex">
      {/* Main Content */}
      <div className="flex-1">
      <Container
            type='team_member'
            title='Team Member'
        />
      </div>
    </div>
    );
}

export default TeamMember;
