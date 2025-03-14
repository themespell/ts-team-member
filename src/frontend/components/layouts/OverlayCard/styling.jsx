

export const getTsTeamOverlayCardImageStyle = settings => {
    const tsTeamOverlayImageCSS = {}

    if(settings?.tsoverlay?.size?.image){
        tsTeamOverlayImageCSS['width'] = settings?.tsoverlay?.size?.image
        tsTeamOverlayImageCSS['height'] = settings?.tsoverlay?.size?.image
    }else {
        tsTeamOverlayImageCSS['width'] = '400px'
          tsTeamOverlayImageCSS['height'] = '400px'
    }

    return tsTeamOverlayImageCSS;
}


export const getTsTeamOverlayCardOverlayStyle = settings => {
    const tsTeamOverlayCardOverlayCSS = {}

    tsTeamOverlayCardOverlayCSS['border-style'] = "solid";
    if (settings?.tsoverlay?.borderRadius) {
        tsTeamOverlayCardOverlayCSS['border-radius'] = settings?.tsoverlay?.borderRadius;
    }
    if(settings?.tsoverlay?.color?.overlay){
        tsTeamOverlayCardOverlayCSS['background'] = settings?.tsoverlay?.color?.overlay
    }
    if(settings?.tsoverlay?.opacity) {
        tsTeamOverlayCardOverlayCSS['opacity'] = Number(settings?.tsoverlay?.opacity) / 100
    }
    if (settings?.tsoverlay?.borderWidth) {
        tsTeamOverlayCardOverlayCSS['border-width'] = settings?.tsoverlay?.borderWidth;
    }
    if (settings?.tsoverlay?.borderWidth) {
        tsTeamOverlayCardOverlayCSS['border-color'] = settings?.tsoverlay?.borderColor;
    }
    if(settings?.tsoverlay?.size?.image){
        tsTeamOverlayCardOverlayCSS['width'] = settings?.tsoverlay?.size?.image
        tsTeamOverlayCardOverlayCSS['height'] = settings?.tsoverlay?.size?.image
    }else {
        tsTeamOverlayCardOverlayCSS['width'] = '400px'
          tsTeamOverlayCardOverlayCSS['height'] = '400px'
    }
    return tsTeamOverlayCardOverlayCSS
}