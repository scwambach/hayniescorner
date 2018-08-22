var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    pump = require('pump'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    eslint = require('gulp-eslint'),
    sassLint = require('gulp-sass-lint'),
    notify = require('gulp-notify'),
    pxtorem = require('gulp-pxtorem'),
    imagemin = require('gulp-imagemin'),
    XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest,
    jsonToYaml = require('gulp-json-to-yaml'),
    clean = require('gulp-clean'),
    fs = require('fs'),
    reload = browserSync.reload,
    tmpData = './.tmpdat',
    dataDest = './data/api',
    src = './source',
    dest = './.tmp',
    css = `${src}/sass`,
    js = `${src}/js`,
    imgs = `${src}/images`;

function errorMessage(err, title) {
  notify.onError({
    actions: 'Close',
    message: 'Error: <%= error.message %>',
    sound: 'Purr',
    subtitle: 'Check console for errors',
    timeout: 30,
  })(err);
}

/* **************************** */
/* ******* Dynamic Data ******* */
/* **************************** */

const pageApi = 'http://admin.hayniescorner.com/wp-json/wp/v2/pages?_embed&per_page=100';
const businessApi = 'http://admin.hayniescorner.com/wp-json/wp/v2/business?_embed&per_page=100';
const eventApi = 'http://admin.hayniescorner.com/wp-json/wp/v2/event?_embed&per_page=100';
const optionsApi = 'http://admin.hayniescorner.com/wp-json/acf/v2/options';
const menusApi = 'http://admin.hayniescorner.com/wp-json/menus/v1/menus/home-nav';

function checkDir(directory) {
  if(!fs.existsSync(directory))  {
    fs.mkdirSync(directory)
  }
}

function collection(url, temp, dir) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const jsonObj = JSON.parse(xhr.responseText);
      checkDir(temp);
      checkDir(dir);
      for (let i = 0; i < jsonObj.length; i += 1) {
        const slug = jsonObj[i].slug;
        fs.writeFile(`${temp}${slug}.json`, JSON.stringify(jsonObj[i]), function (err) {
          if (err) throw err;
        });
        gulp.src(`${temp}${slug}.json`)
          .pipe(jsonToYaml({ safe: true}))
          .pipe(gulp.dest(dir));
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

function singleton(url, slug, temp, dir) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const jsonObj = JSON.parse(xhr.responseText);
      checkDir(temp);
      checkDir(dir);

      fs.writeFile(`${temp}${slug}.json`, JSON.stringify(jsonObj), function (err) {
        if (err) throw err;
      });

      gulp.src(`${temp}${slug}.json`)
        .pipe(jsonToYaml({ safe: true}))
        .pipe(gulp.dest(dir));

    }
  };
  xhr.open('GET', url);
  xhr.send();
}

gulp.task('clean', function () {
  return gulp.src([`${tmpData}`, `${dataDest}`], {read: false})
    .pipe(clean());
});

gulp.task('posts', ['clean'], function() {
  checkDir(tmpData);
  checkDir(dataDest);
  collection(pageApi, `${tmpData}/pages/`, `${dataDest}/pages/`);
  collection(businessApi, `${tmpData}/businesses/`, `${dataDest}/businesses/`);
  collection(eventApi, `${tmpData}/events/`, `${dataDest}/events/`);
  singleton(optionsApi, 'options', `${tmpData}/settings/`, `${dataDest}/settings/`);
  singleton(menusApi, 'menus', `${tmpData}/settings/`, `${dataDest}/settings/`);
});

/* ******************************** */
/* ******* Dynamic Data END ******* */
/* ******************************** */

gulp.task('fonts', function() {
  return gulp.src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./source/fonts'))
});

gulp.task('slickFonts', function() {
  return gulp.src('./node_modules/slick-carousel/slick/fonts/*')
    .pipe(gulp.dest('./source/fonts'))
});


gulp.task('imageOptim', function() {
  return gulp.src(`${imgs}/**/*`)
    .pipe(imagemin())
    .pipe(gulp.dest(imgs))
});

gulp.task('jsLint', function() {
  return gulp.src(`${js}/**/*.js`)
    .pipe(plumber({
      errorHandler: function errors(err) {
        errorMessage(err, 'JS error');
        this.emit('end');
      },
    }))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});

gulp.task('js', ['jsLint'], function() {
  return gulp.src(`${js}/site.js`)
    .pipe(sourcemaps.init())
    .pipe(browserify())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${dest}/js`))
});

gulp.task('sass', function() {
  return gulp.src(`${css}/**/*.s+(a|c)ss`)
    .pipe(plumber({
      errorHandler: function errors(err) {
        errorMessage(err, 'CSS error');
        this.emit('end');
      },
    }))
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(pxtorem())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${dest}/styles`));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: 'localhost:4567',
    open: false,
    reloadDelay: 700,
    files: [`${dest}/**/*.{js,css}`, `${src}/**/*.{html,erb,haml,markdown}`,  './data/**/*.{yml,yaml,json}',]
  });
});

gulp.task('default', ['browser-sync', 'clean', 'posts', 'imageOptim', 'js', 'sass', 'fonts', 'slickFonts'], function() {
  gulp.watch(`${css}/**/*.{css,scss,sass}`, ['sass']);
  gulp.watch(`${js}/**/*.js`, ['js']);
  gulp.watch(`${src}/images/**/*.{png,jpg,svg,gif}`);
});

gulp.task('build', ['clean', 'posts', 'js', 'sass', 'imageOptim']);
