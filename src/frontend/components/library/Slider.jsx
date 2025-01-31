import React, { useState, useEffect, useRef } from 'react';

const Slider = ({
                    children,
                    slidesToShow = 1,
                    slidesToScroll = 1,
                    autoplay = false,
                    autoplaySpeed = 3000,
                    repeat = false,
                    infinite = false,
                    transition = 'slide',
                    transitionDuration = 300,
                    centerMode = false,
                    gap = 20,
                    responsive = [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ],
                    className = '',
                    containerClassName = '',
                    slideClassName = '',
                    arrowClassName = ''
                }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef(null);
    const transitionRef = useRef(true);

    const getCurrentSettings = () => {
        if (!responsive) return { slidesToShow, slidesToScroll };
        const currentBreakpoint = responsive.find(item => windowWidth <= item.breakpoint);
        return currentBreakpoint ? currentBreakpoint.settings : { slidesToShow, slidesToScroll };
    };

    const { slidesToShow: currentSlidesToShow, slidesToScroll: currentSlidesToScroll } = getCurrentSettings();

    const childrenArray = React.Children.toArray(children);
    const totalOriginalSlides = childrenArray.length;

    const createSlidesArray = () => {
        if (!repeat && !infinite) return childrenArray;

        let slides = [];
        const numberOfSets = 4;

        for (let i = 0; i < numberOfSets; i++) {
            slides = [...slides, ...childrenArray.map((child, index) =>
                React.cloneElement(child, { key: `set-${i}-slide-${index}` })
            )];
        }

        return slides;
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!autoplay) return;
        const interval = setInterval(nextSlide, autoplaySpeed);
        return () => clearInterval(interval);
    }, [currentSlide, autoplay, autoplaySpeed]);

    useEffect(() => {
        if (!infinite) return;

        const handleTransitionEnd = () => {
            if (currentSlide >= (totalOriginalSlides * 3)) {
                transitionRef.current = false;
                setCurrentSlide(totalOriginalSlides);
            }
        };

        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('transitionend', handleTransitionEnd);
            return () => slider.removeEventListener('transitionend', handleTransitionEnd);
        }
    }, [currentSlide, infinite, totalOriginalSlides]);

    useEffect(() => {
        if (!transitionRef.current) {
            setTimeout(() => {
                transitionRef.current = true;
            }, 50);
        }
    }, [currentSlide]);

    // Mouse drag handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const dist = (x - startX);

        if (Math.abs(dist) > 50) {
            if (dist > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const nextSlide = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), transitionDuration);

        if (infinite) {
            setCurrentSlide(current => current + currentSlidesToScroll);
        } else {
            setCurrentSlide(current => {
                const next = current + currentSlidesToScroll;
                if (next >= createSlidesArray().length - currentSlidesToShow + 1) {
                    return repeat ? 0 : current;
                }
                return next;
            });
        }
    };

    const prevSlide = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), transitionDuration);

        if (infinite) {
            setCurrentSlide(current => {
                if (current <= 0) {
                    transitionRef.current = false;
                    return totalOriginalSlides * 2;
                }
                return current - currentSlidesToScroll;
            });
        } else {
            setCurrentSlide(current => {
                const prev = current - currentSlidesToScroll;
                if (prev < 0) {
                    return repeat ? createSlidesArray().length - currentSlidesToShow : 0;
                }
                return prev;
            });
        }
    };

    const goToSlide = (index) => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), transitionDuration);
        setCurrentSlide(index);
    };

    const getTransitionStyles = () => {
        const baseStyles = {
            width: `${100 / currentSlidesToShow}%`,
            flexShrink: 0,
            transition: transitionRef.current ? `all ${transitionDuration}ms ease-in-out` : 'none',
            padding: `0 ${gap / 2}px`
        };

        if (centerMode) {
            baseStyles.transform = `scale(${isAnimating ? 0.9 : 1})`;
        }

        switch (transition) {
            case 'fade':
                return {
                    ...baseStyles,
                    opacity: isAnimating ? 0 : 1,
                };
            case 'zoom':
                return {
                    ...baseStyles,
                    transform: isAnimating ? 'scale(0.9)' : 'scale(1)',
                };
            case 'flip':
                return {
                    ...baseStyles,
                    transform: isAnimating ? 'rotateY(180deg)' : 'rotateY(0)',
                    backfaceVisibility: 'hidden',
                };
            default: // 'slide'
                return baseStyles;
        }
    };

    const slides = createSlidesArray();
    const slideWidth = 100 / currentSlidesToShow;

    const trackStyles = {
        display: 'flex',
        transform: `translateX(-${(currentSlide * slideWidth)}%)`,
        transition: transitionRef.current ? `transform ${transitionDuration}ms ease-in-out` : 'none',
        marginLeft: centerMode ? `-${slideWidth / 2}%` : 0,
        marginRight: centerMode ? `-${slideWidth / 2}%` : 0
    };

    const totalSlides = slides.length / (infinite ? 4 : 1); // Adjust for infinite mode

    // Normalize the active slide index for repeat mode
    const normalizedCurrentSlide = repeat
        ? currentSlide % totalOriginalSlides
        : currentSlide;

    return (
        <div className={`relative w-full ${containerClassName}`}>
            <div className="overflow-hidden">
                <div
                    ref={sliderRef}
                    className={`flex ${className}`}
                    style={trackStyles}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {slides.map((child, index) => (
                        <div
                            key={`slide-${index}`}
                            className={`flex-shrink-0 ${slideClassName} ${
                                centerMode && index === currentSlide ? 'active scale-100' : ''
                            }`}
                            style={getTransitionStyles()}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={prevSlide}
                className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg z-10 ${arrowClassName}`}
            >
                ←
            </button>
            <button
                onClick={nextSlide}
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg z-10 ${arrowClassName}`}
            >
                →
            </button>

            {/* Dot Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {Array.from({ length: totalOriginalSlides }).map((_, index) => (
                    <button
                        key={`dot-${index}`}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            index === normalizedCurrentSlide ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;