import { Tabs } from "antd";
import { TsDivider, TsSlider, TsColor, TsFont } from '../../../../common/components/controls/tsControls';
import editorStore from '../../../states/editorStore';
import editorFunction from '../../../states/editorFunction';

function StyleTab(){
    const { containerSettings, columnSettings, cardStyle } = editorStore();
    const { saveSettings } = editorFunction();
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

            <Tabs defaultActiveKey="1" 
            type="card"
            items={[
                {
                    key: '1',
                    label: 'Normal',
                    children: [
                        <>
                        <TsColor
                        label='Background Color'
                        value={cardStyle.color?.backgroundColor}
                        onChange={(value) => saveSettings('cardStyle.color.backgroundColor', value)}
                        />
                        <TsColor
                        label='Text Color'
                        value={cardStyle.color?.textColor}
                        onChange={(value) => saveSettings('cardStyle.color.textColor', value)}
                        />
                        </>
                    ],
                  },
                  {
                    key: '2',
                    label: 'Hover',
                    children: [
                        <>
                        {/* <TsColor
                        label='Background Color'
                        value={'#000'}
                        />
                        <TsColor
                        label='Text Color'
                        value={'#000'}
                        /> */}
                        </>
                    ],
                  },
            ]}
            />

            <TsDivider />

            <TsFont
            label="Font"
            isPro={false}
            />

        </>
    );
}

export default StyleTab;