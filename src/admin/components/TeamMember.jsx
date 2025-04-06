import Container from "../../common/components/Container";
import {getTranslations} from "../../common/utils/translations.js";

function TeamMember() {
  const translations = getTranslations();
  return (
    <div className="min-h-fit flex">
      {/* Main Content */}
      <div className="flex-1">
      <Container
            type='team_member'
            title={translations.teamMember}
        />
      </div>
    </div>
    );
}

export default TeamMember;
