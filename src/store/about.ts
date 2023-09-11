import { Store } from "../core/com";

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://velog.velcdn.com/images/hwadong119/post/90ae1393-c882-4dd8-8b7e-8ea38386cd08/image.png',
  name: 'HWADONG',
  email: 'jeonghwayun0119@naver.com',
  blog: 'https://velog.io/@hwadong119',
  github: 'https://github.com/hwadong119',
  repository: 'https://github.com/hwadong119/remove-movie-app'
})