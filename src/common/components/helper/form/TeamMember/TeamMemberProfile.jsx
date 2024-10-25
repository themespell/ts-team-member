import { TsInput, TsRepeter } from '../../../controls/tsControls';

function TeamMemberProfile({ form }) {

  return (
    <>
        <div className='grid grid-cols-2 gap-3'>

        <TsInput
        label="Website"
        name="member_website"
        />

        <TsInput 
        label="Resume Link"
        name="member_resume"
        />

        <TsInput 
        label="Hire Link"
        name="member_hire"
        />

        <TsInput
        label="Donation Link"
        name="member_donation"
        />
        
        </div>

        <TsRepeter
        label="Social Links"
        >
          
        </TsRepeter>
    </>
  );
}

export default TeamMemberProfile;