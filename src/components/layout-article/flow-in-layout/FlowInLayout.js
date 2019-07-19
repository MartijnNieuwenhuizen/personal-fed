class FlowInLayout {
  constructor(element, options) {
    this._element = element
    this._options = options

    this._getElements()
    this._setEventListeners()

    // Bindings
    this._handleClick = this._handleClick.bind(this)
    this._makeTriggersInactive = this._makeTriggersInactive.bind(this)
    this._setType = this._setType.bind(this)
  }

  static _makeTriggerActive(trigger) {
    trigger.setAttribute('data-active', true)
  }

  _getElements() {
    this._triggers = Array.from(
      this._element.querySelectorAll(this._options.triggers)
    )
    this._target = this._element.querySelector(this._options.target)
  }

  _setEventListeners() {
    this._triggers.forEach(trigger =>
      trigger.addEventListener('click', e => this._handleClick(e))
    )
  }

  _handleClick(e) {
    this._setType(e.target.dataset.value)
    this._makeTriggersInactive()
    FlowInLayout._makeTriggerActive(e.target)
  }

  _makeTriggersInactive() {
    this._triggers.forEach(trigger =>
      trigger.removeAttribute('data-active', true)
    )
  }

  _setType(value) {
    this._target.setAttribute('data-type', value)
  }
}

export default FlowInLayout
