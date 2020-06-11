import * as express from 'express';
import stocks from './stocks';
import trades from './trades';
import erase from './erase';

const index = express.Router();

/* GET home page. */
index.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export { index, stocks, trades, erase };