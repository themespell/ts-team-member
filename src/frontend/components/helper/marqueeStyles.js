export const getMarqueeStyles = (settings, viewport, isEditor) => {
    const { marqueeSettings } = settings || {};

    let slidesToShow, slidesToScroll, columnGap;

    if (isEditor) {
        switch (viewport) {
            case 'mobile':
                columnGap = settings?.columnSettings?.gap?.default?.mobile;
                break;
            case 'tablet':
                columnGap = settings?.columnSettings?.gap?.default?.tablet;
                break;
            case 'desktop':
            default:
                columnGap = settings?.columnSettings?.gap?.default?.desktop;
                break;
        }
    } else {
        const width = window.innerWidth;
        if (width <= 768) {
            columnGap = settings?.columnSettings?.gap?.default?.mobile;
        } else if (width <= 1024) {
            columnGap = settings?.columnSettings?.gap?.default?.tablet;
        } else {
            columnGap = settings?.columnSettings?.gap?.default?.desktop;
        }
    }

    const draggable = marqueeSettings?.draggable === 'true';

    return {
        columnGap,
        draggable,
    };
};