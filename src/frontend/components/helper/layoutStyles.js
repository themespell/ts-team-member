// Helper function to add !important to all CSS values
const addImportantToStyles = (styleObject) => {
    const importantStyles = {};

    for (const property in styleObject) {
        if (styleObject.hasOwnProperty(property)) {
            const value = styleObject[property];
            // Check if the value already has !important
            if (typeof value === 'string' && !value.includes('!important')) {
                importantStyles[property] = value + ' !important';
            } else {
                importantStyles[property] = value;
            }
        }
    }

    return importantStyles;
};

export const getTsTeamMemberNameStyle = (settings) => {
    const tsTeamMemberNameCSS = {}
    if(settings?.layout?.color?.memberName){
        tsTeamMemberNameCSS['color'] = settings?.layout?.color?.memberName;
    }
    if(settings?.typography?.name){
        tsTeamMemberNameCSS['font-family'] = settings?.typography?.name;
    }
    if(settings?.typography?.name_fontSize){
        tsTeamMemberNameCSS['font-size'] = settings?.typography?.name_fontSize;
    }
    if(settings?.typography?.name_fontWeight){
        tsTeamMemberNameCSS['font-weight'] = settings?.typography?.name_fontWeight;
    }
    if(settings?.typography?.name_textTransform){
        tsTeamMemberNameCSS['text-transform'] = settings?.typography?.name_textTransform;
    }
    if(settings?.typography?.name_letterSpacing){
        tsTeamMemberNameCSS['letter-spacing'] = settings?.typography?.name_letterSpacing;
    }
    if(settings?.typography?.name_lineHeight){
        tsTeamMemberNameCSS['line-height'] = settings?.typography?.name_lineHeight;
    }

    return addImportantToStyles(tsTeamMemberNameCSS);
}

export const getTsTeamMemberDesignationStyle = (settings) => {
    const tsTeamMemberDesignationCSS = {};

    if (settings?.layout?.color?.designation) {
        tsTeamMemberDesignationCSS['color'] = settings.layout.color.designation;
    }
    if (settings?.typography?.designation) {
        tsTeamMemberDesignationCSS['font-family'] = settings.typography.designation;
    }
    if (settings?.typography?.designation_fontSize) {
        tsTeamMemberDesignationCSS['font-size'] = settings.typography.designation_fontSize;
    }
    if (settings?.typography?.designation_fontWeight) {
        tsTeamMemberDesignationCSS['font-weight'] = settings.typography.designation_fontWeight;
    }
    if (settings?.typography?.designation_textTransform) {
        tsTeamMemberDesignationCSS['text-transform'] = settings.typography.designation_textTransform;
    }
    if (settings?.typography?.designation_letterSpacing) {
        tsTeamMemberDesignationCSS['letter-spacing'] = `${settings.typography.designation_letterSpacing}px`;
    }
    if (settings?.typography?.designation_lineHeight) {
        tsTeamMemberDesignationCSS['line-height'] = settings.typography.designation_lineHeight;
    }

    return addImportantToStyles(tsTeamMemberDesignationCSS);
};

export const getTsTeamMemberDescriptionStyle = (settings) => {
    const tsTeamMemberDescriptionCSS = {};

    if (settings?.layout?.color?.description) {
        tsTeamMemberDescriptionCSS['color'] = settings.layout.color.description;
    }
    if (settings?.typography?.description) {
        tsTeamMemberDescriptionCSS['font-family'] = settings.typography.description;
    }
    if (settings?.typography?.description_fontSize) {
        tsTeamMemberDescriptionCSS['font-size'] = settings.typography.description_fontSize;
    }
    if (settings?.typography?.description_fontWeight) {
        tsTeamMemberDescriptionCSS['font-weight'] = settings.typography.description_fontWeight;
    }
    if (settings?.typography?.description_textTransform) {
        tsTeamMemberDescriptionCSS['text-transform'] = settings.typography.description_textTransform;
    }
    if (settings?.typography?.description_letterSpacing) {
        tsTeamMemberDescriptionCSS['letter-spacing'] = `${settings.typography.description_letterSpacing}px`;
    }
    if (settings?.typography?.description_lineHeight) {
        tsTeamMemberDescriptionCSS['line-height'] = settings.typography.description_lineHeight;
    }

    return addImportantToStyles(tsTeamMemberDescriptionCSS);
};

export const getTsTeamMemberAvatarStyle = (settings) => {
    const tsTeamMemberAvatarCSS = {};

    tsTeamMemberAvatarCSS['border-style'] = "solid";

    if (settings?.tsoverlay?.borderWidth) {
        tsTeamMemberAvatarCSS['border-width'] = settings.layout.borderWidth.image;
    }
    if (settings?.tsoverlay?.borderWidth) {
        tsTeamMemberAvatarCSS['border-radius'] = settings.layout.borderRadius.image;
    }
    if (settings?.layout?.color?.imageBorder) {
        tsTeamMemberAvatarCSS['border-color'] = settings.layout.color.imageBorder;
    }

    return addImportantToStyles(tsTeamMemberAvatarCSS);
};
