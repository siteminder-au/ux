# SUI Prototyping Environment

A Vue 3-based prototyping environment for testing and demonstrating SUI components.

## Quick Start

```bash
cd vue-prototypes
npm install
npm run dev
```

Open http://localhost:3001

## Structure

```
prototyping-stub/
├── sui-vue3/           # SUI component library
└── vue-prototypes/     # Vue prototyping environment
    ├── src/
    │   ├── App.vue                  # Navigation
    │   ├── prototypes/
    │   │   ├── _template/           # Template for new prototypes
    │   │   ├── component-showcase/  # SUI component demo
    │   │   └── example-multi-file/  # Multi-file prototype example
    │   └── shared/                  # Shared components
    └── README.md                    # Full documentation
```

## Features

- **Vue 3 + Vite** - Fast development with HMR
- **jQuery Support** - For rapid prototyping with DOM manipulation
- **SUI Components** - Direct access to all SUI Vue components
- **Multi-file Prototypes** - Break complex prototypes into multiple components
- **Simple Navigation** - Switch between prototypes with one click

## Creating a New Prototype

See [vue-prototypes/README.md](vue-prototypes/README.md) for detailed instructions.

Quick version:
1. Copy `src/prototypes/_template` to a new folder
2. Add it to `src/App.vue`
3. Start building!
