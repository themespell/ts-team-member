import CSSGenerator from "../../../utils/css-generator.js";
import {
  getTsTeamOverlayCardImageStyle,
  getTsTeamOverlayCardOverlayStyle,
} from "./styling";

const GenerateOverlayCardStyle = ({ settings = {} }) => {
  // Generate CSS

  const cssGenerator = new CSSGenerator();
  cssGenerator.addClassStyles(
    ".tsteam-tsoverlaycard .tsteam-member__image",
    getTsTeamOverlayCardImageStyle(settings)
  );

  cssGenerator.addClassStyles(
    ".tsteam-tsoverlaycard:hover .tsteam-tsoverlaycard__overlay",
    getTsTeamOverlayCardOverlayStyle(settings)
  );
  const generatedCSS = cssGenerator.generateCSS();

  return <style>{generatedCSS}</style>;
};

export default GenerateOverlayCardStyle;
