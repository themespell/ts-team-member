import {TsColor, TsDivider, TsInputGroup, TsSlider} from '../../../../common/components/controls/tsControls';
import editorStore from "../../../states/editorStore.js";

function SocialTab(){
    const { common } = editorStore();
    return (
        <div>
            <TsSlider
                label="Social Icon Border Radius"
                name="layout.borderRadius.socialIcon"
                range={common.range}
                unit={true}
            />

            <TsColor
                label="Social Icon Color"
                name="layout.color.socialIcon"
            />

            <TsColor
                label="Social Icon Background Color"
                name="layout.color.socialIconBg"
            />
        </div>
    );
}

export default SocialTab;