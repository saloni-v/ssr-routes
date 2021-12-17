import Home from './Home'
//import Grid from './Grid'
import ContactUs from './ContactUs'
//import { fetchPopularRepos } from './api'

const routes =  [
  {
    path: '/contact',
    component: ContactUs,
  },
  {
    path: '/',
    component: Home,
  },

//   {
//     path: '/popular/:id',
//     component: Grid,
//     fetchInitialData: (path = '') =>
//       fetchPopularRepos(path.split('/').pop())
//   }
]

export default routes