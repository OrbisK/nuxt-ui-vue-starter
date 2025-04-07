import { defineConfig, Plugin } from "vite"
import vue from "@vitejs/plugin-vue"
import ui from "@nuxt/ui/vite"


// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
  },
  optimizeDeps: {
    exclude: ["@nuxt/ui"]
  },
  plugins: [
    {
      enforce: "pre",
      name: "test",
      resolveId: (id)=>{
        console.log(id)
        if(id === '#imports') {
          console.log("resolved")
        }
      }
    } satisfies Plugin,
    vue(),
    ui({
      ui: {
        colors: {
          primary: "green",
          neutral: "slate"
        }
      }
    }),
  ]
})
