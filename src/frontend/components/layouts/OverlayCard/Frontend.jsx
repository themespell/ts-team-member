import React from 'react';
import SocialIcons from './SocialIcons.jsx';
import { loadGoogleFont } from '../../helper/loadGoogleFont.js';
import { getAnimationClasses } from "../../helper/motionControl.js";

const OverlayCard = ({ settings, id, imageUrl, title, subtitle, description, socialIcons, details }) => {
    // Load fonts if specified
    if (settings?.typography?.name) {
        loadGoogleFont(settings.typography.name);
    }
    if (settings?.typography?.designation) {
        loadGoogleFont(settings.typography.designation);
    }
    if (settings?.typography?.description) {
        loadGoogleFont(settings.typography.description);
    }
    const animationConfig = getAnimationClasses(settings.hoverAnimation);

    const renderContent = () => (
        <div className="relative group w-full aspect-square">
            {/* Base Image */}
            <img
                id={`${title?.replace(/\s+/g, '-').toLowerCase()}-${id}`}
                src={imageUrl}
                alt={title}
                className={`tsteam-member__image w-full h-full object-cover rounded-3xl ${details ? 'cursor-pointer' : ''}`}
                style={{
                    borderStyle: 'solid',
                    borderWidth: settings?.layout?.borderWidth?.image ?? '1px',
                    borderRadius: settings?.layout?.borderRadius?.image,
                    borderColor: settings?.layout?.color?.imageBorder,
                }}
            />

            {/* Overlay Content - Hidden by default, visible on hover */}
            <div className="absolute inset-0 bg-purple-600 bg-opacity-90 rounded-3xl flex flex-col items-center justify-center text-center p-6 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                 style={{
                     backgroundColor: settings?.tsoverlay?.color?.overlay,
                     opacity: settings?.tsoverlay?.opacity,
                     borderStyle: 'solid',
                     borderWidth: settings?.tsoverlay?.borderWidth,
                     borderRadius: settings?.tsoverlay?.borderRadius,
                 }}
            >
                {title && (
                    <h3
                        className="text-white text-xl font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                        style={{
                            color: settings?.layout?.color?.memberName,
                            fontFamily: settings?.typography?.name || 'inherit',
                            fontSize: settings?.typography?.name_fontSize || '16px',
                            fontWeight: settings?.typography?.name_fontWeight || '600',
                            textTransform: settings?.typography?.name_textTransform || 'none',
                            letterSpacing: `${settings?.typography?.name_letterSpacing || 0}px`,
                            lineHeight: settings?.typography?.name_lineHeight || '1.5'
                        }}
                    >
                        {title}
                    </h3>
                )}

                {subtitle && (
                    <h4
                        className="text-white text-sm font-medium mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-75"
                        style={{
                            color: settings?.layout?.color?.designation,
                            fontFamily: settings?.typography?.designation || 'inherit',
                            fontSize: settings?.typography?.designation_fontSize,
                            fontWeight: settings?.typography?.designation_fontWeight,
                            textTransform: settings?.typography?.designation_textTransform,
                            letterSpacing: `${settings?.typography?.designation_letterSpacing || 0}px`,
                            lineHeight: settings?.typography?.designation_lineHeight
                        }}
                    >
                        {subtitle}
                    </h4>
                )}

                {description && (
                    <div className="text-white text-sm mt-3"
                         style={{
                             color: settings?.layout?.color?.description,
                             fontFamily: settings?.typography?.description || 'inherit',
                             fontSize: settings?.typography?.description_fontSize,
                             fontWeight: settings?.typography?.description_fontWeight,
                             textTransform: settings?.typography?.description_textTransform,
                             letterSpacing: `${settings?.typography?.description_letterSpacing || 0}px`,
                             lineHeight: settings?.typography?.description_lineHeight
                         }}
                    >
                        {description}
                    </div>
                )}

                {/* Social Icons with white color */}
                <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-150">
                    <SocialIcons
                        socialIcons={socialIcons}
                        settings={settings}
                    />
                </div>

                {details && (
                    <>
                    <button
                        id={`${title?.replace(/\s+/g, '-').toLowerCase()}-${id}`}
                        className="tsteam-member-button__details bg-red-500 text-white p-4"
                    >Details</button>
                    <div className="mt-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-200">
                        {details}
                    </div>
                    </>
                )}
            </div>
        </div>
    );

    // Handle different animation types
    if (!animationConfig) {
        return renderContent();
    }

    if (animationConfig.type === 'single') {
        return (
            <div className={animationConfig.class}>
                {renderContent()}
            </div>
        );
    }

    if (animationConfig.type === 'wrapper') {
        return (
            <div className={animationConfig.parent}>
                <div className={animationConfig.wrapper}>
                    {renderContent()}
                </div>
            </div>
        );
    }

    return renderContent();
};

export default OverlayCard;
