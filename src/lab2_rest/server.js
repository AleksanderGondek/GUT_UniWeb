'use strict';
var JsonRestApi = require('json-rest-api');
var inspect = require('util').inspect;
var debug = require('debug')('json-rest-api:example:server');

var RestApi = new JsonRestApi({port: 8000}, function(err) {
    if (err) {
        debug('/ping error: '+inspect(err));
        return;
    }
    console.log('Listening on port 8000.');

    // add a "GET" route
    RestApi.addRoute('get', '/ping', function(req, res, json, qs) {
        var qsExp = {'alpha': 'one', 'beta': '2', 'gamma': 'true'};
        assert.deepEqual(qsExp, qs);
        res.json({success: true, pong: 'pong'});
    });
});