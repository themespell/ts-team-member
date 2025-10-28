import { TsInput } from '../../controls/tsControls';
import { getTranslations } from "../../../utils/translations.js";

function MemberCategoryFields({ form, term_id }) {
    const translations = getTranslations();

    return (
        <div className="p-6">
            <TsInput
                label={translations.categoryName || 'Category Name'}
                name="name"
                required={true}
            />

            <TsInput
                label={translations.slug || 'Slug'}
                name="slug"
                placeholder="category-slug"
            />
        </div>
    );
}

export default MemberCategoryFields;