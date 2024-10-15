import { TsDivider, TsInputGroup } from '../../../../common/components/controls/tsControls';

function AdvanceTab(){
    return (
        <div>
            <TsInputGroup 
            label='Margin'
            name='containerSettings.margin'
            unit='px'
            />
            <TsInputGroup 
            label='Padding'
            name='containerSettings.padding'
            unit='px'
            />
            <TsInputGroup 
            label='Border Radius'
            name='containerSettings.borderRadius'
            unit='px'
            />
        </div>
    );
}

export default AdvanceTab;