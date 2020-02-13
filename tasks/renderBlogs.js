import { blogs as blogsConfig } from '../config'

import renderMarkDown from './renderMarkDown'

export const renderBlogs = () => renderMarkDown(blogsConfig)
