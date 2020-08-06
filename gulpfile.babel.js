/* eslint-disable sort-imports */

import { series, parallel } from 'gulp'

// Load tasks
import { clean } from './tasks/clean'
import { codestyle, codestyleIsValid } from './tasks/codestyle'
import { browserSync } from './tasks/browsersync'
import { html, htmlWatch } from './tasks/html'
import { img, imgWatch } from './tasks/img'
import { css, cssWatch, cssLint } from './tasks/css'
import { docs, docsWatch } from './tasks/docs'
import { fonts, fontsWatch } from './tasks/fonts'
import { js, jsLint, jsTest } from './tasks/js'
import { fileUpload } from './tasks/upload'
import { githooks } from './tasks/githooks'
import { zip } from './tasks/zip'
import { renderArticles } from './tasks/renderArticles'
import { renderBlogs } from './tasks/renderBlogs'
import { move, moveWatch } from './tasks/move'

function dev(cb) {
  return series(
    clean,
    parallel(renderArticles, renderBlogs),
    parallel(docs, html, img, css, fonts, move),
    parallel(
      js,
      browserSync,
      docsWatch,
      htmlWatch,
      imgWatch,
      cssWatch,
      fontsWatch,
      moveWatch
    )
  )(cb)
}

function articles(cb) {
  return series(parallel(renderArticles, renderBlogs))(cb)
}

function dist(cb) {
  return series(
    clean,
    parallel(renderArticles, renderBlogs),
    parallel(docs, html, img, css, fonts, move, js),
    zip
  )(cb)
}

function codequality(cb) {
  return parallel(cssLint, jsLint)(cb)
}

function test(cb) {
  return series(jsTest)(cb)
}

function upload(cb) {
  return series(dist, fileUpload)(cb)
}

export {
  githooks,
  codestyle,
  codestyleIsValid,
  dev,
  dist,
  codequality,
  test,
  upload,
  articles
}
