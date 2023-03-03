import type { App } from "vue";
import { createI18n } from "vue-i18n";
import messages from "./index";
import localCache from "@/utils/cache";

const i18n = createI18n({
  legacy: false, //处理报错Uncaught (in promise) SyntaxError: Not available in legacy mode (at message-compiler.esm-bundler.js:54:19)
  locale: localCache.getItem("lang") || "zhCN", // 注意locale属性~~~~~~~~！
  messages,
  globalInjection: true, // 全局注入 $t 函数
  silentTranslationWarn: true, // 去掉警告
  missingWarn: false,
  silentFallbackWarn: true, //抑制警告
});

export function vueI18n(app: App) {
  app.use(i18n);
}
