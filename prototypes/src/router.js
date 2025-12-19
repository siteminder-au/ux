import { createRouter, createWebHistory } from 'vue-router'
import Index from './Index.vue'

// Import your prototypes
import ComponentShowcase from './prototypes/component-showcase/ComponentShowcase.vue'
import DynamicForm from './prototypes/dynamic-form/DynamicForm.vue'
import SlideLayout from './prototypes/dynamic-form/SlideLayout.vue'
import FilterBar from './prototypes/filter-bar/FilterBar.vue'
import FilterBarSlideLayout from './prototypes/filter-bar/SlideLayout.vue'

// Define routes - add new prototypes here!
const routes = [
  { path: '/', component: Index },
  { path: '/component-showcase', component: ComponentShowcase },
  {
    path: '/dynamic-form',
    component: DynamicForm,
    children: [
      {
        path: '',
        redirect: '/dynamic-form/1'
      },
      {
        path: ':slideNumber',
        name: 'dynamic-form-slide',
        component: SlideLayout,
        props: true,
        beforeEnter: (to, from, next) => {
          const slideNum = parseInt(to.params.slideNumber)
          if (slideNum >= 1 && slideNum <= 5) {
            next()
          } else {
            next('/dynamic-form/1')
          }
        }
      }
    ]
  },
  {
    path: '/filter-bar',
    component: FilterBar,
    children: [
      {
        path: '',
        redirect: '/filter-bar/1'
      },
      {
        path: ':slideNumber',
        name: 'filter-bar-slide',
        component: FilterBarSlideLayout,
        props: true,
        beforeEnter: (to, from, next) => {
          const slideNum = parseInt(to.params.slideNumber)
          if (slideNum >= 1 && slideNum <= 1) {
            next()
          } else {
            next('/filter-bar/1')
          }
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
