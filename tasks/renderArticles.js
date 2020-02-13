import { articles as articlesConfig } from '../config'

import renderMarkDown from './renderMarkDown'

export const renderArticles = () => renderMarkDown(articlesConfig)
