const createProxyMiddleware = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "https://api-celestiallearning.herokuapp.com",
            changeOrigin: true
        })
    );
}
