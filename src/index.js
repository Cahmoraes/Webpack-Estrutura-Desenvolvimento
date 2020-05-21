import { Header } from './app/header'
import { Footer } from './app/footer'
import css from './style.css'
import './app/styles/scss/main.scss'
import webpackgif from './assets/images/webpack.gif'

const header = new Header()
header.setTitle(`Welcome to webpack 4 starter`)
const firstHeading = header.getFirstHeading()
console.log(firstHeading)


const footer = new Footer()
const footerText = footer.getFooterText()
console.log(footerText)

document.querySelector('#webpack-gif').setAttribute('src', webpackgif)

const myJob = (op) => new Promise((resolve, reject) => {
  if (op === true) {
    resolve('resolvido')
  } else {
    reject('rejeitado')
  }
})

const doThejob = async () => {
  try {
    const response = (await myJob(true))
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}

doThejob()