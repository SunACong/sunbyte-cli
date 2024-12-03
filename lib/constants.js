export const VERSION = '1.0.0';

export const TEMPLATE_CHOICES = [
  { name: 'Vue 3 + TypeScript + Vite', value: 'vue3' },
  { name: 'Vue 2 + JavaScript + Webpack', value: 'vue2' },
  { name: 'React + TypeScript + Vite', value: 'react' }
];

export const TEMPLATE_REPOS = {
  vue3: 'vitejs/create-vite/packages/create-vite/template-vue-ts',
  vue2: 'vuejs/vue-cli/packages/@vue/cli-service/generator/template',
  react: 'vitejs/create-vite/packages/create-vite/template-react-ts'
};