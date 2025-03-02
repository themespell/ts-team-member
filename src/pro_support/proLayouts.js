const formatName = (name) => {
    return name.replace(/([A-Z])/g, ' $1').trim();
};

function proLayouts(selectedLayout) {
    const isPro = !!tsteam_settings.is_pro ?? null;
    const isLicenseInactive = !!window.tsTeamPro?.is_licence_inactive ?? null;

    if (!isPro) {
        return [];
    }

    else if (isLicenseInactive) {
        return [];
    }

    else {
        if (selectedLayout) {
            const layout = window.tsTeamPro?.Layouts[selectedLayout];
            return layout;
        }
        else {
            const layouts = window.tsTeamPro?.Layouts;
            const layoutNames = Object.keys(layouts).map((layoutName) => ({
                label: formatName(layoutName),
                value: layoutName,
                type: 'pro',
                category: layouts[layoutName].category
            }));

            return layoutNames;
        }
    }
}

export default proLayouts;

// function proLayouts(selectedLayout, category) {
//     const isPro = !!tsteam_settings.is_pro ?? null;
//     const isLicenseInactive = !!window.tsTeamPro?.is_licence_inactive ?? null;
//
//     if (!isPro || isLicenseInactive) {
//         return [];
//     }
//
//     const layouts = window.tsTeamPro?.Layouts;
//
//     if (selectedLayout) {
//         console.log(selectedLayout);
//         // Search for the selected layout across all categories
//         for (const categoryKey in layouts) {
//             const layout = layouts[categoryKey].find((item) => item.name === selectedLayout);
//             if (layout) {
//                 return [layout];
//             }
//         }
//         return [];
//     }
//
//     if (category) {
//         // Return layouts filtered by category
//         const categoryKey = Object.keys(layouts || {}).find((key) => layouts[key][0]?.category === category);
//         if (categoryKey) {
//             return layouts[categoryKey].map((item) => ({
//                 label: item.name,
//                 value: item.name,
//                 type: item.type,
//             }));
//         }
//         return [];
//     }
//
//     // If no category or selectedLayout, return all layouts
//     const allLayouts = [];
//     for (const categoryKey in layouts) {
//         layouts[categoryKey].forEach((item) => {
//             allLayouts.push({
//                 label: item.name,
//                 value: item.name,
//                 type: item.type,
//             });
//         });
//     }
//     return allLayouts;
// }
//
// export default proLayouts;