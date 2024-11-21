// carouselStyles.js
export const getCarouselStyles = (settings, viewport, isEditor) => {
    const { carouselSettings } = settings || {};

    let slidesToShow, slidesToScroll, columnGap;

    if (isEditor) {
        switch (viewport) {
            case 'mobile':
                slidesToShow = carouselSettings?.slidesToShow?.default?.mobile || 1;
                slidesToScroll = carouselSettings?.slidesToScroll?.default?.mobile || 1;
                columnGap = settings?.columnSettings?.gap?.default?.mobile;
                break;
            case 'tablet':
                slidesToShow = carouselSettings?.slidesToShow?.default?.tablet || 2;
                slidesToScroll = carouselSettings?.slidesToScroll?.default?.tablet || 1;
                columnGap = settings?.columnSettings?.gap?.default?.tablet;
                break;
            case 'desktop':
            default:
                slidesToShow = carouselSettings?.slidesToShow?.default?.desktop || 3;
                slidesToScroll = carouselSettings?.slidesToScroll?.default?.desktop || 1;
                columnGap = settings?.columnSettings?.gap?.default?.desktop;
                break;
        }
    } else {
        const width = window.innerWidth;
        if (width <= 768) {
            slidesToShow = carouselSettings?.slidesToShow?.default?.mobile || 1;
            slidesToScroll = carouselSettings?.slidesToScroll?.default?.mobile || 1;
            columnGap = settings?.columnSettings?.gap?.default?.mobile;
        } else if (width <= 1024) {
            slidesToShow = carouselSettings?.slidesToShow?.default?.tablet || 2;
            slidesToScroll = carouselSettings?.slidesToScroll?.default?.tablet || 1;
            columnGap = settings?.columnSettings?.gap?.default?.tablet;
        } else {
            slidesToShow = carouselSettings?.slidesToShow?.default?.desktop || 3;
            slidesToScroll = carouselSettings?.slidesToScroll?.default?.desktop || 1;
            columnGap = settings?.columnSettings?.gap?.default?.desktop;
        }
    }

    const draggable = carouselSettings?.draggable === 'true';
    const centerMode = carouselSettings?.centerSlide === 'true';
    const autoplay = carouselSettings?.autoPlay === 'true';
    const arrows = carouselSettings?.arrows === 'true';

    return {
        slidesToShow,
        slidesToScroll,
        columnGap,
        draggable,
        centerMode,
        autoplay,
        arrows
    };
};