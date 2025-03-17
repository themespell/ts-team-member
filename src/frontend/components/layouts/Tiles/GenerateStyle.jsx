import CSSGenerator from "../../../utils/css-generator.js";
import {
  getTsTeamTilesContainerStyle,
  getTsTeamTilesContainerHoverStyle,
  getTsTeamTilesMemberNameHoverStyle,
  getTsTeamTilesMemberDesignationHoverStyle
} from "./styling";

const GenerateTilesStyle = ({ settings = {} }) => {
  // Generate CSS

  const cssGenerator = new CSSGenerator();


  cssGenerator.addClassStyles(
    ".tsteam-tiles-container",
    getTsTeamTilesContainerStyle(settings)
  );
  cssGenerator.addClassStyles(
    ".tsteam-tiles-container:hover",
    getTsTeamTilesContainerHoverStyle(settings)
  );
  cssGenerator.addClassStyles('.tsteam-tiles-container:hover .tsteam-member__name',getTsTeamTilesMemberNameHoverStyle(settings))
  cssGenerator.addClassStyles('.tsteam-tiles-container:hover .tsteam-member__designation',getTsTeamTilesMemberDesignationHoverStyle(settings))
  const generatedCSS = cssGenerator.generateCSS();

  return <style>{generatedCSS}</style>;
};

export default GenerateTilesStyle;
