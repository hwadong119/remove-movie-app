import { Component } from "../core/com";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/hwadong119/remove-movie-app">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/hwadong119">
          ${new Date().getFullYear()}
          HWADONG
        </a>
      </div>
    `
  }
}