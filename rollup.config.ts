import json from "@rollup/plugin-json"
import typescript from "@rollup/plugin-typescript"
import { defineConfig } from "rollup"
import prettier from "rollup-plugin-prettier"

export default defineConfig({
  input: "src/index.tsx",
  output: {
    dir: "dist/",
    format: "esm",
  },
  plugins: [typescript(), json(), prettier()],
  external: ["react", "react/jsx-runtime", "react-hook-form"],
})
