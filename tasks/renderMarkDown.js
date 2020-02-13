import fs from 'fs'
import { src, dest } from 'gulp'
import merge from 'merge-stream'
import render from 'gulp-nunjucks-render'
import envManager from './util/envManager'
import data from 'gulp-data'
import MarkdownParser from 'markdown-it'
import rename from 'gulp-rename'

import { html as htmlConfig } from '../config'

const md = new MarkdownParser()

/**
 * Check if the filename start with a dot
 * @param {String} fileName
 * @returns {Boolean}
 */
const isNotDotFile = fileName => fileName.charAt(0) !== '.'

const getArticleNamesFromFileSystem = filePath =>
  fs.readdirSync(filePath, 'utf-8').filter(isNotDotFile)

export default config => {
  const renderConfig = {
    path: [
      config.templateSrc,
      htmlConfig.src.templatesDir,
      htmlConfig.src.layoutDir,
      htmlConfig.src.componentsDir
    ],
    manageEnv: envManager
  }

  const fileNames = getArticleNamesFromFileSystem(config.src)

  const articleGulpStream = fileNames.map(fileName => {
    const filePath = `${config.src}/${fileName}`

    const markDownFileContents = fs.readFileSync(filePath, 'utf-8')
    const result = md.render(markDownFileContents)

    return src(config.templateSrc)
      .pipe(
        data({
          body: result,
          header: {
            nav: {
              articlesActive: true
            }
          }
        })
      )
      .pipe(render(renderConfig))
      .pipe(rename(fileName.replace('md', 'html')))
      .pipe(dest(config.dist))
  })

  return merge(articleGulpStream)
}
