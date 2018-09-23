var SCWorker = require('socketcluster/scworker');
var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var morgan = require('morgan');
var healthChecker = require('sc-framework-health-check');

class Worker extends SCWorker {
  run() {
    console.log('   >> Worker PID:', process.pid);
    var environment = this.options.environment;

    var app = express();

    var httpServer = this.httpServer;
    var scServer = this.scServer;

    app.locals.pretty = true;

    app.set('views', __dirname+'/views');
    app.set('view engine', 'jade');


    app.use(express.static(__dirname+'/public'));

    app.get('*', function(req, res) {
      res.render('index', {
        title: 'Home Page'
      });
    });

    if (environment === 'dev') {
      // Log every HTTP request. See https://github.com/expressjs/morgan for other
      // available formats.
      app.use(morgan('dev'));
    }

    // Add GET /health-check express route
    healthChecker.attach(this, app);

    httpServer.on('request', app);

    var ModelController = require('./controllers/ModelController.js')

    var count = 0;

    /*
      In here we handle our incoming realtime connections and listen for events.
    */
    scServer.on('connection', function (client) {
      console.log('Client ' +client.id+ 'has connected!');

      client.on('messages', function(data) {
        ModelController[data.route][data.resource](client,data);
      });
    });
  }
}

new Worker();
