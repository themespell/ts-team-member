import { useState, useEffect } from 'react';

function Layout({ team_members, settings, layoutType, id, imageUrl, title, subtitle, description, socialIcons, details, animationConfig }) {
    const [Component, setComponent] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (layoutType) {
            setIsLoading(true);
            setError(null);

            import(`./${layoutType}/Frontend.jsx`)
                .then((module) => {
                    const LoadedComponent = module.default;
                    setComponent(() => LoadedComponent);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.error("Error loading layout component:", err);
                    setError(`Layout "${layoutType}" not found or failed to load. Please check if Frontend.jsx exists.`);
                    setIsLoading(false);
                });
        }
    }, [layoutType]);

    if (isLoading) {
        return (
            <div className="w-full p-8 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-2 text-gray-600">Loading {layoutType} layout...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full p-8 text-center bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">Layout Error</p>
                <p className="text-red-600 text-sm mt-1">{error}</p>
                <p className="text-red-500 text-xs mt-2">Available layouts: Card, HorizontalCard, OverlayCard, Tiles</p>
            </div>
        );
    }

    if (!Component) {
        return (
            <div className="w-full p-8 text-center bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 font-medium">Component not loaded</p>
                <p className="text-yellow-600 text-sm mt-1">Please try selecting a different layout.</p>
            </div>
        );
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
