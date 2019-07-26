export default class DontInfluenceTheLayout {
  constructor(element, options) {
    this._element = element
    this._options = options

    this._getElements()
    this._setEventListeners()
  }

  _getElements() {
    this._trigger = this._element.querySelector(this._options.trigger)
    this._targets = Array.from(
      this._element.querySelectorAll(this._options.target)
    )
  }

  _setEventListeners() {
    this._trigger.addEventListener('click', () => this._handleClick())
  }

  _handleClick() {
    this._targets.forEach(target => target.toggleAttribute('data-active'))
    this._trigger.toggleAttribute('data-active')
  }
}
