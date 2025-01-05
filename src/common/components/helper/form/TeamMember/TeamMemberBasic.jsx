import { useState, useEffect } from 'react';
import { TsInput, TsMedia, TsImage } from '../../../controls/tsControls';

function TeamMemberBasic({ form, member_image }) {
  const [memberImage, setMemberImage] = useState(member_image || null);

  useEffect(() => {
    if (member_image) {
      setMemberImage(member_image);
    }
  }, [member_image]);
  
  return (
    <div className="p-6 bg-white">
      <div className='grid grid-cols-2 gap-4'>
        <TsInput 
        label="Member Name"
        name="member_name"
        required={true}
        />

        <TsInput 
        label="Member Designation"
        name="member_designation"
        />

        <TsInput
        label="Member Email"
        name="member_email"
        />

        <TsInput 
        label="Member Mobile"
        name="member_phone"
        />

      </div>
      
      <div className='flex items-center gap-6 w-full'>
      {memberImage && 
      <TsImage
      mediaUrl={memberImage}
      type='avatar'
      />
      }

      <TsMedia 
        label="Member Image"
        name="member_image"
        form={form}
        mediaUrl={memberImage}
        setMediaUrl={setMemberImage}
      />
      </div>

      <TsInput 
      label="Member Description"
      name="member_description"
      type="description"
      maxLength={150}
      />
    </div>
  );
}

export default TeamMemberBasic;