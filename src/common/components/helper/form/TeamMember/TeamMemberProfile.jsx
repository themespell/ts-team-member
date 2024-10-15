import { TsEditor } from '../../../controls/tsControls';

function TeamMemberProfile({ form }) {

  return (
    <>
        <div className='grid grid-cols-1 gap-3'>
        <TsEditor 
        label="Member Details" 
        name="information" 
        required={true} 
        form={form} 
      />
        </div>
    </>
  );
}

export default TeamMemberProfile;