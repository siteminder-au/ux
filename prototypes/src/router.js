import { createRouter, createWebHistory } from 'vue-router'
import Index from './Index.vue'

// Automatically discover all prototype components
// Looks for any .vue file in each prototype folder (will use the first one found)
const prototypeModules = import.meta.glob('./prototypes/*/[A-Z]*.vue', { eager: true })

// Build routes from discovered prototypes
const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
]

// Group components by prototype folder
const prototypesByFolder = {}
for (const path in prototypeModules) {
  const match = path.match(/\.\/prototypes\/([^/]+)\/([^/]+\.vue)$/)
  if (match && match[1] !== '_template') {
    const protoId = match[1]
    const fileName = match[2]

    // Only add if we haven't seen this prototype folder yet,
    // or if the filename matches the folder name (preferred)
    if (!prototypesByFolder[protoId] || fileName.toLowerCase().includes(protoId.toLowerCase())) {
      prototypesByFolder[protoId] = prototypeModules[path].default
    }
  }
}

// Create routes from grouped prototypes
for (const [protoId, component] of Object.entries(prototypesByFolder)) {
  routes.push({
    path: `/${protoId}`,
    name: protoId,
    component
  })
}

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
