import { TsSlider, TsColor } from '../../../../common/components/controls/tsControls';
import * as TsLayouts from '../../../../frontend/components/layouts/layouts.js';
import editorStore from '../../../states/editorStore';
import renderControls from '../../../../common/components/controls/tsRenderControls.jsx';

function StyleTab({ layoutType }) {
    const { containerSettings, columnSettings, selectedView } = editorStore();

    // Dynamically render controls
    const renderControl = (control, index) => {
        const ControlComponent = renderControls[control.type];
        return ControlComponent ? (
            <div key={index}>
                {ControlComponent(control)}
            </div>
        ) : null;
    };

    // Check layoutType and get controls from layout
    let controls = [];
    if (layoutType && TsLayouts[layoutType]) {
        const layoutModule = TsLayouts[layoutType];

        if (layoutModule.register_controls) {
            const controlConfig = layoutModule.register_controls();
            controls = controlConfig.controls || [];
        } else {
            console.error(`register_controls not found for layout: ${layoutType}`);
        }
    } else {
        console.error(`Layout type "${layoutType}" not found in TsLayouts.`);
    }

    return (
        <>
            <TsSlider
                label="Container Width"
                range={containerSettings.width.range}
                name='containerSettings.width.default'
                responsive={true}
                unit={true}
            />
            {selectedView.value === 'grid' && (
            <div>
                <TsSlider
                    label="Columns"
                    range={columnSettings.column.range}
                    name='columnSettings.column.default'
                    responsive={true}
                />
            </div>
            )}

            <TsSlider
                label="Column Gap"
                range={columnSettings.gap.range}
                name='columnSettings.gap.default'
                responsive={true}
                unit={true}
            />

            <TsColor
                label="Container Background Color"
                name='containerSettings.backgroundColor'
            />

            {/* Dynamically render the controls */}
            {controls.map((control, index) => renderControl(control, index))}
        </>
    );
}

export default StyleTab;