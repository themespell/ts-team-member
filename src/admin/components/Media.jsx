import { Button } from 'antd';

function Media() {
    jQuery(document).ready(function($){
        // Define a variable wkMedia
        var wkMedia;
      
        $('#wk-button').click(function(e) {
          e.preventDefault();
          // If the upload object has already been created, reopen the dialog
            if (wkMedia) {
            wkMedia.open();
            return;
          }
          // Extend the wp.media object
          wkMedia = wp.media.frames.file_frame = wp.media({
            title: 'Select media',
            button: {
            text: 'Select media'
          }, multiple: false });
      
          // When a file is selected, grab the URL and set it as the text field's value
          wkMedia.on('select', function() {
            var attachment = wkMedia.state().get('selection').first().toJSON();
            console.log(attachment);
            $('#wk-media-url').val(attachment.url);
          });
          // Open the upload dialog
          wkMedia.open();
        });
      });

 const admin_url = tsteam_settings.admin_url;
  return (
    <div className='grid grid-cols-2 gap-6 w-2/6'>
      <Button id="wk-button" type="primary">
        Open Media Library
      </Button>
      <Button href={`${admin_url}edit.php?post_type=tsteam-showcase&path=editor`} type="primary">
        Open Editor
      </Button>
    </div>
  );
}

export default Media;