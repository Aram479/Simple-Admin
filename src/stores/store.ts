import type { App } from "vue";
import { createPinia } from "pinia";
const store = createPinia();
function aaa() {
  return {
    isNProgress: false
  }
}
export function setupStore(app: App<Element>) {
  app.use(store);
  store.use(aaa)
}

export { store };
