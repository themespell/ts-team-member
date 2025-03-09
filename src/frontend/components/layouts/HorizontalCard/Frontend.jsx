import SocialIcons from './SocialIcons.jsx';
import { loadGoogleFont } from '../../helper/loadGoogleFont.js';
import { getAnimationClasses } from "../../helper/motionControl.js";

const HorizontalCard = ({ settings, id, imageUrl, title, subtitle, description, socialIcons, details }) => {
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
        <div className="w-full">
            <div className="bg-white rounded-[20px] overflow-hidden border border-purple-100 hover:border-purple-500">
                <div className="flex items-start p-6 gap-6"
                      style={{
                        backgroundColor: settings?.layout?.color?.background,
                        borderStyle: 'solid',
                        borderWidth: settings?.layout?.borderWidth ?? '0px',
                        borderRadius: settings?.layout?.borderRadius ?? '0px',
                        borderColor: settings?.layout?.color?.border ?? '0px',
                    }}
                >
                    {/* Image Section */}
                    <img
                        id={`${title?.replace(/\s+/g, '-').toLowerCase()}-${id}`}
                        src={imageUrl}
                        alt={title}
                        className={`tsteam-member__image w-24 h-24 object-cover shadow-lg ${details ? 'cursor-pointer' : ''}`}
                        style={{
                            borderStyle: 'solid',
                            borderWidth: settings?.layout?.borderWidth?.image ?? '1px',
                            borderRadius: settings?.layout?.borderRadius?.image,
                            borderColor: settings?.layout?.color?.imageBorder,
                        }}
                    />

                    {/* Content Section */}
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <div>
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
                                    <h4 className="text-gray-400 text-sm font-medium"
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
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-1">
                                <SocialIcons socialIcons={socialIcons} settings={settings} />
                            </div>
                        </div>

                        {description && (
                            <div className="text-gray-600 text-sm mt-3"
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

                        {details && (
                            <div className="mt-4">
                                {details}
                            </div>
                        )}
                    </div>
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

export default HorizontalCard;
