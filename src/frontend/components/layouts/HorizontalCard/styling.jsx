

export const getTsTeamHorizontalCardContainerStyle = (settings) => {
    const tsTeamHorizontalCardContainerCSS = {};
    
    if (settings?.layout?.color?.background) {
        tsTeamHorizontalCardContainerCSS['background-color'] = settings.layout.color.background;
    }
    tsTeamHorizontalCardContainerCSS['border-style'] = "solid";
    
    if (settings?.layout?.borderWidth) {
        tsTeamHorizontalCardContainerCSS['border-width'] = settings.layout.borderWidth;
    }
    if (settings?.layout?.borderRadius) {
        tsTeamHorizontalCardContainerCSS['border-radius'] = settings.layout.borderRadius;
    }
    if (settings?.layout?.color?.border) {
        tsTeamHorizontalCardContainerCSS['border-color'] = settings.layout.color.border;
    }
    
    return tsTeamHorizontalCardContainerCSS;
};



