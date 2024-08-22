const ajax_url = tsteam_settings.ajax_url;
const admin_url = tsteam_settings.admin_url;

export const createShowcase = ( data ) => {
    jQuery.post(ajax_url, {
      _ajax_nonce: tsteam_settings.nonce,
      action: "tsteam_showcase/create_showcase",
      title: data.title,
      }, function(response) {
        if (response.success) {
            // window.location.href = `${admin_url}edit.php?post_type=tsteam-showcase&path=admin`
          } else {
            console.log('Error:', response);
          }
      }
    );
}