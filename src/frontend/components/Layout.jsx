import React, { useState, useEffect } from 'react';

function Layout({ settings, layoutType, imageUrl, title, subtitle, description, socialIcons }) {
    const [cardData, setCardData] = useState(null);

    // Dynamically import the JSON based on the layoutType prop
    useEffect(() => {
        if (layoutType) {
            import(`./layouts/${layoutType}.json`)
                .then((module) => {
                    setCardData(module.default);
                })
                .catch((error) => {
                    console.error("Error loading JSON:", error);
                });
        }
    }, [layoutType]);

    // If cardData is not yet loaded, return null or a loading message
    if (!cardData) {
        return <div>Loading...</div>;
    }

    const { container, image, animation, content } = cardData.layout;
    return (
        <div className={`${container.style} ${animation.style}`}
        style={{
            backgroundColor: settings?.cardStyle?.color?.backgroundColor,
        }}
        >
            {/* Image Section */}
            <img
                className={image.style}
                src={imageUrl}
                alt="Team Member"
            />

            {/* Content Section */}
            <div className={content.style}
            style={{
                color: settings?.cardStyle?.color?.textColor,
            }}
            >
                {/* Header Section */}
                {content.header && (
                    <div>
                        {/* Title Section */}
                        {content.header.title && (
                            <content.header.title.markup className={content.header.title.style}>
                                {title}
                            </content.header.title.markup>
                        )}

                        {/* Subtitle Section - Conditionally Rendered */}
                        {content.header.subtitle && content.header.subtitle.visible && (
                            <content.header.subtitle.markup className={content.header.subtitle.style}>
                                {subtitle}
                            </content.header.subtitle.markup>
                        )}
                    </div>
                )}

                {/* Body Section - Conditionally Rendered */}
                {content.body && content.body.visible && (
                    <content.body.markup className={content.body.style}>
                        {description}
                    </content.body.markup>
                )}

                {/* Footer Section */}
                {content.footer && (
                    <content.footer.markup>
                        {/* Social Icons Section - Conditionally Rendered */}
                        {content.footer.social && content.footer.social.visible && (
                            <content.footer.social.markup className={content.footer.social.container.style}>
                                {socialIcons.map((icon, index) => (
                                    <span key={index} className={content.footer.social.icon.style}>
                                        {icon}
                                    </span>
                                ))}
                            </content.footer.social.markup>
                        )}
                    </content.footer.markup>
                )}
            </div>
        </div>
    );
}

export default Layout;