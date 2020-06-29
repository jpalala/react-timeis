const curl = new (require( 'curl-request' ))();

module.exports = function (url) {
	curl.get(url)
	.then(({statusCode, body, headers}) => {
	    console.log(statusCode, body, headers)
	}).catch((e) => {
	    console.log(e);
	});
}
