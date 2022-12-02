import { createRouter, createWebHashHistory } from 'vue-router'

const staticRouters: { name: string; path: string }[] = [
  {
    path: '/expanding-card',
    name: 'ExpandingCard',
  },
  {
    path: '/progress-steps',
    name: 'ProgressSteps',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/components',
      name: 'components',
      component: () => import(`@/views/HelloWorld.vue`),
      children: staticRouters.map((r, index) => ({
        path: r.path,
        name: r.name,
        component: () => import(`@/views/${r.name}.vue`),
        meta: {
          nextName:
            index === staticRouters.length - 1
              ? null
              : staticRouters[index + 1].name,
          prevName: index === 0 ? null : staticRouters[index - 1].name,
        },
      })),
    },
    {
      path: '/',
      name: 'Index',
      component: () => import(`@/views/Index.vue`),
    },
  ],
})

export { router, staticRouters }
