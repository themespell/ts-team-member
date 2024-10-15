import { TsInput, TsMedia } from '../../../controls/tsControls';

function TeamMemberBasic({ form }) {
  return (
    <>
      <TsInput 
      label="Member Name"
      name="member_name"
      required={true}
      />

      <TsInput 
      label="Member Designation"
      name="member_designation"
      />

      <TsMedia 
        label="Member Image" 
        name="member_image"
        form={form}
      />

      <TsInput 
      label="Member Description"
      name="member_description"
      type="description"
      maxLength={150}
      />
    </>
  );
}

export default TeamMemberBasic;