import getPageHTML from '../../static/js/utils/getPageHTML'

export default class ArticlePrev {
  constructor(element, options) {
    this._element = element
    this._options = options

    this._handleClick = this._handleClick.bind(this)
    this._handleTransitionEnd = this._handleTransitionEnd.bind(this)
    this._handleAnimationEnd = this._handleAnimationEnd.bind(this)

    this._newUrl = ''
    this._newRootHTML = ''

    this._cacheElements()
    this._setListeners()
  }

  _cacheElements() {
    const { rootElement, triggerElement, transitionElement } = this._options

    this._rootElement = document.querySelector(rootElement)
    this._triggerElement = this._element.querySelector(triggerElement)
    this._transitionElement = this._element.querySelector(transitionElement)
  }

  _setListeners() {
    this._triggerElement.addEventListener('click', this._handleClick)
  }

  _setTransitionEndListener() {
    this._transitionElement.addEventListener(
      'transitionend',
      this._handleTransitionEnd
    )
  }
  _removeTransitionEndListener() {
    this._transitionElement.removeEventListener(
      'transitionend',
      this._handleTransitionEnd
    )
  }

  _handleClick(event) {
    event.preventDefault()

    this._newUrl = event.target.href
    this._setTransitionEndListener()
    this._element.setAttribute('data-animate', true)
  }

  _handleTransitionEnd() {
    this._fetchHTMLOfNextPage()
  }

  _handleAnimationEnd() {
    this._setNewHTMLToRootElement()
    this._removeAnimationEndListener()
    ArticlePrev._updateHistory(this._newUrl)
  }

  async _fetchHTMLOfNextPage() {
    const nextPageHTML = await getPageHTML(this._newUrl)

    if (!nextPageHTML) {
      return
    }

    this._newRootHTML = nextPageHTML.querySelector('main').innerHTML

    this._removeTransitionEndListener()
    this._setTransitionHTML()
  }

  // Set custom HTML to innerHTML as animate out animation
  _setTransitionHTML() {
    this._rootElement.innerHTML = `
<div class="foo">
  <div class="foo-animation"></div>
</div>
`

    this._rootElement.addEventListener('animationend', this._handleAnimationEnd)
  }

  _removeAnimationEndListener() {
    this._rootElement.removeEventListener(
      'animationend',
      this._handleAnimationEnd
    )
  }

  _setNewHTMLToRootElement() {
    this._rootElement.innerHTML = this._newRootHTML
  }

  static _updateHistory(url) {
    // history.pushState(null, '', href)
    window.location = url
  }
}
