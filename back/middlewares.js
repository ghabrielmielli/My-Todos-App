function log(req, res, next) {
    console.log(`Requested URL: ${req.url}      @${Date.now()}`);
    next();
}

module.exports = {log};