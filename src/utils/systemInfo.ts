import { useResizeObserver } from "@vueuse/core";
import { useThemesStore } from "@/stores/modules/themes";
import { storeToRefs } from "pinia";
export default function pageResize() {
  useResizeObserver(document.body, (entries) => {
    const entry = entries[0]
    const themesStore = useThemesStore();
    const { isPhone } = storeToRefs(themesStore);
    const { width, height } = entry.contentRect
    if(width <= 786 ) {
      isPhone!.value = true
    } else {
      isPhone!.value = false
    }
  });
}
