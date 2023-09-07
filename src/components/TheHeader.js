import { Component } from "../core/com";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt4520988'
          },
          {
            name: 'About',
            href: '#/about'
          }
        ]
      }
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a 
        href="#/" 
        class="logo">
        <span>OMDbAPI</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            return /* html */ `
              <li>
                <a href="${menu.href}">
                  ${menu.name}
                </a>
              </li>
            `
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://velog.velcdn.com/images/hwadong119/post/236383d0-9e4a-4fa7-bcf2-9b668ce8663b/image.png" alt="User" />
      </a>
    `
  }
}