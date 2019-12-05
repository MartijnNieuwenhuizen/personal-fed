export default class MotionPart {
  constructor(element, options) {
    this._element = element
    this._options = options

    this._handleLoopClick = this._handleLoopClick.bind(this)

    this._loopTrigger = this._element.querySelector(this._options.loopTrigger)
    this._runTrigger = this._element.querySelector(this._options.runTrigger)
    this._target = this._element.querySelector(this._options.target)

    this._init()
  }

  _init() {
    this._loopTrigger.addEventListener('click', this._handleLoopClick)
    this._runTrigger.addEventListener('click', () => this._handleRunClick())
  }

  // @TODO: change all style setting changes into CSS vars

  _handleRunClick() {
    this._target.classList.remove('motion-part__block--animate')
    this._setDirection()

    setTimeout(() => {
      this._target.classList.add('motion-part__block--animate')
    }, 10)
  }

  _setDirection() {
    this._target.style.animationDirection =
      this._target.style.animationDirection === 'alternate'
        ? 'reverse'
        : 'alternate'
  }

  _handleLoopClick = event => {
    if (event.target.checked) {
      this._target.classList.add('motion-part__block--animate')
      this._setLoopActive()
      return
    }

    this._setLoopInactive()
  }

  _setLoopActive() {
    this._target.style.animationIterationCount = 'infinite'
  }
  _setLoopInactive() {
    this._target.style.animationIterationCount = ''
  }
}
