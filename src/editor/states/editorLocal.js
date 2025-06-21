import { create } from 'zustand';
import editorHelper from "./editorHelper.js";
import proLayouts from "../../pro_support/proLayouts.js";

// Get layouts from Pro version
const isPro = tsteam_settings.is_pro
const isLicenseInactive = !!window.tsTeamPro?.is_licence_inactive ?? null;
const pro_layouts = proLayouts();

// Split layouts by categories
const gridLayouts = pro_layouts.filter(layout => layout.category === 'grid');
const flexLayouts = pro_layouts.filter(layout => layout.category === 'flex');
const tableLayouts = pro_layouts.filter(layout => layout.category === 'table');

// Pro layouts that should be hidden when Pro is active, shown when Pro is not available
const proOnlyLayouts = !isPro || isLicenseInactive
    ? [
        { label: 'CircleMask', value: 'CircleMask', type: 'pro', disabled: true },
        { label: 'FancyCard', value: 'FancyCard', type: 'pro', disabled: true },
        { label: 'Glass', value: 'Glass', type: 'pro', disabled: true },
        { label: 'Capsule', value: 'Capsule', type: 'pro', disabled: true },
        { label: 'Arch', value: 'Arch', type: 'pro', disabled: true },
        { label: 'Sleek', value: 'Sleek', type: 'pro', disabled: true },
        { label: 'Blur', value: 'Blur', type: 'pro', disabled: true },
        { label: 'Bio', value: 'Bio', type: 'pro', disabled: true },
        { label: 'Halo', value: 'Halo', type: 'pro', disabled: true },
        { label: 'FancyOverlay', value: 'FancyOverlay', type: 'pro', disabled: true },
        { label: 'Dome', value: 'Dome', type: 'pro', disabled: true },
        { label: 'Geometric', value: 'Geometric', type: 'pro', disabled: true },
        { label: 'Subtle', value: 'Subtle', type: 'pro', disabled: true },
        { label: 'Chromatic', value: 'Chromatic', type: 'pro', disabled: true },
        { label: 'Simplistic', value: 'Simplistic', type: 'pro', disabled: true },
        { label: 'FancyRipple', value: 'FancyRipple', type: 'pro', disabled: true },
        { label: 'Moon', value: 'Moon', type: 'pro', disabled: true },
        { label: 'FancyCoverflow', value: 'FancyCoverflow', type: 'pro', disabled: true },
        { label: 'FancyCoverflow2', value: 'FancyCoverflow2', type: 'pro', disabled: true },
        { label: 'Interactive', value: 'Interactive', type: 'pro', disabled: true },
        { label: 'Glassmorphism', value: 'Glassmorphism', type: 'pro', disabled: true },
        { label: 'Colorful', value: 'Colorful', type: 'pro', disabled: true },
    ]
    : []; // Hide completely when Pro is active

// Add disabled flag to pro layouts
const updatedGridLayouts = gridLayouts.map(layout => ({
    ...layout,
    disabled: !isPro || isLicenseInactive
}));

const updatedFlexLayouts = flexLayouts.map(layout => ({
    ...layout,
    disabled: !isPro || isLicenseInactive
}));

const updatedTableLayouts = tableLayouts.map(layout => ({
    ...layout,
    disabled: !isPro || isLicenseInactive
}));

const pro_views = [
    // { label: 'Vertical Carousel', value: 'vertical_carousel', type: 'pro', disabled: !isPro || isLicenseInactive },
    { label: 'Flex', value: 'flex', type: 'pro', disabled: !isPro || isLicenseInactive },
    { label: 'Marquee', value: 'marquee', type: 'pro', disabled: !isPro || isLicenseInactive },
    { label: 'Table', value: 'table', type: 'pro', disabled: !isPro || isLicenseInactive },
    { label: 'Confetti', value: 'confetti', type: 'pro', disabled: !isPro || isLicenseInactive },
];

const pro_details = [
    { label: 'Drawer', value: 'drawer', type: 'pro', disabled: !isPro || isLicenseInactive },
    // { label: 'Full Screen', value: 'fullscreen', type: 'pro', disabled: !isPro || isLicenseInactive },
];

// States Only For use in Editor
const editorLocal = create((set) => ({
    isEditor: true,
    viewport: editorHelper.getViewport(window.innerWidth),
    setViewport: (newViewport) => set({ viewport: newViewport }),

    availableLayouts: [
        { label: 'Card', value: 'Card', type: 'free', disabled: false },
        { label: 'Horizontal Card', value: 'HorizontalCard', type: 'free', disabled: false },
        { label: 'Overlay Card', value: 'OverlayCard', type: 'free', disabled: false },
        { label: 'Tiles', value: 'Tiles', type: 'free', disabled: false },
        ...proOnlyLayouts, // These will be empty array when Pro is active
        ...updatedGridLayouts,
    ],
    availableFlexLayouts: [
        ...updatedFlexLayouts,
    ],
    availableTableLayouts: [
        ...updatedTableLayouts,
    ],
    availableViews: [
        { label: 'Grid', value: 'grid', type: 'free', disabled: false },
        { label: 'Carousel', value: 'carousel', type: 'free', disabled: false },
        ...pro_views
    ],
    availableTransition: [
        { label: 'Slide', value: 'slide', type: 'free', disabled: false },
        { label: 'Fade', value: 'fade', type: 'free', disabled: false },
        { label: 'Zoom', value: 'zoom', type: 'free', disabled: false },
        { label: 'Flip', value: 'flip', type: 'free', disabled: false },
    ],
    availableDelay: [
        { label: 'Left', value: 'left', type: 'pro', disabled: !isPro || isLicenseInactive },
        { label: 'Right', value: 'right', type: 'pro', disabled: !isPro || isLicenseInactive },
        // { label: 'Up', value: 'up', type: 'pro', disabled: !isPro || isLicenseInactive },
        // { label: 'Down', value: 'down', type: 'pro', disabled: !isPro || isLicenseInactive },
    ],
    availableDetails: [
        { label: 'No Details', value: 'none', type: 'free', disabled: false },
        { label: 'Popup', value: 'popup', type: 'free', disabled: false },
        ...pro_details
    ],
    availableHoverAnimation: [
        { label: 'No Animation', value: 'none', type: 'free', disabled: false },
        { label: '3D Float', value: 'float3d', type: 'free', disabled: false },
        { label: 'Tilt', value: 'tilt', type: 'free', disabled: false },
        { label: 'Blur', value: 'blur', type: 'free', disabled: false },
        { label: 'Slide Top', value: 'slideTop', type: 'free', disabled: false },
        { label: 'Shadow Top', value: 'shadowPop', type: 'free', disabled: false },
        { label: 'Shadow Drop', value: 'shadowDrop', type: 'free', disabled: false },
        { label: 'Shadow Drop 02', value: 'shadowDrop2', type: 'free', disabled: false },
        // { label: 'Text', value: 'textPopUp', type: 'free', disabled: false },
        // { label: 'Flip Scale (Up)', value: 'flipScaleUp', type: 'free', disabled: false },

    ]
}));

export default editorLocal;