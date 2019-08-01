import { src, dest } from 'gulp'
import markdownParser from 'gulp-markdown'

import { articles as config } from '../config'

export const markdown = () =>
  src(config.src)
    .pipe(markdownParser())
    .pipe(dest(config.dist))
