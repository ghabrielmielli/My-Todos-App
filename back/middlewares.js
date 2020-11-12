//Logs the requested URL on the console.
function logURL(req, res, next) {
	console.log(`Requested URL: ${req.url}  AT  @${Date.now()}`);
	next();
}

module.exports = { logURL };
