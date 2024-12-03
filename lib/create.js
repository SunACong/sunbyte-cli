import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { templates } from './templates.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function createProject(projectName, template) {
  const targetDir = path.join(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    throw new Error(`Directory ${projectName} already exists`);
  }

  try {
    await fs.mkdir(targetDir);
    await createProjectStructure(targetDir, template);
    await generatePackageJson(targetDir, projectName, template);
    return targetDir;
  } catch (error) {
    if (fs.existsSync(targetDir)) {
      await fs.remove(targetDir);
    }
    throw error;
  }
}

async function createProjectStructure(targetDir, template) {
  const dirs = ['src', 'public', 'src/components', 'src/assets'];
  
  for (const dir of dirs) {
    await fs.mkdir(path.join(targetDir, dir), { recursive: true });
  }

  switch (template) {
    case 'vue3':
      await createVue3Template(targetDir);
      break;
    case 'vue2':
      await createVue2Template(targetDir);
      break;
    case 'react':
      await createReactTemplate(targetDir);
      break;
  }
}

async function generatePackageJson(targetDir, projectName, template) {
  const templateConfig = templates[template];
  
  const packageJson = {
    name: projectName,
    version: '0.1.0',
    private: true,
    scripts: {
      dev: template === 'vue2' ? 'vue-cli-service serve' : 'vite',
      build: template === 'vue2' ? 'vue-cli-service build' : 'vite build',
      preview: template === 'vue2' ? 'serve dist' : 'vite preview'
    },
    dependencies: templateConfig.dependencies,
    devDependencies: templateConfig.devDependencies
  };

  await fs.writeJson(path.join(targetDir, 'package.json'), packageJson, { spaces: 2 });
}

async function createVue3Template(targetDir) {
  const files = {
    'src/main.js': `import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')`,
    'src/App.vue': `<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>
    <h1>Vue 3 + Vite Template</h1>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<style scoped>
button {
  padding: 8px 16px;
  margin: 8px;
}
</style>`,
    'index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue 3 App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>`,
    'vite.config.js': `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()]
})`
  };

  for (const [filePath, content] of Object.entries(files)) {
    await fs.writeFile(path.join(targetDir, filePath), content);
  }
}

async function createVue2Template(targetDir) {
  const files = {
    'src/main.js': `import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})`,
    'src/App.vue': `<template>
  <div>
    <h1>Vue 2 Template</h1>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style>
button {
  padding: 8px 16px;
  margin: 8px;
}
</style>`,
    'public/index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Vue 2 App</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>`,
    'vue.config.js': `module.exports = {
  lintOnSave: false,
  runtimeCompiler: true
}`
  };

  for (const [filePath, content] of Object.entries(files)) {
    await fs.writeFile(path.join(targetDir, filePath), content);
  }
}

async function createReactTemplate(targetDir) {
  const files = {
    'src/main.jsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)`,
    'src/App.jsx': `import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React + Vite Template</h1>
      <button onClick={() => setCount(count + 1)}>
        Count is: {count}
      </button>
    </div>
  )
}

export default App`,
    'index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,
    'vite.config.js': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})`
  };

  for (const [filePath, content] of Object.entries(files)) {
    await fs.writeFile(path.join(targetDir, filePath), content);
  }
}