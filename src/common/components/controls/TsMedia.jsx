import { useState } from 'react';
import TsButton from './TsButton';
import { Button, Image, Form } from 'antd';

function TsMedia({ label, name, required, form }) {
  const [mediaUrl, setMediaUrl] = useState(null);

  const openMediaLibrary = () => {
    var wkMedia;

    // Create media library frame or open existing one
    if (wkMedia) {
      wkMedia.open();
      return;
    }

    wkMedia = wp.media.frames.file_frame = wp.media({
      title: `Select ${label}`,
      button: {
        text: `Select ${label}`,
      },
      multiple: false,  // Only allow single selection
    });

    wkMedia.on('select', function () {
      const attachment = wkMedia.state().get('selection').first().toJSON();
      setMediaUrl(attachment.url);  // Set the media URL to state
      form.setFieldsValue({ [name]: attachment.url }); // Set form field value dynamically using `name`
    });

    wkMedia.open();
  };

  return (
    <>
      <Form.Item
        label={label}
        name={name}
        rules={[
            {
                required: required,  // Fix this line
                message: `Please select ${label}!`
            }
        ]}
      >
        <div className='flex items-center gap-6 w-full'>
          {/* Conditionally render the Image component if mediaUrl is set */}
          {mediaUrl && (
            <Image
              src={mediaUrl}
              alt="Selected media"
              style={{ 
                borderRadius: '100%',
                height: '10rem',
                width: '10rem',
              }}
            />
          )}
          <TsButton 
          label='Select Member Image'
          id="wk-button"
          htmlType="button"
          onClick={openMediaLibrary}
          />

        </div>
      </Form.Item>
    </>
  );
}

export default TsMedia;