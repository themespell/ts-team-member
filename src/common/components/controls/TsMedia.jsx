import { useState } from 'react';
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

  const onFinish = (values) => {
    console.log('Form values:', values);
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
        <div className='grid grid-cols-2 gap-6 w-2/6'>
          <Button id="wk-button" type="primary" onClick={openMediaLibrary}>
            Select {label}
          </Button>

          {/* Conditionally render the Image component if mediaUrl is set */}
          {mediaUrl && (
            <Image
              src={mediaUrl}
              alt="Selected media"
              style={{ marginTop: '20px' }}
            />
          )}
        </div>
      </Form.Item>
    </>
  );
}

export default TsMedia;