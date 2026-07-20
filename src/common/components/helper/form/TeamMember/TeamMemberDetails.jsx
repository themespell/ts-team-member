import { TsInput, TsEditor } from '../../../controls/tsControls';
import {getTranslations} from "../../../../utils/translations.js";

function TeamMemberDetails({ form, member_information }) {
  const translations = getTranslations();
  return (
    <div style={{ padding: '20px 32px 12px' }}>
      <div className="grid grid-cols-1 gap-x-5 gap-y-1 sm:grid-cols-2">
        <TsInput
          label={translations.memberTelephone}
          name="member_telephone"
        />
        <TsInput
          label={translations.yearsOfExperience}
          name="member_experience"
        />
        <TsInput
          label={translations.company}
          name="member_company"
        />
        <TsInput
          label={translations.location}
          name="member_location"
        />
      </div>

      <div className="mt-2">
        <label className="mb-2 block text-sm font-medium text-[#333]">{translations.detailsInformation}</label>
        <TsEditor
          name="member_information"
          defaultValue={member_information}
          required={false}
          form={form}
        />
      </div>
    </div>
  );
}

export default TeamMemberDetails;
