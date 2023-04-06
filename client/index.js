import {ajax} from './ajax.js';

const usernameInput = document.getElementById('username');

usernameInput.addEventListener('blur', () => {

    function handlePostReq(error, response) {
        if (error) {
            console.error(error);
            return;
        }

        if (!response) { 
            console.error("Received empty response from server");
            return;
        }

        console.log(JSON.parse(response));

    }
    
    var data = usernameInput.value;
    console.log(data);

    ajax.post('/data_post',{'Content-Type': 'application/json'},{'username': data}, handlePostReq)

    usernameInput.value = "";
});



function handleGetReq(error, response) {
    if (error) {
        console.error(error);
        return;
    }

    if (!response) {
        console.error('Received empty response from server');
        return;
    }

    console.log(JSON.parse(response));
}


//METHOD ONE usage
ajax.get('/data', handleGetReq);

//method two usage
ajax({
    method: 'GET',
    url: '/data'
}, function(err, response) {
    if (err) throw err;

    if (!response) {
        console.error('Opps!!');
        return;
    }

    console.log(JSON.parse(response))
})