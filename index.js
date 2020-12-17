module.exports = function (config) {
    if (config.backend) require('./lib/backend')(config, auth)
}
