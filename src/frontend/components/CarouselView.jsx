import {useEffect, useMemo, useState} from 'react';
import { Carousel } from 'antd';
import Layout from './layouts/Layout';
import { getCommonStyles } from './helper/commonStyle.js';
import { getResponsiveStyles } from './helper/responsiveStyles.js';
import { getCarouselStyles } from './helper/carouselStyles.js';
import { getProLayout } from "./helper/getProLayout.js";

function CarouselView({ team_members, settings, viewport, isEditor }) {
    const [ProLayoutComponent, setProLayoutComponent] = useState(null);
    const commonStyles = getCommonStyles(settings);
    const [responsiveStyles, setResponsiveStyles] = useState(
        getResponsiveStyles(settings, viewport, isEditor)
    );

    const [carouselStyles, setCarouselStyles] = useState(
        getCarouselStyles(settings, viewport, isEditor)
    );

    useMemo(() => {
        setProLayoutComponent(() => getProLayout(settings));
    }, [settings?.selectedLayout?.type, settings?.selectedLayout?.value]);

    useEffect(() => {
        const updateStyles = () => {
            setResponsiveStyles(getResponsiveStyles(settings, viewport, isEditor));
            setCarouselStyles(getCarouselStyles(settings, viewport, isEditor));
        };

        if (!isEditor) {
            window.addEventListener('resize', updateStyles);
            return () => {
                window.removeEventListener('resize', updateStyles);
            };
        } else {
            updateStyles();
        }
    }, [settings, viewport, isEditor]);

    return (
        <div className='' style={{ ...commonStyles, ...responsiveStyles }}>
            <Carousel
                slidesPerRow={carouselStyles.slidesToShow}
                slidesToScroll={carouselStyles.slidesToScroll}
                draggable={carouselStyles.draggable}
                centerMode={carouselStyles.centerMode}
                autoplay={carouselStyles.autoplay}
            >
                {team_members && team_members.length > 0 ? (
                    team_members.map((member, index) => (
                        <div key={index}>
                            {ProLayoutComponent ? (
                                <ProLayoutComponent
                                    settings={settings}
                                    imageUrl={member.meta_data.image}
                                    title={member.title}
                                    subtitle={member.meta_data.designation}
                                    description={member.description}
                                    socialIcons={member.socialIcons || []}
                                />
                            ) : (
                                <Layout
                                    settings={settings}
                                    layoutType={settings.selectedLayout.value}
                                    imageUrl={member.meta_data.image}
                                    title={member.title}
                                    subtitle={member.meta_data.designation}
                                    description={member.description}
                                    socialIcons={member.socialIcons || []}
                                />
                            )}
                        </div>
                    ))
                ) : (
                    <p>No team members found.</p>
                )}
            </Carousel>
        </div>
    );
}

export default CarouselView;