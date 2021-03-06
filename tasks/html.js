import { html as config } from '../config'
import { reload } from 'browser-sync'
import { src, dest, series, watch } from 'gulp'
import render from 'gulp-nunjucks-render'
import envManager from './util/envManager'
import data from 'gulp-data'
import fs from 'fs'

/**
 * If a template has a .json file with the same name in the same location, load it as a data source
 * @param {Object} file - The JSON data source
 * @returns {Object}
 */
const getDataForFile = file => {
  try {
    return JSON.parse(fs.readFileSync(file.path.replace('.njk', '.json')))
  } catch (error) {
    return {}
  }
}

/**
 * Task: HTML Compile
 * @returns {NodeJS.WritableStream}
 */
export function html() {
  return src(config.src.templates)
    .pipe(data(getDataForFile))
    .pipe(
      render({
        path: [
          config.src.templatesDir,
          config.src.layoutDir,
          config.src.componentsDir
        ],
        manageEnv: envManager
      })
    )
    .pipe(dest(config.dist.base))
    .on('end', reload)
}

/**
 * Task: HTML Watch
 */
export function htmlWatch() {
  const paths = config.src

  watch(
    [
      paths.templates,
      paths.templatesData,
      paths.layout,
      paths.components,
      paths.componentsData
    ],
    series(html)
  )
}
