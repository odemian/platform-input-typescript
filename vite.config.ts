import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import platformImport from "./plugins/platformImport";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      platformImport({ platform: "office" }),
      react()
  ]
})
