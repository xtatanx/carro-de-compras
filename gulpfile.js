const del = require('del');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

gulp.task('default', () => {
  return runSequence(
    'clean:public',
    'copy:static',
    'webpack:dev-server');
});

gulp.task('build', () => {
  return runSequence(
    'clean:public',
    ['copy:static', 'webpack']);
})


gulp.task('clean:public', () => {
  return del('public');
});


gulp.task('copy:static', () => {
  gulp.src(['dev/img/**/*.{svg,png,jpg,gif}', 'dev/index.html'], {base: 'dev'})
    .pipe(gulp.dest('public'));
});


gulp.task('webpack:dev-server', () => {
  const compiler = webpack(webpackConfig);
  const server = new webpackDevServer(compiler, {
    contentBase: './dev',
    publicPath: '/',
    hot: true,
    inline: true,
    progress: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  });

  server.listen(8080, 'localhost', err => {
    if (err) {
      console.log(err);
    }
  });
});


gulp.task('webpack', callback => {
  const compiler = webpack(webpackConfig, (err, stats) => {
    if (err) {
      return;
    }
    callback();
  });
});
