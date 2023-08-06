/*
 * @Author: Gauche楽
 * @Date: 2023-07-16 17:22:51
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-08-05 16:30:42
 * @FilePath: /GaucheIM/vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
