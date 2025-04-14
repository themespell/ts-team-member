import Container from '../../common/components/Container.jsx';
import {getTranslations} from "../../common/utils/translations.js";

function TeamShowcase() {
  const translations = getTranslations();
  return (
    <div className="min-h-fit flex">
      {/* Main Content */}
      <div className="flex-1">
      <Container
            type='team_showcase'
            title={translations.teamShowcase}
            editor={true}
        />
      </div>
    </div>
  );
}

export default TeamShowcase;