import { Collapse } from "antd";
import { TsFont} from '../../../../common/components/controls/tsControls';
import editorStore from '../../../states/editorStore';
import editorLocal from "../../../states/editorLocal.js";


function TypographyTab() {
    const { selectedView, carouselSettings, showcaseDetails } = editorStore();
    const { availableLayouts, availableViews, availableDetails } = editorLocal();

    const isPro = !!tsteam_settings.is_pro;
    const isLicenseInactive = !!window.tsTeamPro?.is_licence_inactive;
    const isProActive = isPro && !isLicenseInactive;

    return (
        <div>
            <TsFont
                label="Name Typography"
                name="typography.name"
                targetedClass=""
            />
            <TsFont
                label="Designation Typography"
                name="typography.designation"
                targetedClass=""
            />
            <TsFont
                label="Description Typography"
                name="typography.description"
                targetedClass=""
            />
            <TsFont
                label="Details Typography"
                name="typography.details"
                targetedClass=""
                isPro={!isProActive}
            />
        </div>
    );
}

export default TypographyTab;