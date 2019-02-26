function route(handle, pathname, response, reviewData) {
    console.log('routing request for router! = '+ pathname);

    if(typeof handle[pathname] === 'function') {
        handle[pathname](response, reviewData);
    } else {
      console.log('No handler for', pathname);
      response.writeHead(404, {'content-Type': 'text/plain'});
      response.write("Error 404 page not found");
      response.end();
    }
}
exports.route = route;
