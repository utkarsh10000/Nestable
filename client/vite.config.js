import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://nestable-1.onrender.com',
        secure: false,
      },
    },
  },

  plugins: [react()],
});
