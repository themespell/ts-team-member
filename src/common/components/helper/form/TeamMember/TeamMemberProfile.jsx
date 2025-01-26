import { TsInput, TsRepeater } from '../../../controls/tsControls';
import { safeJsonParse } from '../../../../utils/safeJsonParse';

function TeamMemberProfile({ form, social_links }) {

  return (
    <div className="p-6">
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


        <TsRepeater
        form={form}
        label="Social Links"
        fieldName="member_social"
        defaultValues={safeJsonParse(social_links)}
        required={false}
        fieldNames={['link']}
        controlSupport={{
          type: 'select',
          name: 'socialChannel',
          options: [
            {
              label: 'Facebook',
              value: 'facebook',
            },
            {
              label: 'Twitter',
              value: 'twitter',
            },
            {
              label: 'Linkedin',
              value: 'linkedin',
            },
            {
              label: 'Instagram',
              value: 'instagram',
            },
            {
              label: 'Youtube',
              value: 'youtube',
            },
            {
              label: 'Github',
              value: 'github',
            },
          ],
          placeholder: 'Social Media',
        }}
      />
    </div>
  );
}

export default TeamMemberProfile;