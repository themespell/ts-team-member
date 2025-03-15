import Container from '../../common/components/Container.jsx';

function TeamShowcase() {
  console.log('showcase')
  return (
    <div className="min-h-fit flex">
      {/* Main Content */}
      <div className="flex-1">
      <Container
            type='team_showcase'
            title='Team Showcase'
            editor={true}
        />
      </div>
    </div>
  );
}

export default TeamShowcase;