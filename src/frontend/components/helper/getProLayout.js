import proLayouts from "../../../pro_support/proLayouts.js";

export function getProLayout(settings) {
    if (settings?.selectedLayout?.type === 'pro') {
        return proLayouts(settings.selectedLayout.value);
    }
    return null;
}