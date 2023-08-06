/*
 * @Author: Gauche楽
 * @Date: 2023-07-16 17:22:51
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-08-06 21:01:13
 * @FilePath: /GaucheIM/src/main.ts
 */
import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import App from "./App.vue";
import "normalize.css";
import "./assets/tailwind.css";
import "@arco-design/web-vue/dist/arco.css";
import router from "@/router/index";

createApp(App).use(router).use(ArcoVue).mount("#app");
