const glob = require('glob')

const options = {
  src: 'dist',
  folder: 'templates',
  protocol: 'http',
  baseUrl: 'localhost',
  port: '3000'
}

const { src, protocol, baseUrl, port } = options

const viewports = [
  {
    label: 'small',
    width: 320,
    height: 480
  },
  {
    label: 'medium',
    width: 768,
    height: 768
  },
  {
    label: 'xlarge',
    width: 1500,
    height: 900
  }
]

const getLabel = filename => filename.match(`${src}/(.*).html`)[1]
const getRoute = filename => filename.replace(`${src}/`, '')
const getUrl = filename =>
  `${protocol}://${baseUrl}:${port}/${getRoute(filename)}`

const htmlFiles = glob.sync(`${src}/**/*.html`)
const scenarios = htmlFiles.map(file => ({
  label: getLabel(file),
  url: getUrl(file)
}))

module.exports = {
  id: 'Personal website',
  viewports,
  scenarios,
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    casper_scripts: 'backstop_data/casper_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report'
  },
  casperFlags: [],
  engine: 'puppeteer',
  report: ['browser'],
  debug: false
}
