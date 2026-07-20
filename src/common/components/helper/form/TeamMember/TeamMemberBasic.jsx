import { useState, useEffect } from 'react';
import { Form } from 'antd';
import { TsInput, TsMedia, TsSelect } from '../../../controls/tsControls';
import { Camera } from 'lucide-react';
import {getTranslations} from "../../../../utils/translations.js";
import {fetchData} from "../../../../services/fetchData.js";

function TeamMemberBasic({ form, member_image }) {
  const translations = getTranslations();
  const [memberImage, setMemberImage] = useState(member_image || null);
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    if (member_image) {
      setMemberImage(member_image);
    }
  }, [member_image]);

  useEffect(() => {
    fetchData('tsteam/member_category/fetch', (response) => {
      if (response.success && response.data) {
        const options = response.data.map((category) => ({
          label: category.name,
          value: category.slug,
        }));
        setCategoryOptions(options);
      }
    });
  }, []);

  return (
    <div style={{ padding: '20px 32px 12px' }}>
      {/* Image Upload - Compact */}
      <div className="mb-4 flex items-center gap-4">
        <div className="relative group">
          <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-dashed border-[#ddd] bg-[#f9f9f9] flex items-center justify-center transition-all group-hover:border-[#703FD6]">
            {memberImage ? (
              <img src={memberImage} alt="Member" className="h-full w-full object-cover" />
            ) : (
              <Camera className="h-6 w-6 text-[#ccc]" />
            )}
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <TsMedia
              label={translations.memberImage}
              name="member_image"
              form={form}
              style="dnd"
              mediaUrl={memberImage}
              setMediaUrl={setMemberImage}
            />
          </div>
        </div>
        <div className="flex-1">
          <TsMedia
            label={translations.memberImage}
            name="member_image"
            form={form}
            style="dnd"
            mediaUrl={memberImage}
            setMediaUrl={setMemberImage}
          />
          <p className="mt-1 text-xs text-[#999]">400x400px recommended</p>
        </div>
      </div>

      {/* Form Fields - Compact Grid */}
      <div className="grid grid-cols-1 gap-x-4 gap-y-0 sm:grid-cols-2">
        <TsInput
          label={translations.memberName}
          name="member_name"
          required={true}
        />
        <TsInput
          label={translations.memberDesignation}
          name="member_designation"
        />
        <TsInput
          label={translations.memberEmail}
          name="member_email"
        />
        <TsInput
          label={translations.memberMobile}
          name="member_phone"
        />
        <TsSelect
          label={translations.memberCategory || "Member Category"}
          name="member_category"
          form={form}
          options={categoryOptions}
        />
        <TsInput
          label={translations.memberDescription}
          name="member_description"
          type="description"
          maxLength={150}
        />
      </div>
    </div>
  );
}

export default TeamMemberBasic;
