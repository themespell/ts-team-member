const ajax_url = tsteam_settings.ajax_url;

export const deleteShowcase = (post_id) => {
  return new Promise((resolve, reject) => {
    jQuery.post(ajax_url, {
      _ajax_nonce: tsteam_settings.nonce,
      action: "tsteam_showcase/delete_showcase",
      post_id: post_id,
    })
    .done((response) => {
      if (response.success) {
        resolve(response);
      } else {
        reject(response);
      }
    })
    .fail((error) => {
      reject(error);
    });
  });
};
