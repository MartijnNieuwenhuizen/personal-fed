export default async url => {
  try {
    const response = await fetch(url)
    const responseAsText = await response.text()
    const parser = new DOMParser()

    return parser.parseFromString(responseAsText, 'text/html')
  } catch (err) {
    console.warn('Error in fetching next page HTML: ', err)

    return null
  }
}
