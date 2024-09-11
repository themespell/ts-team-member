import Container from "../../common/components/Container";

function TeamMember() {
  
  return (
    <div className="bg-gray-100 min-h-fit flex">
          <div className="flex-1 p-6">
            <Container
            type='team_member'
            title='Team Member'
            />
          </div>
        </div>
    );
}

export default TeamMember;
