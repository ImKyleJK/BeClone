const config = require('./common/config/env.config.js');

const express = require('express');
const app = express();

const AuthorizationRouter = require('./authorization/routes.config');
const UsersRouter = require('./users/routes.config');
const ContentRouter = require('./page/routes.config');
const PublicRouter = require('./public/routes.config');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(express.json());
AuthorizationRouter.routesConfig(app);
UsersRouter.routesConfig(app);
ContentRouter.routesConfig(app);
PublicRouter.routesConfig(app);


app.listen(80, function () {
    console.log(`⚡️[server]: Server is running on port 80`);
});