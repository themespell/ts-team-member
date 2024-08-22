const ajax_url = tsteam_settings.ajax_url;

export const getShowcase = (callback) => {
    jQuery.get(ajax_url, {
      _ajax_nonce: tsteam_settings.nonce,
      action: "tsteam_showcase/get_showcase",
    }, function(response) {
      if (typeof callback === "function") {
        callback(response);
      }
    });
};  