import { TsInput, TsRepeater } from '../../../controls/tsControls';
import { safeJsonParse } from '../../../../utils/safeJsonParse';
import {getTranslations} from "../../../../utils/translations.js";

function TeamMemberProfile({ form, social_links, skills }) {
  const translations = getTranslations();
  return (
    <div style={{ padding: '20px 32px 12px' }}>
      {/* Website Links */}
      <div className="mb-6">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#999]">Website & Links</h4>
        <div className="grid grid-cols-1 gap-x-5 gap-y-1 sm:grid-cols-2">
          <TsInput
            label={translations.website}
            name="member_website"
          />
          <TsInput
            label={translations.resumeLink}
            name="member_resume"
          />
          <TsInput
            label={translations.hireLink}
            name="member_hire"
          />
          <TsInput
            label={translations.donationLink}
            name="member_donation"
          />
          <TsInput
            label={translations.videoLink}
            name="member_video"
            showProBadge={true}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#f0f0f0]" />

      {/* Social Links */}
      <div className="my-6">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#999]">Social Links</h4>
        <TsRepeater
          form={form}
          label={translations.socialLinks}
          fieldName="member_social"
          defaultValues={safeJsonParse(social_links)}
          required={false}
          fieldNames={['link']}
          controlSupport={{
            type: 'select',
            name: 'socialChannel',
            options: [
              { label: 'Facebook', value: 'facebook' },
              { label: 'Twitter', value: 'twitter' },
              { label: 'LinkedIn', value: 'linkedin' },
              { label: 'Instagram', value: 'instagram' },
              { label: 'YouTube', value: 'youtube' },
              { label: 'GitHub', value: 'github' },
            ],
            placeholder: 'Social Media',
          }}
        />
      </div>

      {/* Divider */}
      <div className="border-t border-[#f0f0f0]" />

      {/* Skills */}
      <div className="mt-6">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#999]">Skills</h4>
        <TsRepeater
          form={form}
          label={translations.skills}
          fieldName="member_skills"
          defaultValues={safeJsonParse(skills)}
          required={false}
          fieldNames={['skill']}
          controlSupport={{
            type: 'inputnumber',
            name: 'rating',
            placeholder: 'Skill Rating',
          }}
        />
      </div>
    </div>
  );
}

export default TeamMemberProfile;
