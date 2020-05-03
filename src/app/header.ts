import { domInject } from './helpers/decorators'

export class Header {

  @domInject('.title')
  private _title: HTMLElement

  constructor() {
    console.log(`This is a header constructor`)
    console.log(this)
  }

  setTitle(title: string) {
    this._title.innerHTML = title
  }

  getFirstHeading() {
    return `Webpack starter page`
  }
}