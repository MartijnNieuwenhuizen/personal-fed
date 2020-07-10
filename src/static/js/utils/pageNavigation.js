import getPageHTML from './getPageHTML'

const updateHistory = url => {
  // @Improvement, use push and pop state to handle navigation with JS and add motion
  // history.pushState(null, '', url)
  window.location = url
}

export const navigateToNextPage = mainElement => async url => {
  const nextPageHTML = await getPageHTML(url)

  if (!nextPageHTML) {
    return
  }

  const newMainElement = nextPageHTML.querySelector('main')

  mainElement.innerHTML = newMainElement.innerHTML
  updateHistory(url)
}
