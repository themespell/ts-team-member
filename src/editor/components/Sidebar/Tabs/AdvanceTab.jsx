import { TsDivider, TsInputGroup } from '../../../../common/components/controls/tsControls';
import editorStore from '../../../states/editorStore';

function AdvanceTab(){
    return (
        <div>
            <TsInputGroup 
            label='Margin'
            />
            <TsInputGroup 
            label='Padding'
            />
        </div>
    );
}

export default AdvanceTab;