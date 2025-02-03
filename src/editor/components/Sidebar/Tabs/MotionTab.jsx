import { Collapse } from "antd";
import {TsFont, TsSelect} from '../../../../common/components/controls/tsControls';
import editorStore from '../../../states/editorStore';
import editorLocal from "../../../states/editorLocal.js";


function MotionTab() {
    const { selectedView, carouselSettings, showcaseDetails } = editorStore();
    const { availableHoverAnimation } = editorLocal();

    return (
        <div>
            <TsSelect
                label="Layout Hover Animation"
                name="hoverAnimation"
                options={availableHoverAnimation}
            />
        </div>
    );
}

export default MotionTab;