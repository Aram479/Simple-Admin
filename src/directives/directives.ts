import dayjs from "dayjs";
import type { App } from "vue";

/* 时间过滤 */
export default function (app: App) {
  app.directive("format-time", {
    created(el: HTMLDivElement, bindings: any) {
      bindings.formatString = "YYYY-MM-DD HH:mm:ss";
      if (bindings.value) {
        bindings.formatString = bindings.value;
      }
    },
    mounted(el: HTMLDivElement, bindings: any) {
      const textContent = el.textContent;
      if (textContent) {
        let timestamp = Date.parse(textContent);
        if (textContent.length === 10) {
          timestamp = timestamp * 1000;
        }
        el.textContent = dayjs(timestamp).format(bindings.formatString);
      }
    },
  });
}
