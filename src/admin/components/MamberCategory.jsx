import Container from "../../common/components/Container";
import {getTranslations} from "../../common/utils/translations.js";

function MemberCategory() {
    const translations = getTranslations();
    return (
        <div className="min-h-fit flex">
            {/* Main Content */}
            <div className="flex-1">
                <Container
                    type='member_category'
                    // title={translations.teamMember}
                    title='Member Category'
                />
            </div>
        </div>
    );
}

export default MemberCategory;