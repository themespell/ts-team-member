import { create } from 'zustand';
import editorHelper from "./editorHelper.js";
import proLayouts from "../../pro_support/proLayouts.js";

// Get layouts from Pro version
const isPro = tsteam_settings.is_pro
const pro_layouts = proLayouts();
const pro_views = isPro
    ? [
        { label: 'Marquee', value: 'marquee', type: 'pro' },
    ] : [];

const pro_details = isPro
    ? [
        { label: 'Drawer', value: 'drawer', type: 'pro' },
    ] : [];

// States Only For use in Editor
const editorLocal = create((set) => ({
    isEditor: true,
    viewport: editorHelper.getViewport(window.innerWidth),
    setViewport: (newViewport) => set({ viewport: newViewport }),

    availableLayouts: [
        { label: 'Card', value: 'Card', type: 'free' },
        // { label: 'Overlay', value: 'Overlay', type: 'free' },
        // { label: 'Blur', value: 'Blur', type: 'free' },
        // { label: 'Avatar', value: 'Avatar', type: 'free' },
        // { label: 'HorizontalCard', value: 'HorizontalCard', type: 'free' },
        ...pro_layouts,
    ],
    availableViews: [
        { label: 'Static / Grid', value: 'grid', type: 'free' },
        { label: 'Carousel', value: 'carousel', type: 'free' },
        ...pro_views
    ],
    availableDetails: [
        { label: 'Popup', value: 'popup', type: 'free' },
        ...pro_details
    ]
}));

export default editorLocal;