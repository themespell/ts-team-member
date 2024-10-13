import { Tabs } from 'antd';
import { TsDivider, TsSlider, TsColor, TsFont } from '../../../../common/components/controls/tsControls';
import * as TsLayouts from '../../../../frontend/components/layouts/layouts.js';
import editorStore from '../../../states/editorStore';
import editorFunction from '../../../states/editorFunction';
import renderControls from '../../../../common/components/controls/tsRenderControls.jsx';

function StyleTab({ layoutType }) {
    const { containerSettings, columnSettings, cardStyle } = editorStore();
    const { saveSettings } = editorFunction();

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
                value={containerSettings.width.default}
                unit="px"
                onChange={(value) => saveSettings('containerSettings.width.default', value)}
            />

            <TsSlider
                label="Columns"
                range={columnSettings.column?.range}
                value={columnSettings.column?.default}
                onChange={(value) => saveSettings('columnSettings.column.default', value)}
            />

            <TsSlider
                label="Column Gap"
                range={columnSettings.gap?.range}
                value={columnSettings.gap?.default}
                unit="px"
                onChange={(value) => saveSettings('columnSettings.gap.default', value)}
            />

            <Tabs
                defaultActiveKey="1"
                type="card"
                items={[
                    {
                        key: '1',
                        label: 'Normal',
                        children: (
                            <>
                                <TsColor
                                    label="Background Color"
                                    value={cardStyle.color?.backgroundColor}
                                    onChange={(value) => saveSettings('cardStyle.color.backgroundColor', value)}
                                />
                                <TsColor
                                    label="Text Color"
                                    value={cardStyle.color?.textColor}
                                    onChange={(value) => saveSettings('cardStyle.color.textColor', value)}
                                />
                            </>
                        )
                    },
                    {
                        key: '2',
                        label: 'Hover',
                        children: <>{/* Placeholder for hover settings */}</>
                    }
                ]}
            />

            <TsDivider />

            {/* Dynamically render the controls */}
            {controls.map((control, index) => renderControl(control, index))}

            <TsFont label="Font" isPro={false} />
        </>
    );
}

export default StyleTab;