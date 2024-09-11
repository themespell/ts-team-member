const ajax_url = tsteam_settings.ajax_url;

export const createData = (action, data) => {
    return new Promise((resolve, reject) => {
        jQuery.post(ajax_url, {
            _ajax_nonce: tsteam_settings.nonce,
            action: action,
            ...data,  // Spread the data object to include all form fields
        }, function(response) {
            if (response.success) {
                resolve(response);  // Resolve the promise on success
            } else {
                reject(response);  // Reject the promise on failure
            }
        });
    });
};