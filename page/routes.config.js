const ContentMiddleware = require('../common/middlewares/main.content.middleware');
const config = require('../common/config/env.config');

exports.routesConfig = function (app) {
    app.post('/', [
        ContentMiddleware.sendPage("home"),
    ]);
};