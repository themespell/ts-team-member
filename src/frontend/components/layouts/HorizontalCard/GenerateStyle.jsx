import CSSGenerator from "../../../utils/css-generator.js";
import { getTsTeamHorizontalCardContainerStyle } from "./styling";

const GenerateFancyCardStyle = ({ settings = {} }) => {
  // Generate CSS

  const cssGenerator = new CSSGenerator();
  cssGenerator.addClassStyles(
    ".tsteam-horizontalcard-container",
    getTsTeamHorizontalCardContainerStyle(settings)
  );

  const generatedCSS = cssGenerator.generateCSS();

  return <style>{generatedCSS}</style>;
};

export default GenerateFancyCardStyle;
