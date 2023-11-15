/* eslint-disable no-unused-vars */
// var ms = require('./minestat');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
const fs = require('fs');

var app = express();

// Function to get all files in a directory and its subdirectories
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Get all files in the 'images' directory and its subdirectories
const imagePaths = getFiles(path.join(__dirname, 'public/images'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/images', (req, res) => {
  res.render('images', { imagePaths });
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Edit to add more pages
var indexRouter = require('./routes/index');
var minecraftRouter = require('./routes/minecraft');
// var deadmcRouter = require('./routes/deadmc');
var projectsRouter = require('./routes/projects');
// var imagesRouter = require('./routes/images');
// var gameshowRouter = require('./routes/gameshow');
// var minecraftCeriRouter = require('./routes/Ceri');
// var minecraftCeriMembersRouter = require('./routes/ceri-members');
// var cookRouter = require('./routes/cook');

app.use('/', indexRouter);
app.use('/', minecraftRouter);
// app.use('/', deadmcRouter);
app.use('/', projectsRouter);
// app.use('/', imagesRouter);
// app.use('/', gameshowRouter);
// app.use('/', minecraftCeriRouter);
// app.use('/', minecraftCeriMembersRouter);
// app.use('/', cookRouter);
// Not under here though

// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app;
