const ajax_url = tsteam_settings.ajax_url;

export const createData = (action, data) => {
    return new Promise((resolve, reject) => {
        jQuery.post(ajax_url, {
            _ajax_nonce: tsteam_settings.nonce,
            action: action,
            ...data,
        }, function(response) {
            if (response.success) {
                resolve(response);
            } else {
                reject(response);
            }
        });
    });
};