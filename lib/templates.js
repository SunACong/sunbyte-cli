export const templates = {
  vue3: {
    name: 'Vue 3 Template',
    dependencies: {
      vue: '^3.4.0',
      'vue-router': '^4.2.0',
      pinia: '^2.1.0'
    },
    devDependencies: {
      '@vitejs/plugin-vue': '^5.0.0',
      vite: '^5.0.0',
      typescript: '^5.2.0',
      '@vue/compiler-sfc': '^3.4.0'
    }
  },
  vue2: {
    name: 'Vue 2 Template',
    dependencies: {
      vue: '^2.7.0',
      'vue-router': '^3.6.0',
      vuex: '^3.6.0'
    },
    devDependencies: {
      'vue-template-compiler': '^2.7.0',
      '@vue/cli-service': '^5.0.0',
      'serve': '^14.2.1'
    }
  },
  react: {
    name: 'React Template',
    dependencies: {
      react: '^18.2.0',
      'react-dom': '^18.2.0',
      'react-router-dom': '^6.20.0'
    },
    devDependencies: {
      '@types/react': '^18.2.0',
      '@types/react-dom': '^18.2.0',
      '@vitejs/plugin-react': '^4.2.0',
      vite: '^5.0.0',
      typescript: '^5.2.0'
    }
  }
};