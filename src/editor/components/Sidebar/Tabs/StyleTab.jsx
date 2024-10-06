import { TsDivider, TsColor, TsFont } from '../../../../common/components/controls/tsControls';
import editorStore from '../../../states/editorStore';

function StyleTab(){
    
    return (
        <div>
            <TsColor
            label='Background Color'
            value={'#000'}
            />
            <TsColor
            label='Text Color'
            value={'#000'}
            />
            <TsDivider />
            <TsFont
            label="Font"
            isPro={false}
            />
        </div>
    );
}

export default StyleTab;