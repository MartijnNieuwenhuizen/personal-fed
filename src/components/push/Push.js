export default class Push {
  constructor(element) {
    this._element = element

    this.onPAReady = this.onPAReady.bind(this)

    ;(window.pushalertbyiw || []).push(['disableAutoInit', true])
    ;(window.pushalertbyiw || []).push(['onReady', this.onPAReady])
    console.log('window.pushalertbyiw: ', window.pushalertbyiw)
  }

  onPAReady() {
    console.log('READY!')
    this._element.addEventListener('click', Push._handleClick)
  }

  static _handleClick() {
    window.PushAlertCo.forceSubscribe()
  }
}
