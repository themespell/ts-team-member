import CSSGenerator from "../../../utils/css-generator.js";
import { getTsTeamCardContainerStyle } from "./styling";

const GenerateCardStyle = ({ settings = {} }) => {
  // Generate CSS

  const cssGenerator = new CSSGenerator();
  cssGenerator.addClassStyles(
    ".tsteam-card-container",
    getTsTeamCardContainerStyle(settings)
  );

  const generatedCSS = cssGenerator.generateCSS();

  return <style>{generatedCSS}</style>;
};

export default GenerateCardStyle;
