var urllib = require("urllib");

function doCall(urlToCall, callback) {
    urllib.request(urlToCall, function (err, data, response) {
        if (err) {
            console.log("something went wrong!");
        } else {
            if (!err && response.statusCode == 200)
                return callback(JSON.parse(data));
        }
    });
}

module.exports = doCall;