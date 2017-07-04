'use strict';

var _superscript = require('superscript');

var _superscript2 = _interopRequireDefault(_superscript);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
//var server = http.createServer(app);
var PORT = process.env.PORT || 5000;
var IP = 'localhost';

app.use(_bodyParser2.default.json());

var bot = void 0;

app.get('/superscript', function (req, res) {
  if (req.query.message) {
    return bot.reply('user1', req.query.message, function (err, reply) {
      res.json({
        message: reply.string
      });
    });
  }
  return res.json({ error: 'No message provided.' });
});

var options = {
  factSystem: {
    clean: true
  },
  importFile: './data.json'
};

_superscript2.default.setup(options, function (err, botInstance) {
  if (err) {
    console.error(err);
  }
  bot = botInstance;

  app.listen(PORT, function () {
    console.log('===> ..  Server is now running on port ' + PORT);
  });
});