import { TsInput, TsEditor } from '../../../controls/tsControls';

function TeamMemberDetails({ form, member_information }) {
  return (
    <>
        <div className='grid grid-cols-2 gap-3'>

        <TsInput 
        label="Member Telephone"
        name="member_telephone"
        />

        <TsInput
        label="Years of Experience"
        name="member_experience"
        />

        <TsInput
        label="Company"
        name="member_company"
        />

        <TsInput
        label="Location"
        name="member_location"
        />

        </div>

        <TsEditor
        label="Details Information" 
        name="member_information"
        defaultValue={member_information}
        required={false} 
        form={form} 
        />
    </>
  );
}

export default TeamMemberDetails;