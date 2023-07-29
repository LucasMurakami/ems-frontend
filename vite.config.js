import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3030,
    headers: [
      {key: 'Access-Control-Allow-Origin: *'},
      {key: 'Access-Control-Allow-Methods: POST, GET, DELETE, PUT'},
      {key: 'Access-Control-Allow-Headers: *'},
      {key: 'Access-Control-Allow-Credintial: true'}
    ]
  }
})
