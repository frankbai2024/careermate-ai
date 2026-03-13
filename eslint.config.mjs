import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],  // 所有 JS / TS 文件
    plugins:{
      react: pluginReact,
      "react-hooks":pluginReactHooks,
    },
    rules: {
      "no-undef": "error" // 未定义变量直接红色波浪线
    }
  }
]);

export default eslintConfig;
