import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js", // entry point
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
      exports: "named"
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true
    }
  ],
  external: ["react", "react-dom"], // VERY IMPORTANT
  plugins: [
    resolve({
      extensions: [".js", ".jsx"]
    }),
    commonjs(),
    postcss({
      extract: false, // keep CSS inside JS
      modules: false
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"]
    }),
    terser()
  ]
};
