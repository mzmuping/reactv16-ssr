import Home from '../components/app'
import List from '../pages/list'

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/list',
    component: List,
  },
]
