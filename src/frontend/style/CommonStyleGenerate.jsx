import CSSGenerator from "../../utils/css-generator";

import {
  getTsTeamMemberNameStyle,
  getTsTeamMemberDesignationStyle,
  getTsTeamMemberDescriptionStyle,
  getTsTeamMemberAvatarStyle,
} from "./commonStyle";


const GenerateCommonStyle = ({ settings = {} }) => {
  // Generate CSS

  const cssGenerator = new CSSGenerator();
  cssGenerator.addClassStyles(
    ".tsteam-member__name",
    getTsTeamMemberNameStyle(settings)
  );
  cssGenerator.addClassStyles(
    ".tsteam-member__designation",
    getTsTeamMemberDesignationStyle(settings)
  );
  cssGenerator.addClassStyles(
    ".tsteam-member__description",
    getTsTeamMemberDescriptionStyle(settings)
  );
  cssGenerator.addClassStyles(
    ".tsteam-member__image",
    getTsTeamMemberAvatarStyle(settings)
  );
  const generatedCSS = cssGenerator.generateCSS();

  return <style>{generatedCSS}</style>;
};

export default GenerateCommonStyle;
