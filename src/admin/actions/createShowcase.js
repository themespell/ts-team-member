const ajax_url = tsteam_settings.ajax_url;

export const createShowcase = (data) => {
    return new Promise((resolve, reject) => {
        jQuery.post(ajax_url, {
            _ajax_nonce: tsteam_settings.nonce,
            action: "tsteam_showcase/create_showcase",
            title: data.title,
        }, function(response) {
            if (response.success) {
                resolve(response);  // Resolve the promise on success
            } else {
                reject(response);  // Reject the promise on failure
            }
        });
    });
};