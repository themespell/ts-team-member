import { Form } from 'antd';
import { Upload } from 'lucide-react';

function TsMedia({ label, name, form, style, mediaUrl, setMediaUrl }) {
  const openMediaLibrary = () => {
    var wkMedia;

    if (wkMedia) {
      wkMedia.open();
      return;
    }

    wkMedia = wp.media.frames.file_frame = wp.media({
      title: `Select ${label}`,
      button: {
        text: `Select ${label}`,
      },
      multiple: false,
    });

    wkMedia.on('select', function () {
      const attachment = wkMedia.state().get('selection').first().toJSON();
      if (setMediaUrl) {
        setMediaUrl(attachment.url);
      }
      form.setFieldsValue({ [name]: attachment.url });
    });

    wkMedia.open();
  };

  return (
    <Form.Item
      name={name}
      rules={[
        {
          required: true,
          message: `Please select ${label}!`,
        },
      ]}
      style={{ marginBottom: 0 }}
    >
      <button
        type="button"
        onClick={openMediaLibrary}
        className="inline-flex items-center gap-2 rounded-lg border border-[#e0e0e0] bg-white px-4 py-2 text-sm font-medium text-[#666] transition hover:border-[#703FD6] hover:bg-[#f8f5ff] hover:text-[#703FD6]"
      >
        <Upload className="h-4 w-4" />
        Choose Image
      </button>
    </Form.Item>
  );
}

export default TsMedia;
