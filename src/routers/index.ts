import { createRouter, createWebHashHistory } from 'vue-router'

const staticRouters: { name: string; path: string }[] = [
  {
    path: '/hello-world',
    name: 'HelloWorld',
  },
  {
    path: '/expanding-card',
    name: 'ExpandingCard',
  },
  {
    path: '/',
    name: 'Index',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRouters.map((r) => ({
    path: r.path,
    name: r.name,
    component: () => import(`@/views/${r.name}.vue`),
  })),
})

export { router, staticRouters }
