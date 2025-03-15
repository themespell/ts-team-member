

export const getTsTeamCardContainerStyle = (settings) => {
    const tsTeamCardContainerCSS = {};
    
    if (settings?.layout?.color?.background) {
        tsTeamCardContainerCSS['background'] = settings.layout.color.background;
    }
    tsTeamCardContainerCSS['border-style'] = "solid";
    
    if (settings?.layout?.borderWidth) {
        tsTeamCardContainerCSS['border-width'] = settings.layout.borderWidth;
    }
    if (settings?.layout?.borderRadius) {
        tsTeamCardContainerCSS['border-radius'] = settings.layout.borderRadius;
    }
    if (settings?.layout?.color?.border) {
        tsTeamCardContainerCSS['border-color'] = settings.layout.color.border;
    }
    
    return tsTeamCardContainerCSS;
};
