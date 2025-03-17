




export const getTsTeamTilesContainerStyle = settings => {
    const tsTeamTilesContainerCSS = {}


    if(settings?.layout?.color?.background){
        tsTeamTilesContainerCSS['background'] = settings?.layout?.color?.background
    }

    return tsTeamTilesContainerCSS
}

export const getTsTeamTilesContainerHoverStyle = settings => {
    const tsTeamTilesContainerHoverCSS = {}
    if(settings?.tiles?.hover?.color?.background){
        tsTeamTilesContainerHoverCSS['background'] =settings?.tiles?.hover?.color?.background
    }

    return tsTeamTilesContainerHoverCSS
}

export const getTsTeamTilesMemberNameHoverStyle = settings => {
    const tsTsTeamTilesMemberNameHoverCSS = {}
    if(settings?.tiles?.hover?.color?.memberName){
        tsTsTeamTilesMemberNameHoverCSS['color'] =settings?.tiles?.hover?.color?.memberName
    }

    return tsTsTeamTilesMemberNameHoverCSS;
}

export const getTsTeamTilesMemberDesignationHoverStyle = settings => {
    const tsTsTeamTilesMemberDesignationHoverCSS = {}
    if(settings?.tiles?.hover?.color?.memberDesignation){
        tsTsTeamTilesMemberDesignationHoverCSS['color'] =settings?.tiles?.hover?.color?.memberDesignation
    }

    return tsTsTeamTilesMemberDesignationHoverCSS;
}