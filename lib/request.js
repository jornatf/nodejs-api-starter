/**
 * Get current full URL from a request.
 * @param {*} req
 * @returns String
 */
exports.fullUrl = function (req) {
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = process.env.PORT || 8000;

    return port
        ? `${protocol}://${host}:${port}${url}`
        : `${protocol}://${host}${url}`;
}