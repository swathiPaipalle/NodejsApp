var querystring = require('querystring');

function home(response) {
    console.log('Executing home handler!');
    var htmlFile = '<!DOCTYPE html>' +
        '<html>' +
        '<body>' +
        '<form action="/review" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit">' +
        '</form>' +
        '</body>' +
        '</html>'
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(htmlFile);
    response.end();
}
function review(response, reviewData) {
    console.log('Executing review handler!', reviewData);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('Your Review is - '+ querystring.parse(reviewData).text);
    response.end();
}
exports.home = home;
exports.review = review;
