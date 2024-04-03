import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'http://localhost:5000', // api ni harre append thy jase ane proxy lagi jase k same origin thi request aav che 
    }
  },
  plugins: [react()],
})
