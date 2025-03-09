import React from 'react';
import SocialIcons from './SocialIcons.jsx';
import {loadGoogleFont} from "../../helper/loadGoogleFont.js";
import {getAnimationClasses} from "../../helper/motionControl.js";

const Card = ({ settings, id, imageUrl, title, subtitle, description, socialIcons, details }) => {
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
        <div className="w-full flex flex-col items-center">
            <img
                id={`${title?.replace(/\s+/g, '-').toLowerCase()}-${id}`}
                src={imageUrl}
                alt={title}
                style={{
                    borderStyle: 'solid',
                    borderWidth: settings?.layout?.borderWidth?.image ?? '1px',
                    borderRadius: settings?.layout?.borderRadius?.image,
                    borderColor: settings?.layout?.color?.imageBorder,
                }}
                className={`tsteam-member__image w-32 h-32 rounded-xl -mb-12 z-10 relative shadow-2xl object-cover ${details ? 'cursor-pointer' : ''}`}
            />

            <div className="w-full max-w-sm bg-white rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden"
                 style={{
                     backgroundColor: settings?.layout?.color?.background,
                     borderStyle: 'solid',
                     borderWidth: settings?.layout?.borderWidth ?? '0px',
                     borderRadius: settings?.layout?.borderRadius ?? '0px',
                     borderColor: settings?.layout?.color?.border ?? '0px',
                 }}
                 
                 >
                <div className="px-5 pt-16 pb-5 text-center flex flex-col items-center">
                    {title && (
                        <h3
                            className="text-[16px] font-semibold mb-0.5"
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
                        <h4 className="text-purple-600 text-sm font-medium mb-3"
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

                    <hr
                        style={{
                            backgroundColor: settings?.tscard?.color?.separator,
                        }}
                        className="h-1 w-16 bg-red-500 mt-2 mb-4 rounded-2xl"></hr>

                    {description && (
                        <div
                            style={{
                                color: settings?.layout?.color?.description,
                                fontFamily: settings?.typography?.description || 'inherit',
                                fontSize: settings?.typography?.description_fontSize,
                                fontWeight: settings?.typography?.description_fontWeight,
                                textTransform: settings?.typography?.description_textTransform,
                                letterSpacing: `${settings?.typography?.description_letterSpacing || 0}px`,
                                lineHeight: settings?.typography?.description_lineHeight
                            }}
                            className="text-gray-600 text-sm mb-4 ml-8 mr-8"
                        >
                            {description}
                        </div>
                    )}

                    {details && (
                        <div className="mt-2 flex items-center justify-center">
                            {details}
                        </div>
                    )}

                    <SocialIcons socialIcons={socialIcons} settings={settings} />
                </div>
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

export default Card;
