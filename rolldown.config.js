import { defineConfig } from "rolldown";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      file: "./dist/eastgold15-iztro.min.js",
      format: "umd",
      name: "eastgold15Iztro",
      sourcemap: true,
    },
    {
      file: "./dist/eastgold15-iztro.esm.js",
      format: "es",
      sourcemap: true,
    },
    {
      file: "./dist/eastgold15-iztro.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
  treeshake: true,
});
