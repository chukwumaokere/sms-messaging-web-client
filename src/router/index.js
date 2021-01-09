import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home';
import PageNotFound from '@/views/PageNotFound'


const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/conversations/:conversationid',
        name: "Conversation",
        component: Home,
        props: true,
        meta: {
            title: "Conversation with X",
            metaTags: [
              { name: 'description', content: "Conversation with X" }, 
              { property: 'og:description', content: "Conversation with X" },
            ],
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
        meta: {
          title: "404 — Page Not Found"
        },
      },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router