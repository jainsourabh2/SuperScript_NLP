import superscript from 'superscript';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';

var app = express();
//var server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const IP = 'localhost';

app.use(bodyParser.json());

let bot;

app.get('/superscript', (req, res) => {
  if (req.query.message) {
    return bot.reply('user1', req.query.message, (err, reply) => {
      res.json({
        message: reply.string,
      });
    });
  }
  return res.json({ error: 'No message provided.' });
});

const options = {
  factSystem: {
    clean: true,
  },
  importFile: './data.json',
};

superscript.setup(options, (err, botInstance) => {
  if (err) {
    console.error(err);
  }
  bot = botInstance;

  app.listen(PORT, () => {
    console.log(`===> ..  Server is now running on port ${PORT}`);
  });
});

