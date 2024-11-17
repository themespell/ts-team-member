// carouselStyles.js
export const getCarouselStyles = (settings, viewport, isEditor) => {
    const { carouselSettings } = settings || {};

    let slidesToShow, slidesToScroll;

    if (isEditor) {
        switch (viewport) {
            case 'mobile':
                slidesToShow = carouselSettings?.slidesToShow?.default?.mobile || 1;
                slidesToScroll = carouselSettings?.slidesToScroll?.default?.mobile || 1;
                break;
            case 'tablet':
                slidesToShow = carouselSettings?.slidesToShow?.default?.tablet || 2;
                slidesToScroll = carouselSettings?.slidesToScroll?.default?.tablet || 1;
                break;
            case 'desktop':
            default:
                slidesToShow = carouselSettings?.slidesToShow?.default?.desktop || 3;
                slidesToScroll = carouselSettings?.slidesToScroll?.default?.desktop || 1;
                break;
        }
    } else {
        const width = window.innerWidth;
        if (width <= 768) {
            slidesToShow = carouselSettings?.slidesToShow?.default?.mobile || 1;
            slidesToScroll = carouselSettings?.slidesToScroll?.default?.mobile || 1;
        } else if (width <= 1024) {
            slidesToShow = carouselSettings?.slidesToShow?.default?.tablet || 2;
            slidesToScroll = carouselSettings?.slidesToScroll?.default?.tablet || 1;
        } else {
            slidesToShow = carouselSettings?.slidesToShow?.default?.desktop || 3;
            slidesToScroll = carouselSettings?.slidesToScroll?.default?.desktop || 1;
        }
    }

    const draggable = carouselSettings?.draggable === 'true';
    const centerMode = carouselSettings?.centerSlide === 'true';
    const autoplay = carouselSettings?.autoPlay === 'true';

    return {
        slidesToShow,
        slidesToScroll,
        draggable,
        centerMode,
        autoplay,
    };
};