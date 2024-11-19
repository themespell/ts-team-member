function proLayouts(selectedLayout) {
    const isPro = tsteam_settings.is_pro

    if (!isPro) {
        return [];
    }

    else {
        if (selectedLayout) {
            const layout = window.tsTeamPro?.Layouts[selectedLayout].Frontend;
            return layout;
        }
        else {
            const layouts = window.tsTeamPro?.Layouts;
            const layoutNames = Object.keys(layouts).map((layoutName) => ({
                label: layoutName,
                value: layoutName,
                type: 'pro',
            }));

            return layoutNames;
        }
    }
}

export default proLayouts;