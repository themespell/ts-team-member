import {TsColor, TsSelect, TsSlider} from '../../../../common/components/controls/tsControls';
import editorStore from "../../../states/editorStore.js";
import {getTranslations} from "../../../../common/utils/translations.js";
import {SOCIAL_ICON_STYLES} from "../../../../frontend/components/helper/socialIcons.jsx";

function SocialTab(){
    const translations = getTranslations();
    const { common } = editorStore();
    const socialStyleOptions = [
        { label: translations.customColors, value: SOCIAL_ICON_STYLES.custom },
        { label: translations.brandIconOnly, value: SOCIAL_ICON_STYLES.brand },
        { label: translations.brandSoft, value: SOCIAL_ICON_STYLES.brandSoft },
        { label: translations.brandSolid, value: SOCIAL_ICON_STYLES.brandSolid },
    ];

    return (
        <div>
            <TsSelect
                label={translations.socialIconStyle}
                name="layout.socialIconStyle"
                defaultValue={SOCIAL_ICON_STYLES.custom}
                options={socialStyleOptions}
            />

            <TsSlider
                label={translations.socialIconBorderRadius}
                name="layout.borderRadius.socialIcon"
                range={common.range}
                unit={true}
            />

            <TsColor
                label={translations.socialIconColor}
                name="layout.color.socialIcon"
            />

            <TsColor
                label={translations.socialIconBackgroundColor}
                name="layout.color.socialIconBg"
            />
        </div>
    );
}

export default SocialTab;
