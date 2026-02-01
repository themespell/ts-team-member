import React from "react";

const ModernCard = ({
    settings,
    id,
    imageUrl,
    title,
    subtitle,
    description,
    socialIcons,
    details,
    animationConfig
}) => {
    const renderContent = () => (
        <div className="tsteam-modern-card w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
            {/* Image Section with Gradient Overlay */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                <div className="absolute inset-0 bg-black/20"></div>
                <img
                    id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
                    src={imageUrl}
                    alt={title}
                    className={`w-full h-full object-cover ${details ? "cursor-pointer" : ""}`}
                />
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-purple-700 shadow-lg">
                    Team Member
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Name and Designation */}
                <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                        {title || 'Team Member'}
                    </h3>
                    {subtitle && (
                        <p className="text-sm font-medium text-purple-600 bg-purple-50 inline-block px-3 py-1 rounded-full">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Description */}
                {description && (
                    <p className="text-sm text-gray-600 text-center mb-4 line-clamp-3">
                        {description}
                    </p>
                )}

                {/* Social Icons */}
                {socialIcons && (
                    <div className="flex justify-center gap-2 mb-4">
                        {socialIcons}
                    </div>
                )}

                {/* Details Button */}
                {details && (
                    <div className="flex justify-center">
                        {details}
                    </div>
                )}
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-2xl pointer-events-none transition-colors duration-300"></div>
        </div>
    );

    // Handle different animation types
    if (!animationConfig) {
        return <div className="relative">{renderContent()}</div>;
    }

    if (animationConfig.type === "single") {
        return <div className={animationConfig.class}>{renderContent()}</div>;
    }

    if (animationConfig.type === "wrapper") {
        return (
            <div className={animationConfig.parent}>
                <div className={animationConfig.wrapper}>{renderContent()}</div>
            </div>
        );
    }

    return <div className="relative">{renderContent()}</div>;
};

export default ModernCard;
