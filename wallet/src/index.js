const express = require('express');
const app = express();

// Middleware
const morgan = require('morgan');
app.use(morgan('dev'));

// Config data format
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Setting
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Route
app.use(require('./routes'));
app.use('/api/wallet', require('./routes/wallet'));

// Server
app.listen(app.get('port'), () =>   {
    console.log(`start in port: ${app.get('port')}`);
});