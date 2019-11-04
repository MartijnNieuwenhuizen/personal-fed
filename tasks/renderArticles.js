import fs from 'fs'
import { src, dest } from 'gulp'
import merge from 'merge-stream'
import render from 'gulp-nunjucks-render'
import envManager from './util/envManager'
import data from 'gulp-data'
import MarkdownParser from 'markdown-it'
import rename from 'gulp-rename'

import { articles as articlesConfig, html as htmlConfig } from '../config'

const renderConfig = {
  path: [
    articlesConfig.templateSrc,
    htmlConfig.src.templatesDir,
    htmlConfig.src.layoutDir,
    htmlConfig.src.componentsDir
  ],
  manageEnv: envManager
}

const getArticlesFromConfigFile = filePath => {
  try {
    return JSON.parse(fs.readFileSync(filePath)).articles
  } catch {
    return {}
  }
}

export const renderArticles = () => {
  const articles = getArticlesFromConfigFile(articlesConfig.config)

  const articleGulpStream = fileNames.map(fileName => {
    const filePath = `./src/articles/${fileName}`

    const markDownFileContents = fs.readFileSync(filePath, 'utf-8')
    const result = md.render(markDownFileContents)

    return src(articlesConfig.templateSrc)
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
      .pipe(dest(articlesConfig.dist))
  })

  return merge(articleGulpStream)
}
