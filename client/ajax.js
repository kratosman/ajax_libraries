export function ajax(params, callback) {
    
    var xhr = new XMLHttpRequest();
    
    xhr.onload = function() { 
        if (xhr.status === 200 && xhr.readyState === 4) {
            var response = xhr.response;

            if (typeof callback === 'function') {
                callback(null, response);
            }
        } else {
            const error = new Error(`Request failed. Status code: ${xhr.status}`);

            if (typeof callback === 'function') {
                callback(error, null)
            }
        }
    }

    xhr.onerror = function() {
        const error = new Error(`Network Error`);

        if (typeof callback === 'function') {
            callback(error, null);
        }
    }

    xhr.open(params.method, params.url);

    for (const [key, value] of Object.entries(params.headers || {})) {
        xhr.setRequestHeader(key, value);
    }

    if (params.body !== undefined) {
        xhr.send(params.body);
    } else if (params.data !== undefined) {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(params.data));
    } else {
        xhr.send(); 
    }

    
}

ajax.get = function(url, callback){
    ajax({ 
        method: 'GET', 
        url
    }, 
        callback);
};

ajax.post = function(url, header, data, callback){
    ajax({ 
        method: 'POST', 
        url, 
        header,
        data: data}, 
        callback);
}

ajax.put = function(url, header, callback){
    ajax({ 
        method: 'PUT', 
        url, 
        header}, 
        callback);
}
ajax.delete = function(url, header, callback){
    ajax({ 
        method: 'DELETE', 
        url, 
        header}, 
        callback);
}