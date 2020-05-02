import { Header } from './app/header'
import { Footer } from './app/footer'
import css from './style.css'
import './app/styles/scss/main.scss'
import webpackgif from './assets/images/webpack.gif'

let header = new Header()
let firstHeading = header.getFirstHeading()
console.log(firstHeading)

let footer = new Footer()
let footerText = footer.getFooterText()
console.log(footerText)

document.querySelector('#webpack-gif').setAttribute('src', webpackgif)