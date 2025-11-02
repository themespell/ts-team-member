export function wpbakeryLoader(initializeReact) {
    // Check if we're in WPBakery editor mode
    const isWPBakeryEditor = () => {
        // Check for WPBakery frontend editor (inline mode)
        if (window.vc_iframe) {
            return true;
        }

        // Check for classic backend editor
        if (typeof window.vc !== 'undefined') {
            return true;
        }

        // Additional check for WPBakery environment
        if (document.body.classList.contains('vc_editor')) {
            return true;
        }

        return false;
    };

    if (!isWPBakeryEditor()) {
        console.log("Not in WPBakery editor mode. Skipping WPBakery-specific logic.");
        return;
    }

    console.log("WPBakery editor detected. Initializing...");

    // Function to initialize all showcase elements
    const initializeAllShowcases = () => {
        const showcaseElements = document.querySelectorAll('.tsteam-showcase');
        showcaseElements.forEach((element) => {
            // Check if already initialized to avoid double rendering
            if (!element.hasAttribute('data-tsteam-initialized')) {
                element.setAttribute('data-tsteam-initialized', 'true');
                initializeReact(element);
            }
        });
    };

    // Initial load
    setTimeout(() => {
        initializeAllShowcases();
    }, 500);

    // Observer for dynamic content changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Check if the node itself is a showcase
                    if (node.classList && node.classList.contains('tsteam-showcase')) {
                        if (!node.hasAttribute('data-tsteam-initialized')) {
                            node.setAttribute('data-tsteam-initialized', 'true');
                            initializeReact(node);
                        }
                    }

                    // Check for showcase elements within the node
                    const newShowcaseElements = node.querySelectorAll('.tsteam-showcase');
                    newShowcaseElements.forEach((element) => {
                        if (!element.hasAttribute('data-tsteam-initialized')) {
                            element.setAttribute('data-tsteam-initialized', 'true');
                            initializeReact(element);
                        }
                    });
                }
            });
        });
    });

    // Start observing the DOM for changes
    observer.observe(document.body, { childList: true, subtree: true });

    // WPBakery specific event handlers
    if (window.vc && window.vc.events) {
        // When elements are added
        window.vc.events.on('shortcodes:add', function(model) {
            console.log('WPBakery element added');
            setTimeout(() => {
                initializeAllShowcases();
            }, 300);
        });

        // When elements are updated
        window.vc.events.on('shortcodes:update', function(model) {
            console.log('WPBakery element updated');
            setTimeout(() => {
                initializeAllShowcases();
            }, 300);
        });

        // When frontend editor is loaded
        window.vc.events.on('app.render', function() {
            console.log('WPBakery app rendered');
            setTimeout(() => {
                initializeAllShowcases();
            }, 500);
        });
    }

    // Handle WPBakery frontend editor iframe
    if (window.vc_iframe) {
        window.vc_iframe.on('ready', function() {
            console.log('WPBakery iframe ready');
            setTimeout(() => {
                initializeAllShowcases();
            }, 500);
        });
    }

    // Fallback: Listen for any changes in the WPBakery editor
    jQuery(document).on('vc-reload', function() {
        console.log('WPBakery reload triggered');
        setTimeout(() => {
            initializeAllShowcases();
        }, 300);
    });
}