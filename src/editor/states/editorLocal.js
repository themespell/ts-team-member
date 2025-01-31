import { create } from 'zustand';
import editorHelper from "./editorHelper.js";
import proLayouts from "../../pro_support/proLayouts.js";

// Get layouts from Pro version
const isPro = tsteam_settings.is_pro
const isLicenseInactive = !!window.tsTeamPro?.is_licence_inactive ?? null;
const pro_layouts = proLayouts();
const pro_views = isPro && !isLicenseInactive
    ? [
        { label: 'Marquee', value: 'marquee', type: 'pro' },
        { label: 'Confetti', value: 'confetti', type: 'pro' },
    ] : [];

const pro_details = isPro && !isLicenseInactive
    ? [
        { label: 'Drawer', value: 'drawer', type: 'pro' },
        { label: 'Full Screen', value: 'fullscreen', type: 'pro' },
    ] : [];

// States Only For use in Editor
const editorLocal = create((set) => ({
    isEditor: true,
    viewport: editorHelper.getViewport(window.innerWidth),
    setViewport: (newViewport) => set({ viewport: newViewport }),

    availableLayouts: [
        { label: 'Card', value: 'Card', type: 'free' },
        { label: 'Horizontal Card', value: 'HorizontalCard', type: 'free' },
        { label: 'Overlay Card', value: 'OverlayCard', type: 'free' },
        // { label: 'Blur', value: 'Blur', type: 'free' },
        // { label: 'Avatar', value: 'Avatar', type: 'free' },
        ...pro_layouts,
    ],
    availableViews: [
        { label: 'Static', value: 'grid', type: 'free' },
        { label: 'Carousel', value: 'carousel', type: 'free' },
        ...pro_views
    ],
    availableDetails: [
        { label: 'No Details', value: 'none', type: 'free' },
        { label: 'Popup', value: 'popup', type: 'free' },
        ...pro_details
    ],
    availableHoverAnimation: [
        { label: 'No Animation', value: 'none', type: 'free' },
        { label: '3D Float', value: 'float3d', type: 'free' },
        { label: 'Tilt', value: 'tilt', type: 'free' },
        { label: 'Blur', value: 'blur', type: 'free' },
        { label: 'Slide Top', value: 'slideTop', type: 'free' },
        { label: 'Shadow Top', value: 'shadowPop', type: 'free' },
        { label: 'Shadow Drop', value: 'shadowDrop', type: 'free' },
        { label: 'Shadow Drop 02', value: 'shadowDrop2', type: 'free' },
        // { label: 'Text', value: 'textPopUp', type: 'free' },
        // { label: 'Flip Scale (Up)', value: 'flipScaleUp', type: 'free' },

    ]
}));

export default editorLocal;