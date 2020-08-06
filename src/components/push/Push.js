export default class Push {
  constructor(element) {
    this._element = element

    this.onPAReady = this.onPAReady.bind(this)

    ;(window.pushalertbyiw || []).push(['onReady', this.onPAReady])
  }

  onPAReady() {
    console.log('READY!')
    this._element.addEventListener('click', Push._handleClick)
  }

  static _handleClick() {
    window.PushAlertCo.init()
    PushAlertCo.init()
    window.PushAlertCo.triggerMe(true)
    PushAlertCo.triggerMe(true)
  }
}
