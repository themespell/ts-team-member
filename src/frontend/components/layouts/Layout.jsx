import { useState, useEffect } from 'react';

function Layout({ team_members, settings, layoutType, id, imageUrl, title, subtitle, description, socialIcons, details, animationConfig }) {
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        if (layoutType) {
            import(`./${layoutType}/Frontend.jsx`)
                .then((module) => {
                    const LoadedComponent = module.default;
                    setComponent(() => LoadedComponent);
                })
                .catch((error) => {
                    console.error("Error loading component:", error);
                });
        }
    }, [layoutType]);

    if (!Component) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Component
                team_members={team_members}
                settings={settings}
                id={id}
                imageUrl={imageUrl}
                title={title}
                subtitle={subtitle}
                description={description}
                socialIcons={socialIcons}
                details={details}
                animationConfig={animationConfig}
            />
        </div>
    );
}

export default Layout;