const express = require('express');
const compression = require('compression');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || (dev ? 4110 : 80);
const app = express();
const handle = app.getRequestHandler();

app.prepare().then(() => {
    // const server = express();

    app.use(compression());

    app.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true);

        handle(req, res, parsedUrl);
    }).listen(PORT, err => {
        if (err) throw err;
        //eslint-disable-next-line
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});