import config from './config.json';

function Card({ settings, imageUrl, title, subtitle, description, socialIcons, details }) {
    const {container, image, content, animation} = config.layout;

    const { header, body, footer } = content;

    return (
        <div className={container.style}>
            {imageUrl && (
                <img src={imageUrl} alt={title} className={image.style} />
            )}

            <div 
            className={content.style}
            style={{
                backgroundColor: settings?.tscard?.backgroundColor,
            }}
            >
                {header && (
                    <div>
                        {header.title && (
                            <header.title.markup 
                            className={header.title.style}
                            style={{
                                color: settings?.tscard?.textColor,
                            }}
                            >
                                {title}
                            </header.title.markup>
                        )}
                        {header.subtitle.visible && subtitle && (
                            <header.subtitle.markup className={header.subtitle.style}>
                                {subtitle}
                            </header.subtitle.markup>
                        )}
                    </div>
                )}

                {body.visible && description && (
                    <body.markup className={body.style}>
                        {description}
                    </body.markup>
                )}

                {footer && footer.social.visible && (
                    <footer.markup className={footer.social.container.style}>
                        <footer.social.markup className={footer.social.icon.style}>
                            {socialIcons && socialIcons.map((icon, index) => (
                                <span key={index}>{icon}</span>
                            ))}
                        </footer.social.markup>
                    </footer.markup>
                )}

                {details ? details() : ''}
            </div>
        </div>
    );
}

export default Card;