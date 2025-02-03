import {TsColor, TsDivider, TsInputGroup} from '../../../../common/components/controls/tsControls';
import editorStore from "../../../states/editorStore.js";

function GlobalTab(){
    const { containerSettings, columnSettings, selectedView } = editorStore();
    return (
        <div>
            <TsColor
                label="Container Background Color"
                name='containerSettings.backgroundColor'
            />
            <TsInputGroup 
            label='Container Margin'
            name='containerSettings.margin'
            unit='px'
            />
            <TsInputGroup 
            label='Container Padding'
            name='containerSettings.padding'
            unit='px'
            />
            <TsInputGroup 
            label='Container Border Radius'
            name='containerSettings.borderRadius'
            unit='px'
            />
        </div>
    );
}

export default GlobalTab;