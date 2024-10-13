import editorStore from '../../../../editor/states/editorStore';

const register_controls = () => {
    const range = {
        min: 0,
        max: 100
    };
    return {
        controls: [
            {
                type: 'slider',
                label: 'Slider',
                name: 'newslider.default',
                range: range,
                value: editorStore().newslider?.default || 5,
            },
            {
                type: 'divider',
            }
        ]
    };
};

export { register_controls };