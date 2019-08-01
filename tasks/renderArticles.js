import fs from 'fs'
import { src, dest } from 'gulp'
import merge from 'merge-stream'
import render from 'gulp-nunjucks-render'
import envManager from './util/envManager'
import data from 'gulp-data'
import markdownParser from 'gulp-markdown'

import { articles as articlesConfig } from '../config'

const renderConfig = {
  path: articlesConfig.templateSrc,
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

  const articleGulpStream = articles.map(article => {
    const { fileName } = article

    const filePath = `./src/articles/${fileName}`

    return src(filePath)
      .pipe(markdownParser())
      .pipe(data(article))
      .pipe(render(renderConfig))
      .pipe(dest(articlesConfig.dist))
  })

  return merge(articleGulpStream)
}
