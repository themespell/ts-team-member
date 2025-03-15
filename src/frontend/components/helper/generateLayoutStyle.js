import React from 'react';
import CSSGenerator from "../../utils/css-generator.js";

import {
    getTsTeamMemberNameStyle,
    getTsTeamMemberDesignationStyle,
    getTsTeamMemberDescriptionStyle,
    getTsTeamMemberAvatarStyle,
} from "./layoutStyles.js";

const GenerateLayoutStyle = ({ settings = {} }) => {
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

    return React.createElement('style', null, generatedCSS);
};

export default GenerateLayoutStyle;