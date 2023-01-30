const Hapi = require('@hapi/hapi');
const { urls } = require('./urls');

const init = async () => {
    // initial server
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    // set router
    server.route([
        {
            method: 'GET',
            path: urls.index,
            handler: (request, reply) => {
                return `<h1>Hello, this from index page</h1>
                        <ol>
                            <li>
                                <a href='\page-one'><h2>page one</a></h2>
                            </li>
                            <li>
                                <a href='\page-two'><h2>page two</a></h2> 
                            </li>
                            <li>
                                <a href='\page-three'><h2>page three</a></h2>
                            </li>
                        </ol>`;
            },
        },
        {
            method: 'GET',
            path: urls.halaman1,
            handler: (request, reply) => {
                return '<h1>Hello, this from page one</h1>';
            },
        },
        {
            method: 'GET',
            path: urls.halaman2,
            handler: (request, reply) => {
                return '<h1>Hello, this from page two</h1>';
            },
        },
        {
            method: 'GET',
            path: urls.halaman3,
            handler: (request, reply) => {
                return '<h1>Hello, this from page three</h1>';
            },
        },
    ]);

    // start server
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};


init();